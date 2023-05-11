<template>
  <h1>Alle Aufgaben</h1>

  <gantt :list="currentTasks"></gantt>


  <TaskCard :task="item" v-for="item in currentTasks"></TaskCard>

  <!--      <fieldset v-for="item in listReturn" :style=colorPrio(item.prio) style="margin: .25rem; height: 3rem">-->
  <!--      {{item.prio}}-->
  <!--      {{item.task}}-->
  <!--        </fieldset>-->

</template>

<script setup lang="ts">
import Gantt from "./Gantt.vue";
import {computed, ref} from 'vue';
import TaskCard from "./TaskCard.vue"
import {getPastTasks} from "../database_test/Tasks"
import {getTaskAPICurrentList} from "../services";
import {ITask} from "../database_test/TaskProps";

const currentTasks = ref<ITask>([])

currentTasks.value = await getTaskAPICurrentList()
console.log(currentTasks.value)

// const currentTasks = computed(() => {
//   const end = ref()
//   const today = new Date()
//
//   list.value.forEach(item => {
//     end.value = item.end.split(".")
//     if (parseInt(end.value[2]) < today.getFullYear() ||
//         (parseInt(end.value[1]) < today.getMonth() && parseInt(end.value[2]) <= today.getFullYear()) ||
//         (parseInt(end.value[0]) < today.getDay() && parseInt(end.value[1]) <= today.getMonth() && parseInt(end.value[2]) <= today.getFullYear())) {
//       pastTasks.value.push(item)
//     } else {
//       // currentTasks.value.push(item)
//       if (item.priority == "Sehr Hoch") {
//         ListVHigh.value.push(item)
//       } else if (item.priority == "Hoch") {
//         ListHigh.value.push(item)
//       } else if (item.priority == "Normal") {
//         ListMid.value.push(item)
//       } else {
//         ListLow.value.push(item)
//       }
//     }
//   })
//   return {
//     // currentTasks: currentTasks.value,
//     currentTasks: ListVHigh.value.concat(ListHigh.value, ListMid.value, ListLow.value),
//     pastTasks: pastTasks.value
//   }
// })

// const sortedList = computed(() => {
//   pastTasks2.value.currentTasks.forEach((item) => {
//     if (item.priority == "Sehr Hoch") {
//       ListVHigh.value.push(item)
//     } else if (item.priority == "Hoch") {
//       ListHigh.value.push(item)
//     } else if (item.priority == "Normal") {
//       ListMid.value.push(item)
//     } else {
//       ListLow.value.push(item)
//     }
//   })
//   return ListVHigh.value.concat(ListHigh.value, ListMid.value, ListLow.value)
// })


// list.value.forEach((item) => {
//   if (item.priority == "Sehr Hoch") {
//     sortedList.value.push(item)
//   }
// })
// list.value.forEach((item) => {
//   if (item.priority == "Hoch") {
//     sortedList.value.push(item)
//   }
// })
// list.value.forEach((item) => {
//   if (item.priority == "Normal") {
//     sortedList.value.push(item)
//   }
// })
// list.value.forEach((item) => {
//   if (item.priority == "Niedrig" || item.priority == "") {
//     sortedList.value.push(item)
//   }
// })
</script>

<style scoped>

</style>
