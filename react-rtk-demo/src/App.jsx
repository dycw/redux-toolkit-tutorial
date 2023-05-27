import "./App.css";
import { CakeView } from "./features/cake/cakeView";
import { IcecreamView } from "./features/icecream/icecreamView";
import { UserView } from "./features/user/UserView";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CakeView />
      <IcecreamView />
      <UserView />
    </>
  );
}

export default App;
