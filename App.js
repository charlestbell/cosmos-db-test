import "react-native-url-polyfill/auto";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
const CosmosClient = require("@azure/cosmos").CosmosClient;
const endpoint = "https://logbook-apps.documents.azure.com:443/";
const key =
  "qm09BiuyJX5NGAQilQoPAFYV9qnZQ2VFI2CYeO1G4sQu4JSutFZMDLAm1A7gPVb7tKvIPkg4eNht8xhJO0dTWw";
const databaseId = "ToDoList";
const containerId = "Items";

const querySpec = {
  query: "SELECT * from c",
};

export default function App() {
  const client = new CosmosClient({ endpoint, key });

  useEffect(async () => {
    console.log("USE EFFECT HIT");

    const response = await client
      .database(databaseId)
      .container(containerId)
      .items.query(querySpec)
      .fetchAll();

    console.log("RESPONSE ", response);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
