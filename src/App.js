import { useEffect } from "react";
import { Route , Switch} from "react-router";
import Login from "./pages/Login/login";
import MainView from "./pages/main-view/main-view";

function App() {
  // useEffect(() => {
  //   const inv = setInterval(() => {
  //     console.clear()
  //   },1)
  // },[])
  return (
    <Switch>
      <Route exact path="/log-in" component={Login} />
      <Route path="/" component={MainView} />
    </Switch>
  );
}

export default App;
