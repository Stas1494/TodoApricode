import {makeAutoObservable, runInAction} from "mobx";
import {ITodo, ITodosSchema, queryParamsEnum} from '../types/types'
import {fetchTodos} from "./fetchTodos";
import {updateTodos} from "./updateTodos";
import {postTodo} from "./postTodo";
import {getFilteredTodos} from "./getFilteredTodos";
import {getCompletedTodos} from "./getCompletedTodos";
import {deleteTodo} from "./deleteTodo";

class StoreTodo {
    todosState: ITodosSchema = {
        todos: [],
        isLoading: false,
        error: ''
    }

    constructor() {
        makeAutoObservable(this)
    }

    async addTodo(text: string) {
        const todo = {
            id: String(Date.now()),
            text: text,
            completed: false,
        }
        this.todosState.todos.push(todo)
        await postTodo(todo)
    }

    async filteredTodos(queryParams: queryParamsEnum) {
        const newTodos = await getFilteredTodos(queryParams)
        runInAction(()=>{
            if(newTodos){
                this.todosState.todos = newTodos
            }
        })
    }

    async removeTodo(id: string) {

        const newTodos = this.todosState.todos.filter(todo => todo.id !== id)
        this.todosState.todos = newTodos
        // await updateTodos(filterTodos)
    }

    async completedTodo(todo: ITodo) {
        todo.completed = !todo.completed
        // await getCompletedTodos(todo)
    }

    async getTodos() {
        this.todosState.isLoading = true
        this.todosState.error = undefined
        try {
            const todos = await fetchTodos();
            console.log(todos)
            runInAction(() => {
                if (todos) {
                    this.todosState.todos = todos
                    this.todosState.isLoading = false
                } else {
                    throw new Error()
                }
            })
        } catch (e) {
            runInAction(() => {
                this.todosState.isLoading = false
                this.todosState.error = 'err'
            })
        }
    }
}

export default new StoreTodo();
