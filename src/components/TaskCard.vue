<template>
  <fieldset>
      <router-link :to="{name: 'task_detail', params:{id: task.tid}}" class="grid-container"
                   style="text-decoration: none; color: white">
        <div class="item1">{{ task.name }}</div>
        <div class="item2">{{ task.start }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div class="item3">{{ task.end }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div class="item4">{{ task.description }}</div>
        <div class="item5 is-multiline">
          <div v-for="worker in task.worker">{{ worker }}<br></div>
        </div>
        <div class="item6 is-multiline">
          <div v-for="producer in task.producer">{{ producer }}</div>
        </div>
      </router-link>
  </fieldset>

</template>

<script setup lang="ts">

import {ref} from "vue";
import {ITask} from "../database_test/TaskProps";
import {colorPrio} from "../services";

const props = defineProps<{
  task: ITask
}>()

const color = ref()
const colorHover = ref()

colorPrio(props, color, colorHover)

</script>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";

<style scoped>
.item1 {
  grid-area: header;
}

.item2 {
  grid-area: start;
}

.item3 {
  grid-area: end;
}

.item1, .item2, .item3 {
  background-color: #242424;
}

.item4 {
  grid-area: content;
  margin-right: 1rem;
  font-size: 15px !important;
  text-align: left !important;
  text-wrap: normal;
}

.item5 {
  grid-area: worker;
  text-align: left !important;
}

.item6 {
  grid-area: producer;
  text-align: left !important;
}

.item7 {
  grid-area: nothing;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
"header header header header start end"
"content content content content . worker"
"content content content content . producer";
}

fieldset {
  border: v-bind(color) solid 4px;
  margin-top: 1rem;
}

fieldset:hover .item1, fieldset:hover .item2, fieldset:hover .item3 {
  background-color: #303035;
}

.grid-container > div {
  text-align: center;
  padding: 20px 0;
  font-size: 20px;
  gap: .25rem
}

router-link {
  text-decoration: none;
  color: white;
}

</style>
