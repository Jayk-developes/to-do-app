import {createRouter, createWebHashHistory} from "vue-router";
import Homepage from "../components/Homepage.vue"
import Settings from "../components/Settings.vue"
import AllTasks from "../components/AllTasks.vue"
import MyTasks from "../components/MyTasks.vue"
import PastTasks from "../components/PastTasks.vue"
import AddTask from "../components/AddTask.vue"
import Login from "../components/Login.vue"
import TaskDetail from "../components/TaskDetail.vue";


const routes = [
    {path: "/", component: Homepage, name: "homepage"},
    {path: "/settings", component: Settings, name: "settings"},
    {path: "/all_tasks", component: AllTasks, name: "all_tasks"},
    {path: "/my_tasks", component: MyTasks, name: "my_tasks"},
    {path: "/past_tasks", component: PastTasks, name: "past_tasks"},
    {path: "/add_task/:id/:edit", component: AddTask, name: "add_task"},
    {path: "/login", component: Login, name: "login"},
    {path: "/task/:id", component: TaskDetail, name: "task_detail"},
]


const router = createRouter({
        history: createWebHashHistory(),
        routes,
    })

export default router
