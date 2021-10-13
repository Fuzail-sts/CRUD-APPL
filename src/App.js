import "./App.css";
import { BrowserRouter, Switch ,Route } from "react-router-dom";
import Add from "./components/Add";
import View from "./components/students/View"
import Edit from "./components/students/Edit"
function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Add} />
      <Route exact path="/view/:id" component={View} />
      <Route exact path="/edit/:id" component={Edit} />
    </Switch>
    </BrowserRouter>
  </>
  )
  
}

export default App;
