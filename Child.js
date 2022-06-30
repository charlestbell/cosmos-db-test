import React from "react";
import useToDos from "./hooks/useToDos";
import useUpdateData from "./hooks/useUpdateData";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

const Child = () => {
  const { data, isLoading, isSuccess } = useToDos();
  const updateData = useUpdateData();

  // console.log("UPDATE DATA ", updateData);

  console.log("DATA ", data);
  console.log("IS LOADING ", isLoading);
  console.log("IS SUCCESS ", isSuccess);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="Update" onPress={updateData.mutate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Child;
