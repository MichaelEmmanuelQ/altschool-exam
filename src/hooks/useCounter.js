import { useReducer } from "react"

function reducer(state, action){
 
  switch(action.type){
    case "add":
      return parseInt(state) + 1;
    
    case "subtract":
      return parseInt(state) === 0? state : parseInt(state) - 1;

    case "reset":
          return 0;

    case "setValue":

      return action.payload? action.payload : state;

    default:

      return state;
  }

}

const useCounter = ()=>{

    
  const [counterValue, dispatch] = useReducer(reducer, 0);

  return [counterValue, dispatch];

}

export default useCounter;