import "react-native-get-random-values";
// import { COSMOS_KEY, COSMOS_ENDPOINT, COSMOS_DATABASE_ID } from "@env";
import { useMutation } from "react-query";
const CosmosClient = require("@azure/cosmos").CosmosClient;

const endpoint = "https://logbook-apps.documents.azure.com:443/";
const key =
  "qm09BiuyJX5NGAQilQoPAFYV9qnZQ2VFI2CYeO1G4sQu4JSutFZMDLAm1A7gPVb7tKvIPkg4eNht8xhJO0dTWw";
const databaseId = "Families";
const containerId = "families";

const mutation = async () => {
  const client = new CosmosClient({ endpoint, key });

  let loadedToDos;

  const operations = [{ op: "replace", path: "/lastName", value: "Martin!" }];

  const response = await client
    .database(databaseId)
    .container(containerId)
    .item((id = "AndersenFamily"), (partitionKeyValue = "AndersenFamily"))
    .patch(operations);

  console.log("LOADED TODOS ", response);
  return response;
};

const useUpdateData = () => {
  return useMutation("todos", () => mutation());
};
export default useUpdateData;
