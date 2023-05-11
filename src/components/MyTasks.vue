<template>
  <h1>Meine Aufgaben</h1>

  <Gantt :list="myTasks"></Gantt>

  <TaskCard :task="item" v-for="item in myTasks"></TaskCard>

  <!--      <fieldset v-for="item in listReturn" :style=colorPrio(item.prio) style="margin: .25rem; height: 3rem">-->
  <!--      {{item.prio}}-->
  <!--      {{item.task}}-->
  <!--        </fieldset>-->

</template>

<script setup lang="ts">
import Gantt from "./Gantt.vue";
import {computed, ref} from 'vue';
import TaskCard from "./TaskCard.vue"
import {getPastTasks, list} from "../database_test/Tasks"
import {getTaskAPIMyList} from "../services";
import {ITask} from "../database_test/TaskProps";

const myTasks = ref<ITask[]>([])

myTasks.value = await getTaskAPIMyList(1)


// const myTasks = ref([])
// const sortedList = ref([])
// const pastTasks = ref<ITask[]>([])
//
// list.value.forEach((item) => {
//   item.worker.forEach((worker) => {
//
//     if (worker == "Joshua Koch") {
//       myTasks.value.push(item)
//     }
//   })
// })
//
// getPastTasks(myTasks.value, pastTasks.value)
</script>

<style scoped>

</style>
