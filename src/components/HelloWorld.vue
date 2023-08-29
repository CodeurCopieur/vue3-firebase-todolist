<script setup>
  /* imports */
  import { Icon } from '@iconify/vue'
  import { ref, reactive } from 'vue'

  /* todos */
  const state = reactive({
    todos: [{id:'id1', content: 'content 1', done: false}, {id:'id2', content: 'content 2', done: true}]
  });

  const { todos } = state;
</script>

<template>
  <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
    <div class="bg-white p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
      <div class="mb-4">
        <h1 class="text-grey-darkest">Todo List</h1>
        <div class="flex">
          <input class="appearance-none outline-none border border-t-0 border-x-0 w-full py-3 px-3 mr-4 text-grey-darker"
            placeholder="Ajouter Todo">
          <button
            class="flex-no-shrink px-6 py-2 border-1 text-white border-none bg-black hover:text-white hover:bg-teal">Ajouter</button>
        </div>
      </div>
      <div>
        <div 
            v-for="todo in todos"
            :key="todo.id"
            class="flex mb-4 items-center">
              <p 
                :class="{'line-through' : !todo.done}"
                class="w-full text-grey-darkest"> {{ todo.content }}</p>
              <button class="flex-no-shrink cursor-pointer p-2 ml-4 mr-2 border-none bg-white hover:text-white text-green hover:bg-green">
                <Icon :icon="todo.done ? 'lucide:check' : 'ant-design:close-outlined'" class="text-xl" />
              </button>
              <button class="flex-no-shrink cursor-pointer p-2 ml-2 border-none bg-white text-red hover:text-white hover:bg-red">
                <Icon icon="lucide:trash-2" class="text-xl" />
              </button>
        </div>
        <!-- <div class="flex mb-4 items-center">
          <p class="w-full line-through text-green">Submit Todo App Component to Tailwind Components</p>
          <button class="flex-no-shrink p-2 ml-4 mr-2 border-none bg-white hover:text-white text-green hover:bg-green">
            <Icon icon="ant-design:close-outlined" class="text-xl" />
          </button>
          <button class="flex-no-shrink p-2 ml-2 border-none bg-white text-red hover:text-white hover:bg-red">
            <Icon icon="lucide:trash-2" class="text-xl" />
          </button>
        </div> -->
      </div>
    </div>
  </div>
</template>
