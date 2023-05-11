<template>
  <h1> Vergangene Aufgaben </h1>

  <TaskCard :task="item" v-for="item in pastTasks"></TaskCard>

</template>

<script setup lang="ts">
import {ITask} from "../database_test/TaskProps";
import TaskCard from "./TaskCard.vue"
import {ref} from "vue";
import {getPastTasks, list} from "../database_test/Tasks";
import {getTaskAPIPastList} from "../services";

const pastTasks = ref<ITask[]>([])

pastTasks.value = await getTaskAPIPastList()
</script>

<style scoped>

</style>
