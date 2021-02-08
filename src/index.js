import  {createStore} from "redux";
//store는 데이터를 넣는 곳
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (state = 0) => {
    return state;
};
//reducer는 data를 modify하는 function임
//countModifier가 state를 수정함

const countStore = createStore(countModifier);
console.log(countStore.getState());