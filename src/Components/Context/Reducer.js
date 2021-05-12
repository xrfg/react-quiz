import { v4 as uuid } from "uuid";

export const Reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { ...state, questions: action.payload };
    default:
      return state;
  }
};
