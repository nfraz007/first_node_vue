<template>
  <div class="todos">
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-6">
        <h2 class="text-center">TODOS</h2>
        <div class="form-group">
          <input type="text" class="form-control" v-model="title" @keyup.enter="add_todo()" placeholder="Write todos here">
        </div>
        <div v-for="todo in todos" :key="todo._id">
          <div class="alert alert-dark alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" @click="delete_todo(todo._id)">&times;</button>
            {{ todo.title }}
          </div>
        </div>
      </div>
      <div class="col-sm-3"></div>
    </div>
  </div>
</template>

<script>
import TodosService from "../service/TodosService";
import axios from "axios";

export default {
  name: 'Todos',
  data() {
    return {
      todos: [],
      error: "",
      title: "",
    }
  },
  async created() {
    this.todos = await TodosService.get_todos();
  },
  methods: {
    async add_todo() {
      await TodosService.add_todo(this.title);
      this.todos = await TodosService.get_todos();
      this.title = "";
    },
    async delete_todo(id) {
      await TodosService.delete_todo(id);
      this.todos = await TodosService.get_todos();
    }
  },
}
</script>

<style lang="scss" scoped>
.todos {
  padding: 50px 0;
}
</style>
