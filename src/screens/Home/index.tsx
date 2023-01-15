import { useState, useMemo } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { ItemList } from "../../components/ItemList";
import { styles } from "./styles";

interface IItemProps {
  id: number;
  content: string;
  isDone: boolean;
}

export function Home() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState<IItemProps[]>([]);
  const counts = useMemo(() => {
    const created = tasks.length;
    const dones = tasks.filter((item) => item.isDone == true).length;
    return { created, dones };
  }, [tasks]);

  function handleTaskAdd() {
    let item = {
      id: Math.floor(Math.random() * 1000),
      content: input,
      isDone: false,
    };

    let found = tasks.find((item) => item.content == input);

    if (found !== undefined) {
      return Alert.alert(
        "Tarefa existente",
        "Já existe um uma tarefa na lista com esse nome."
      );
    }
    setTasks((prevState) => [...prevState, item]);
    setInput("");
  }

  function handleRemoveTask(task: IItemProps) {
    Alert.alert("Remover task", "Deseja realmente remover a task?", [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) =>
            prevState.filter((participant) => participant.id !== task.id)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function handleCheckTask(id: number) {
    const newList = tasks.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );

    setTasks(newList);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../../assets/logo.png")} />
      </View>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setInput}
          value={input}
        />
        <TouchableOpacity style={styles.addToList} onPress={handleTaskAdd}>
          <Text>
            <Ionicons name="add-circle-outline" size={20} color="#FFFFFF" />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerCreatedDone}>
        <View style={styles.containerCreated}>
          <Text style={styles.textCreated}>Criadas: {counts.created}</Text>
        </View>
        <View style={styles.containerDone}>
          <Text style={styles.textDone}>Concluídas {counts.dones}</Text>
        </View>
      </View>

      <View style={styles.containerList}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <ItemList
              id={item.id}
              content={item.content}
              isDone={item.isDone}
              onRemoveTask={() => handleRemoveTask(item)}
              onCheckTask={() => handleCheckTask(item.id)}
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.containerEmptyList}>
              <Image
                style={styles.imgEmpty}
                source={require("../../../assets/clipboard.png")}
              />
              <Text style={styles.textEmptyBold}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.textEmptyRegular}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
