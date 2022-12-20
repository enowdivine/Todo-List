import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

const TodoItems = ({ items, deleteTodo }) => {
  return (
    <View style={styles.items}>
      <TouchableOpacity onPress={() => deleteTodo(items.key)}>
        <View style={styles.item}>
          <Text style={styles.itemText}>{items.text}</Text>
          <MaterialIcons
            style={styles.itemIcon}
            name="delete"
            size={20}
            color="red"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemIcon: {},
});

export default TodoItems;
