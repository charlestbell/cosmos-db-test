import "react-native-get-random-values";
// import { COSMOS_KEY, COSMOS_ENDPOINT, COSMOS_DATABASE_ID } from "@env";
import { useQuery } from "react-query";
const CosmosClient = require("@azure/cosmos").CosmosClient;

const endpoint = "https://logbook-apps.documents.azure.com:443/";
const key =
  "qm09BiuyJX5NGAQilQoPAFYV9qnZQ2VFI2CYeO1G4sQu4JSutFZMDLAm1A7gPVb7tKvIPkg4eNht8xhJO0dTWw";
const databaseId = "ToDoList";
const containerId = "Items";

// console.log("COSMOS_KEY", COSMOS_KEY);
// console.log("COSMOS_ENDPOINT", COSMOS_ENDPOINT);
// console.log("COSMOS_DATABASE_ID", COSMOS_DATABASE_ID);

const query = async () => {
  const client = new CosmosClient({ endpoint, key });

  let loadedToDos;

  const querySpec = {
    query: "SELECT * from c",
  };

  const response = await client
    .database(databaseId)
    .container(containerId)
    .items.query(querySpec)
    .fetchAll();

  // response.resources.forEach((logbook) =>
  //   loadedToDos.push(
  //     new Logbook(
  //       logbook.id,
  //       logbook.date,
  //       logbook.title,
  //       logbook.description,
  //       logbook.imageUri
  //     )
  //   )
  // );
  console.log("LOADED TODOS ", response);
  return response;
};

const useToDos = () => {
  return useQuery("todos", () => query());
};
export default useToDos;
