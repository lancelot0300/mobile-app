import { Text, View, TextInput } from "react-native";

export const NameInput = ({ onChangeText, placeholder }) => {
  return (
      <TextInput
        style={{
          height: 40,
          width: 300,
          borderColor: "#fff",
          borderWidth: 1,
          color: "#fff",
          margin: 10,
          padding: 10,
          marginLeft: "auto",
          marginRight: "auto",
        }}
        placeholder={placeholder}
        placeholderTextColor="#fff"
        onChangeText={onChangeText}
      />
  );
};


