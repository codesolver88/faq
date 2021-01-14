import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Faq from "./components/Faq";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [users, setUser] = React.useState(null);
  // React.useEffect(() => {
  //   axios.get("/api").then((res) => {
  //     setUser(res.data);
  //     console.log();
  //   });
  // }, []);

  return (
    // users && (
    //   <div className="App">
    //     {users.users.map(u => {
    //     return <div key={u.id}>{u.name}</div>
    //  })}

    //   </div>
    // )
    <ChakraProvider>
      <Faq />
    </ChakraProvider>
  );
}

export default App;
