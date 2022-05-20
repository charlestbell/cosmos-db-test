import "react-native-url-polyfill/auto";
import { useEffect } from "react";

import { QueryClientProvider, QueryClient } from "react-query";
const CosmosClient = require("@azure/cosmos").CosmosClient;
import Child from "./Child";

export default function App() {
  const queryClient = new QueryClient();

  // useEffect(async () => {
  //   console.log("USE EFFECT HIT");

  //   console.log("RESPONSE ", response);
  // }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Child />
    </QueryClientProvider>
  );
}
