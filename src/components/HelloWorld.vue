<script setup>
  /* imports */
  import { Icon } from '@iconify/vue'
  import { reactive, onMounted } from 'vue'

  import { collection, addDoc, onSnapshot } from "firebase/firestore";
  import { db } from '../firebase'

  /* todos */
  const state = reactive({
    todos: [],
    newTodoContent: ''
  });

  /* get todos */
  onMounted(()=> {
    
    const q = collection(db, "todos");
    onSnapshot(q, (querySnapshot) => {
      let fbTodos = [];
      querySnapshot.forEach((doc) => {
          const todo = {
            id: doc.id,
            content: doc.data().content,
            done: doc.data().done
          }
          fbTodos.push(todo)
      });
      state.todos = fbTodos
    });
  })

  /* add todo */
  const addTodo = () =>{
    addDoc(collection(db, "todos"), {
      content: state.newTodoContent,
      done: false
    });

    state.newTodoContent = ''
  };

  /* delete todo */
  const deleteTodo = id => {
    state.todos = state.todos.filter( todo => todo.id != id)
  };

  /* toggle Todo */
  const toggleTodo = id => {
    const index = state.todos.findIndex( todo => todo.id === id )
    state.todos[index].done = !state.todos[index].done
  };
</script>

<template>
  <div class="min-h-screen w-full flex items-center justify-center font-sans">
    <div class="bg-white p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
      <div class="mb-8">
        <h1 class="text-grey-darkest">Todo List</h1>
        <form @submit.prevent="addTodo">
          <div class="flex">
            <input 
              v-model="state.newTodoContent"
              class="appearance-none outline-none border border-t-0 border-x-0 w-full py-3 px-3 mr-4 text-grey-darker"
              placeholder="Ajouter Todo">
            <button
              :disabled="!state.newTodoContent"
              :class="state.newTodoContent ? 'cursor-pointer bg-black hover:bg-green' : 'bg-gray opacity-50'"
              class="flex-no-shrin px-6 py-2 border-1 text-white border-none  hover:text-white ">Ajouter</button>
          </div>
        </form>
      </div>
      <div>
        <div 
            v-for="(todo, index) in state.todos"
            :key="todo.id"
            :class="{'bg-green-100' : todo.done, 'mb-4': index !== state.todos.length - 1}"
            class="flex px-4 items-center">
              <p 
                :class="{'line-through' : todo.done}"
                class="w-full text-grey-darkest">{{ todo.content }}</p>
              <button 
                @click="toggleTodo(todo.id)"             
                :class="todo.done ? 'bg-green-600 text-white' : ' text-white hover:bg-green'"
                class="flex-no-shrink cursor-pointer p-2 ml-4 mr-2 border-none">
                <Icon :icon="todo.done ? 'lucide:check' : 'ant-design:close-outlined'" class="text-xl" />
              </button>
              <button 
                @click="deleteTodo(todo.id)"
                class="flex-no-shrink cursor-pointer p-2 ml-2 border-none text-white bg-red-600">
                <Icon icon="lucide:trash-2" class="text-xl" />
              </button>
        </div>
      </div>
    </div>
  </div>
</template>
