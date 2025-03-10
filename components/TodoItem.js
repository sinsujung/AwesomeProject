import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CheckboxUnchecked from "../assets/checkbox-unchecked.svg";
import CheckboxChecked from "../assets/checkbox-checked.svg";
import DeleteIcon from "../assets/delete.svg";

const TodoItem = () => {
  return (
    <View style={styles.itemContainer}>
      <Pressable hitSlop={10} style={styles.itemCheckbox}>
        <CheckboxUnchecked />
        <CheckboxChecked style={styles.itemCheckboxCheckedIcon} />
      </Pressable>
      <Text style={[styles.itemText, styles.itemTextChecked]}>코딩하기</Text>
      <Pressable
        style={[styles.deleteButton, styles.deleteButtonDone]}
        hitSlop={10}
      >
        <DeleteIcon />
      </Pressable>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "#f7f8fa",
  },
  itemCheckbox: {
    justifyContent: "center",
    alignItems: "center",
    width: 2,
    height: 20,
    marginRight: 13,
    borderRadius: 6,
  },
  itemCheckboxCheckedIcon: {
    shadowColor: "#000000",
    shadowOffset: 0.14,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  itemText: {
    marginRight: "auto",
    paddingRigth: 25,
    fontSize: 15,
    lineHeight: 20,
    color: "#737373",
  },
  itemTextChecked: {
    opacity: 0.3,
    textDecorationLine: "line-through",
  },
  deleteButton: {
    opacity: 0.8,
  },
  deleteButtonDone: {
    opacity: 0.3,
  },
});
