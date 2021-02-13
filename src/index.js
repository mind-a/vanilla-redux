import  {createStore} from "redux";
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state=[], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {text: action.text, id: Date.now() }];
        case DELETE_TODO:
            return [];
            //...은 ES6 spread
            //means : 모든 state array의 contents
        default:
            return state;
    //절대 mutate state쓰지 말 것!
    //mutation 변형하는것이 아니라 새로운 상태를 return 해야한다..!
    //state push같은 것들 X
    }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()))

const onSubmit = e => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    store.dispatch({ type: ADD_TODO, text: toDo});
};

form.addEventListener("submit", onSubmit);
