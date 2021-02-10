import  {createStore} from "redux";
//store는 데이터를 넣는 곳
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

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

const onChange = () => {
    number.innerText= countStore.getState();
}
countStore.subscribe(onChange);

const handleAdd = () => {
    countStore.dispatch({type: "ADD"});
};
const handleMinus = () => {
    countStore.dispatch({type: "MINUS"});
};


add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);