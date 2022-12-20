import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

const AddTodo = ({ submitTodo }) => {
  const [text, setText] = useState("");

  const newTodoHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="new todo..."
        onChangeText={(val) => newTodoHandler(val)}
      />
      <Button onPress={() => submitTodo(text)} title="Add Todo" color="coral" />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

export default AddTodo;
