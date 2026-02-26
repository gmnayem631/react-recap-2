import { Suspense } from "react";
import "./App.css";
import Bottles from "./Components/Bottles/Bottles";

const bottlesPromise = fetch("./bottles.json").then((response) =>
  response.json(),
);

function App() {
  return (
    <>
      <h1>React Core Concepts Part 2</h1>
      <Suspense fallback={<p>Bottles data is loading...</p>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
