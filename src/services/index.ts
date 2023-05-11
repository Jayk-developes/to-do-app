import {dateList2, list} from "../database_test/Tasks";
import {ITask} from "../database_test/TaskProps";
import axios from 'axios';
import {ref} from "vue";

export const getTask = (task: any, taskId: number) => {
    list.value.forEach((item) => {
        if (item.tid == taskId) {
            task.value = item
        }
    })
}

export const getTaskAPI = async (taskId: number) => {
    const task = ref<ITask>()
    // .then method ---------
    // axios.get(`http://localhost:8000/task/${taskId}`).then(
    // (response) => {
    //   task.value = response.data
    //   console.log(response)
    // }).catch().finally()
    const response = await axios.get(`http://localhost:8000/task/detail/${taskId}`)
    return response.data
}

export const getTaskAPICurrentList = async () => {
    const response = await axios.get(`http://localhost:8000/task/current`)
    console.log(response.data)
    return response.data
}
export const getTaskAPIPastList = async () => {
    const response = await axios.get(`http://localhost:8000/task/past`)
    console.log(response.data)
    return response.data
}
export const getTaskAPIMyList = async (wid: number) => {
    const response = await axios.get(`http://localhost:8000/task/current/${wid}`)
    console.log(response.data)
    return response.data
}

export const getWorkerAPI = async () => {
    const response = await axios.get(`http://localhost:8000/worker/all`)
    console.log(response.data)
    return response.data
}
export const postTaskAPIList = async (task: ITask, edit?: string) => {
    if (edit == "edit") {
        const request = await axios.post(`http://localhost:8000/task/edit`, task)
        console.log(request.data)
        return request.data
    } else {
        const request = await axios.post(`http://localhost:8000/task/create`, task)
        console.log(request.data)
        return request.data
    }
}

export const postWorkerOnTask = async (worker) => {
    const request = await axios.post(`http://localhost:8000/task/worker`, worker)
    console.log(request.data)
    return request.data
}

export const convertDate = (item: string) => {
    const splitDate = item.split("-")
    return splitDate[2] + "." + splitDate[1] + "." + splitDate[0]
}

export const colorPrio = (props, color, colorHover) => {
    if (props.task.priority == "Hoch") {
        color.value = "#ff7043"
        colorHover.value = "#ff8a65"
    } else if (props.task.priority == "Normal") {
        color.value = "#ffa726"
        colorHover.value = "#ffb74d"
    } else if (props.task.priority == "Sehr Hoch") {
        color.value = "#e53935"
        colorHover.value = "#ef5350"
    } else {
        color.value = "#9ccc65"
        colorHover.value = "#aed581"
    }
}

export const dates = (today, dateList) => {
    today.value = new Date()
    today.value.setDate(today.value.getDate() - 1)
    for (let i = 0; i < 60; i++) {
        today.value.setDate(today.value.getDate() + 1)
        dateList.value.push(today.value.toLocaleDateString())
        if (today.value.getDate() < 10 && today.value.getMonth() >= 10) {
            dateList2.value.push("0" + today.value.getDate() + "." + (today.value.getMonth() + 1) + "." + today.value.getFullYear())
        } else if (today.value.getDate() < 10 && today.value.getMonth() < 10) {
            dateList2.value.push("0" + today.value.getDate() + ".0" + (today.value.getMonth() + 1) + "." + today.value.getFullYear())
        } else if (today.value.getDate() >= 10 && today.value.getMonth() < 10) {
            dateList2.value.push(today.value.getDate() + ".0" + (today.value.getMonth() + 1) + "." + today.value.getFullYear())
        } else {
            dateList2.value.push(today.value.getDate() + "." + (today.value.getMonth() + 1) + "." + today.value.getFullYear())
        }
    }
}


