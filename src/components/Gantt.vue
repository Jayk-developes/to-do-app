<template>
  <fieldset style="overflow: hidden">
    <div class="time-liner"></div>
    <div class="time-liner" style="margin-left: 10rem "></div>
    <div class="time-liner" style="margin-left: 18rem"></div>
    <div class="time-liner" style="margin-left: 26rem"></div>
    <div class="time-liner" style="margin-left: 34rem"></div>
    <div class="time-liner" style="margin-left: 42rem"></div>
    <div class="time-liner" style="margin-left: 50rem"></div>
    <div class="time-liner" style="margin-left: 58rem"></div>
    <div class="time-liner" style="margin-left: 66rem"></div>

    <GanttDetail v-for="items in props.list" :task="items"></GanttDetail>
    <div id="time" v-for="date in dateList2" class="inline">{{ date }}</div>

  </fieldset>

</template>

<script setup lang="ts">

import GanttDetail from "./GanttDetail.vue";
import {list} from "../database_test/Tasks";
import {ref} from "vue";
import {ITask} from "../database_test/TaskProps";
import {dateList2} from "../database_test/Tasks";
import {dates} from "../services";

const props = defineProps<{
  list: ITask
}>()

const today = ref(new Date())
const dateList = ref([today.value.toLocaleDateString()])
const timeLinerLength = ref("1rem")

const timeLiner = () => {
  timeLinerLength.value = props.list.length * 2.25 + "rem"
}

timeLiner()
dates(today, dateList)
</script>

<style scoped>

fieldset {
  overflow: hidden;
  min-width: 0;
  max-width: 60% !important;
  text-overflow: ellipsis;
}

legend {
  min-width: 0;
  max-width: 60%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.inline {
  display: inline;
  white-space: nowrap;
  text-align: left;
  margin-right: 3rem;
}

.time-liner {
  position: absolute;
  z-index: 0;
  width: .125em;
  margin-left: 2rem;
  height: v-bind(timeLinerLength);
  overflow: hidden;
  background-color: rgba(36, 36, 36, 0.4);
}

</style>
