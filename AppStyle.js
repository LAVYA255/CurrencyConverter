import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E2749",
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  subcontainer: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 12
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1E2749",
    textAlign: "center",
    marginBottom: 20,
    textTransform: "uppercase",
    letterSpacing: 1
  },
  inputContainer: {
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: "#4A90E2"
  },
  label: {
    fontSize: 16,
    color: "#4A90E2",
    marginBottom: 5,
    fontWeight: "600"
  },
  input: {
    height: 45,
    fontSize: 18,
    color: "#1E2749",
    paddingHorizontal: 5
  },
  dropdown: {
    height: 45,
    borderWidth: 1,
    borderColor: "#4A90E2",
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: "center"
  },
  convertButton: {
    backgroundColor: "#4A90E2",
    borderRadius: 10,
    paddingVertical: 12,
    marginTop: 20,
    shadowColor: "#4A90E2",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5
  },
  convertButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: "#1E2749",
    textAlign: "center",
    fontWeight: "500"
  },
  swapButton: {
    backgroundColor: "#E0E0E0",
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 10
  },
  swapButtonText: {
    fontSize: 24,
    color: "#4A90E2"
  }
});

export { styles };