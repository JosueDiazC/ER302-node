import { InitCom } from "./Functions/System.js";
import { Test1 } from './Examples/Test1.js';

function App() {
  console.log("Starting App");
  InitCom(3);

  console.log("///");
  Test1();
}

App();
