<template>
  <h1 v-if="edit === 'edit'">Aufgabe bearbeiten</h1>
  <h1 v-else>Neue Aufgabe</h1>

  <fieldset style="text-align: left;">
    <div style="margin: 1rem 0 0 0;">
      <label for="task">Aufgabentitel:</label>
      <input type="text" placeholder="Aufgabentitel" id="task" v-model="name">
    </div>
    <div>
      <label for="description">Aufgabenbeschreibung: </label>
      <textarea placeholder="Aufgabenbeschreibung" id="description" v-model="description">></textarea>
    </div>
    <div>
      <label for="is_state">Ist-Zustand: </label>
      <textarea id="is_state" placeholder="Ist Zustand" v-model="is_state"></textarea>
    </div>
    <div>
      <label for="worker">Mitarbeiter: <br> <small style="font-size: 11px; color: #aaa">(Halte STRG um mehrere
        auszuwählen)</small> </label>
      <select id="worker" multiple v-model="worker">
        <option v-for="mit in mitarbeiter" @click="clicklog(mit)">{{ mit.name }} {{ mit.surname }}</option>
      </select>
    </div>
    <div>
      <label for="producer">Hersteller: <br> <small style="font-size: 11px; color: #aaa">(Halte STRG um mehrere
        auszuwählen)</small> </label>
      <select id="producer" multiple v-model="producer">
        <option v-for="her in hersteller">{{ her.hersteller }}</option>
      </select>
    </div>
    <div>
      <label for="priority">Priorität: </label>
      <select id="priority" v-model="priority">
        <option selected value="Niedrig">Niedrig</option>
        <option value="Normal">Normal</option>
        <option value="Hoch">Hoch</option>
        <option value="Sehr Hoch">Sehr Hoch</option>
      </select>
    </div>
    <div>
      <label for="start">Startdatum:</label>
      <input type="date" id="start" v-model="start">
    </div>
    <div>
      <label for="end">Enddatum:</label>
      <input type="date" id="end" v-model="end">
    </div>
    <div style="margin: 1rem 0 0 0;">
      <label for="ticket">Ticketnummer:</label>
      <input type="text" placeholder="Ticketnummer" id="ticket" v-model="ticket">
    </div>

    <router-link :to="{name: 'task_detail', params: {id: id}}" v-if="edit==='edit'">
      <button type="submit" @click="editTask">Aufgabe bearbeiten</button>
    </router-link>
    <router-link :to="{name: 'all_tasks'}" v-else>
      <button type="submit" @click="editTask">Aufgabe beginnen</button>
    </router-link>
  </fieldset>

  <fieldset>
    <table>
      <tr>
        <th>{{ list[0][0] }}</th>
        <th></th>
      </tr>
      <tr v-for="items in list">
        <td v-for="item in items">{{ item }}</td>

      </tr>
    </table>
  </fieldset>

</template>

<script setup lang="ts">
import {CreateAppFunction, ref} from "vue"
import {list} from "../database_test/Tasks";
import {hersteller} from "../database_test/Hersteller";
import {ITask} from "../database_test/TaskProps";
import {useRoute} from "vue-router";
import {getTask, getTaskAPI, convertDate, postTaskAPIList, getWorkerAPI, postWorkerOnTask} from "../services";

const  name = ref("")
const description = ref("")
const is_state = ref("")
const worker = ref([])
const workerID = ref([]);
const producer = ref([])
const priority = ref("")
const start = ref("")
const end = ref("")
const tid = ref(0)
const ticket = ref()

const task = ref<ITask>()

const mitarbeiter = await getWorkerAPI()

const {params} = useRoute()

const edit = ref(params.edit.toString())

if (edit.value == "edit") {
  tid.value = parseInt(params.id.toString())
  getTask(task, tid.value)
  task.value = await getTaskAPI(tid.value)
  const startDate = task.value!.start.split(".")
  const endDate = task.value!.end.split(".")
  name.value = task.value!.name
  description.value = task.value!.description
  is_state.value = task.value!.is_state
  // worker.value = task.value!.worker
  // producer.value = task.value!.producer
  priority.value = task.value!.priority
  ticket.value = task.value!.ticket
  start.value = startDate[2] + "-" + startDate[1] + "-" + startDate[0]
  end.value = endDate[2] + "-" + endDate[1] + "-" + endDate[0]
  ticket.value = task.value!.ticket
}

const clicklog = (mit) => {
  console.log(mit)
  console.log(worker.value)
}

const editTask = () => {
  if (edit.value == 'edit') {
    tid.value = parseInt(params.id.toString())
  }
  if (1 == 1) {
 //   worker.value.forEach(mit => {
 //     mitarbeiter.forEach(arb => {
 //       const arbeiter = arb.Vorname + " " + arb.Nachname
 //       if (mit == arbeiter) {
 //         workerID.value.push(arb.MitarbeiterID)
 //       }
 //     })
    //})
    const newEntry: ITask = {
      name: name.value,
      description: description.value,
      is_state: is_state.value,
      priority: priority.value,
      start: start.value,
      end: end.value,
      tid: tid.value,
      ticket: ticket.value
    }
    postTaskAPIList(newEntry, edit.value)

    worker.value.forEach(worker => {
      let wid;
      mitarbeiter.forEach(mit => {
        console.log(mit.name + " " + mit.surname, worker, tid.value)
        if(mit.name + " " + mit.surname == worker) {
          wid = mit.wid
        }
      })
      const task = {
        tid: tid.value,
        wid: wid
      }
      postWorkerOnTask(task)
    })

    const get_producer = () => {
      producer.value.forEach(p => {
        console.log(p)
      })
    }
    // if (edit.value == 'edit') {
    //   list.value.forEach((item, index) => {
    //     if (item.id == parseInt(params.id.toString())) {
    //       list.value.splice(index, 1, newEntry)
    //       console.log(list.value)
    //     }
    //   })
    // } else {
      // list.value.push(newEntry)
      // console.log(list.value)
  }
  // }
}


</script>

<style scoped>

label {
  display: inline-block;
  float: left;
  clear: left;
  width: 35%;
  margin: 0 1.5rem 0 0;
  text-align: right;
}

button {
  float: right;
  padding: .5rem 1rem .5rem;
  margin: 1rem 2rem;
}

</style>
