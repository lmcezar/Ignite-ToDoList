import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A1A1A",
    flex: 1,
    // paddingLeft: 24,
    // paddingRight: 24,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    height: 173,
    backgroundColor: "#0D0D0D",
    color: "#FFF",
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 24,
    paddingRight: 24,
  },
  input: {
    width: 327,
    flex: 1,
    backgroundColor: "#262626",
    borderRadius: 6,
    height: 54,
    borderColor: "#0D0D0D",
    borderWidth: 1,
    marginRight: 4,
    paddingLeft: 20,
    paddingRight: 20,
    color: "#FFFFFF",
    marginTop: -28,
  },
  addToList: {
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    height: 52,
    width: 52,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -28,
  },

  containerCreatedDone: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 20,
    marginTop: 32,
  },
  containerCreated: {
    flexDirection: "row",
  },
  textCreated: {
    marginRight: 8,
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "bold",
  },
  containerDone: {
    flexDirection: "row",
  },
  textDone: {
    marginRight: 8,
    color: "#8284FA",
    fontSize: 14,
    fontWeight: "bold",
  },
  textCount: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  containerList: {
    flex: 1,
    borderTopColor: "#333",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderWidth: 1,
    marginLeft: 24,
    marginRight: 24,
  },
  containerEmptyList: {
    width: "100%",
    height: 208,
    justifyContent: "center",
    alignItems: "center",
  },
  imgEmpty: {
    marginBottom: 16,
  },
  textEmptyBold: {
    color: "#808080",
    fontWeight: "bold",
  },
  textEmptyRegular: {
    color: "#808080",
  },
});
