import React, { useContext } from "react";
import Header from "./Components/Header";
import { HashRouter, Route, Switch } from "react-router-dom";
import Container from "./Components/Context/Container";
import Home from "./Components/Home";
import Error404 from "./Components/Error404";
import StatusBar from "./Components/StatusBar";
import Question from "./Components/Question";
import Answer from "./Components/Answer";
import { MyContext } from "./Components/Context/MyContext";

function App() {
  const { questions } = useContext(MyContext);
  return (
    <Container>
      <HashRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/game">
              <StatusBar />
              <Question />
              <Answer />
              <button>submit</button>
            </Route>
            <Route>
              <Error404 />
            </Route>
          </Switch>
        </div>
      </HashRouter>
    </Container>
  );
}

export default App;
