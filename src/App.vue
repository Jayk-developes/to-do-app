<script setup lang="ts">
import Navbar from "./components/Navbar.vue"
import Homepage from "./components/Homepage.vue"
import {list} from "./database_test/Tasks";
import {getTaskAPICurrentList} from "./services/index";
import {computed, ref} from "vue";
import {ITask} from "./database_test/TaskProps";

// list.value = await getTaskAPICurrentList()
// const pastTasks = ref<ITask[]>([])
//
// const ListVHigh = ref<any>([])
// const ListHigh = ref<any>([])
// const ListMid = ref<any>([])
// const ListLow = ref<any>([])
//
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
</script>

<template>
  <div>
    <navbar style="z-index: 10000"></navbar>
    <div style="padding-top: 4rem"></div>

    <suspense>
      <router-view/>
    </suspense>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
