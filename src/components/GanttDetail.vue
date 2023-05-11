<template>
  <router-link class="router-link" :to="{name: 'task_detail', params:{id: task.tid}}">
    <div class="square">
      <div id="scroll-text" style="white-space: nowrap">{{ task.name }}</div>
    </div>
  </router-link>
</template>
<script setup lang="ts">
import {ref} from "vue"
import {ITask} from "../database_test/TaskProps";
import {colorPrio} from "../services";
import {dateList2} from "../database_test/Tasks";

const props = defineProps<{
  task: ITask
}>()

const color = ref("green")
const colorHover = ref("lightgreen")
const timeDuration: any = ref(1)
const scrollDuration: any = ref(1)
const scrollWidth: any = ref("100%")
const scrollWidthLeft: any = ref("-100%")
const taskBeginn = ref(".5rem 0 0 2rem")

const startArray = props.task.start.split(".")
const endArray = props.task.end.split(".")

const getTaskBeginn = () => {
  const i = ref(2)
  const getDuration = ref()
  for (let item = 0; item < dateList2.value.length; item++) {
    if (props.task.start == dateList2.value[item]) {
      taskBeginn.value = ".5rem 0 0 " + i.value + "rem"
      getDuration.value = parseInt(endArray[0]) - parseInt(startArray[0])
      break
    } else if (props.task.end == dateList2.value[item]) {
      if (startArray[1] == endArray[1]) {
        i.value = i.value + (8 * (parseInt(startArray[0]) - parseInt(endArray[0])))
        taskBeginn.value = ".5rem 0 0 " + i.value + "rem"
        getDuration.value = parseInt(endArray[0]) - parseInt(startArray[0])
        break
      } else if (parseInt(startArray[1]) < parseInt(endArray[1]) || parseInt(startArray[2]) < parseInt(endArray[2])) {
        if (parseInt(startArray[1]) == 1 || parseInt(startArray[1]) == 3 || parseInt(startArray[1]) == 5 ||
            parseInt(startArray[1]) == 7 || parseInt(startArray[1]) == 8 || parseInt(startArray[1]) == 10 ||
            parseInt(startArray[1]) == 12) {
          i.value = i.value - (8 * 31)
          getDuration.value = parseInt(endArray[0]) - parseInt(startArray[0]) + 31
        } else if (parseInt(startArray[1]) == 4 || parseInt(startArray[1]) == 6 ||
            parseInt(startArray[1]) == 9 || parseInt(endArray[1]) == 11) {
          i.value = i.value - (8 * 30)
          getDuration.value = parseInt(endArray[0]) - parseInt(startArray[0]) + 30
        } else {
          i.value = i.value - (8 * 28)
          getDuration.value = parseInt(endArray[0]) - parseInt(startArray[0]) + 28
        }
        i.value = i.value + (8 * (parseInt(startArray[0]) - parseInt(endArray[0])))
        taskBeginn.value = ".5rem 0 0 " + i.value + "rem"
        break
      }
    } else {
      i.value += 8
    }
  }
  if (endArray[0] == startArray[0]) {
    getDuration.value = 1
  }
}

getTaskBeginn()


const getDuration = () => {
  if (startArray[1] == endArray[1] && startArray[2] == endArray[2]) {
    if (endArray[0] == startArray[0]) {
      return 1
    } else {
      return parseInt(endArray[0]) - parseInt(startArray[0])
    }
  } else {
    if (parseInt(startArray[1]) == 1 || parseInt(startArray[1]) == 3 || parseInt(startArray[1]) == 5 ||
        parseInt(startArray[1]) == 7 || parseInt(startArray[1]) == 8 || parseInt(startArray[1]) == 10 ||
        parseInt(startArray[1]) == 12) {
      return parseInt(endArray[0]) - parseInt(startArray[0]) + 31
    } else if (parseInt(startArray[1]) == 4 || parseInt(startArray[1]) == 6 ||
        parseInt(startArray[1]) == 9 || parseInt(startArray[1]) == 11) {
      return parseInt(endArray[0]) - parseInt(startArray[0]) + 30
    } else {
      return parseInt(endArray[0]) - parseInt(startArray[0]) + 28
    }
  }
}

const width = () => {
  const duration = getDuration()
  console.log(duration)
  timeDuration.value = duration * 8 + "rem"
  if (duration <= 1) {
    scrollDuration.value = "5s"
  } else if (duration <= 4) {
    scrollDuration.value = duration * 2 + "s"
  } else {
    scrollDuration.value = duration + "s"
  }
  scrollWidth.value = 100 - (duration * 5) + "%"
  scrollWidthLeft.value = -100 + (duration * 5) + "%"
  console.log(scrollDuration.value, scrollWidth.value)
}

colorPrio(props, color, colorHover)
width()

</script>
<style scoped>
.square {
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
  background-color: v-bind(color);
  width: v-bind(timeDuration);
  height: 1.5rem;
  margin: v-bind(taskBeginn);
  text-decoration: none;
  color: white;
  border-radius: .25rem;
}

/*.square::before {*/
/*  position: absolute;*/
/*  content: v-bind(taskName);*/
/*  background-color: red;*/
/*  height: 2rem;*/
/*  width: 100%;*/
/*  right: 0;*/
/*}*/

.router-link {
  text-decoration: none;
  color: white;
}

.square:hover {
  background-color: v-bind(colorHover);
}

.square:hover #scroll-text {
  transform: translateX(v-bind(scrollWidth));
  animation: scrolling v-bind(scrollDuration) linear infinite;
}

@keyframes scrolling {
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(calc(-50% - 10rem));
  }
  50.001% {
    transform: translateX(calc(50% + 10rem));
  }
  100% {
    transform: translateX(0%);
  }

}

</style>
