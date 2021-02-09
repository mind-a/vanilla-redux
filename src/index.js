import  {createStore} from "redux";
//store는 데이터를 넣는 곳
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
   // console.log(action);
    //처음 call할때 initialize
    if(action.type === "ADD"){
        return count + 1;
    } else if (action.type === "MINUS") {
        return count - 1;
    } else {
        return count;
    }
};
//reducer는 data를 modify하는 function임
//countModifier가 state를 수정함

const countStore = createStore(countModifier);

countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "MINUS"});

console.log(countStore.getState());