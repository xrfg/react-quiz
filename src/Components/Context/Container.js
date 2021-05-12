import { MyContext } from "./MyContext";
import React, { useEffect, useReducer } from "react";
import { Reducer } from "./Reducer";
import questions from "../../questions";

const initialState = {
  questions: null,
  score: 0,
};

export default function Container(props) {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    //componentDidMount
    dispatch({ type: "load", payload: questions });
  }, []);

  console.log(state.questions);
  return (
    <MyContext.Provider value={{ questions: state.questions, dispatch }}>
      {props.children}
    </MyContext.Provider>
  );
}
