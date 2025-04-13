import { createSlice, nanoid } from "@reduxjs/toolkit";
const loadTodosFromLocalStorage = () => {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : []; // if there's no todos in localStorage, return an empty array
};

const initialState = {
    todos: loadTodosFromLocalStorage(),
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            if (action.payload.trim().length < 1){ console.log("empty string ::");
            alert("u are giving empty string");
            }
            else{
            const todo = {
                id: nanoid(),
                text: action.payload,

            }
            state.todos.push(todo);//general thing for all ...like api call or something....
            saveTodosToLocalStorage(state.todos)
        }
        },
        removeTodo: (state, action) => { 
                state.todos = state.todos.filter((todo) =>
                    todo.id !== action.payload);
                saveTodosToLocalStorage(state.todos);
            
        },

    }
});
const saveTodosToLocalStorage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
};
export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer;
