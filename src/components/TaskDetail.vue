<template>
  <fieldset class="normal">
    <div>
      <h2>Aufgaben-ID: {{ task?.tid }}</h2> <br>
      <router-link :to="{name: 'add_task', params: {id: task?.tid ,edit: 'edit'}}">
        <button type="button">Bearbeiten</button>
      </router-link>
      <button type="submit">Abschließen</button>

    </div>
  </fieldset>
  <fieldset class="grid-container">
    <div class="item1">{{ task?.name }}</div>
    <div class="item8"><p class="ticket" @click="getTicketNumber">Ticketnummer: #{{ task?.ticket }}</p></div>
    <div class="item2">{{ task?.start }}</div>
    <div class="item3">{{ task?.end }}</div>
    <div class="item4"><strong>Beschreibung: </strong> <br>
      <div style="margin-left: 2rem">{{ task?.description }}</div>
    </div>
    <div class="item7" id="7"><strong> Ist-Zustand: </strong> <br>
      <div style="margin-left: 2rem">{{ task?.is_state }}</div>
    </div>
    <div class="item5 is-multiline">
      <div v-for="worker in task?.worker">{{ worker }}<br></div>
    </div>
    <div class="item6 is-multiline">
      <div v-for="producer in task?.producer">{{ producer }}</div>
    </div>
    <div class="item7"></div>
  </fieldset>

</template>

<script setup lang="ts">

import {ref} from "vue";
import {ITask} from "../database_test/TaskProps";
import {getTask, getTaskAPI} from "../services";
import {useRoute} from "vue-router";
import {list} from "../database_test/Tasks";

const params = useRoute().params.id

const task = ref<ITask>()
const taskId = ref(params)
console.log(useRoute().params.id)

task.value = await getTaskAPI(parseInt(taskId.value))
console.log(task.value)

const getTicketNumber = () => {
  const ticket = task.value?.ticket
  const link = "https://otrs.intern.comnetgmbh.com/otrs/index.pl?Action=AgentTicketZoom;TicketNumber=" + ticket
  window.location = link
}


</script>

<style scoped>

.item1 {
  grid-area: header;
}

.item8 {
  grid-area: ticket;
}

.item2 {
  grid-area: start;
}

.item3 {
  grid-area: end;
}

.item4 {
  grid-area: content;
  margin-right: 1rem;
  font-size: 1.25rem !important;
  text-align: left !important;
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
  grid-area: is;
  text-align: left !important;
  font-size: 1.25rem !important;
}

.ticket {
  padding: .5rem;
  margin: 0;
  border-radius: .25rem;
  background-color: #505056;
  box-shadow: .25rem .25rem 1px 0 #404046;
}

.ticket:hover {
  border-radius: .25rem;
  background-color: #555560;
  box-shadow: .25rem .25rem 1px 0 #303035;
}

.grid-container {
  display: grid;
  gap: 2rem;
  grid-template-areas:
"header header header ticket start end"
"content content content content . worker"
"is is is is . producer";
}

.grid-container > div {
  text-align: center;
  padding: 20px 0;
  font-size: 1.5rem;
}

button {
  font-size: 1rem;
  margin: 1rem;
  padding: .5rem 1rem .5rem 1rem;
}

fieldset {
  margin: .25rem;
}

.normal div {
  display: flex;
  justify-content: center;
}

</style>
