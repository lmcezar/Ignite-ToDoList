import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  id: number;
  content: string;
  isDone: boolean;
  onRemoveTask: () => void;
  onCheckTask: () => void;
};

export function ItemList({
  content,
  isDone,
  onRemoveTask,
  onCheckTask,
}: Props) {
  return (
    <View style={styles.containerItemList}>
      {isDone ? (
        <TouchableOpacity onPress={onCheckTask}>
          <Ionicons name="checkmark-circle-outline" size={20} color="#5E60CE" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onCheckTask}>
          <Ionicons name="ellipse-outline" size={20} color="#808080" />
        </TouchableOpacity>
      )}
      {isDone ? (
        <Text
          style={{
            textDecorationLine: "line-through",
            textDecorationStyle: "solid",
            color: "#808080",
            fontSize: 14,
          }}
        >
          {content}
        </Text>
      ) : (
        <Text style={{ color: "#FFF", fontSize: 14 }}>{content}</Text>
      )}

      <TouchableOpacity onPress={onRemoveTask}>
        <Ionicons name="trash-outline" size={20} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
