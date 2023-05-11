import {computed, ref} from "vue";
import {ITask} from "./TaskProps";

export const list = ref<ITask[]>([
    {
        name: "Server konfigurieren",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n" +
            "molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n" +
            "numquam blanditiis harum",
        is_state: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n" +
            "molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n" +
            "numquam blanditiis harum",
        worker: ["Ewa Letkiewicz"],
        producer: ["comNET"],
        priority: "Hoch",
        start: "28.01.2023",
        end: "01.02.2023",
        id: 1,
        ticket: "#2023020202"
    },
    {
        name: "Switch einbauen",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n" +
            "molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n" +
            "numquam blanditiis harum",
        is_state: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n" +
            "molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n" +
            "numquam blanditiis harum",
        worker: ["Simon Baumgarten"],
        producer: ["Innovaphone"],
        priority: "Normal",
        start: "30.04.2022",
        end: "25.01.2023",
        id: 2
    },
    {
        name: "Server ausgefallen",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n" +
            "molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n" +
            "numquam blanditiis harum",
        is_state: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n" +
            "molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n" +
            "numquam blanditiis harum",
        worker: ["Joshua Koch"],
        producer: ["Ascom"],
        priority: "Niedrig",
        start: "20.01.2023",
        end: "27.01.2023",
        id: 3
    },
    {
        name: "Kaffeepause",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n" +
            "molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n" +
            "numquam blanditiis harum sfgsjgfsfhsdfjshfkjsfhskdjfhskdfjghsldhgrlskdfjghlskdfghsdf dfkgj" +
            " hslkdfjg hlskdfjgh lskdjfgh lksjfglsjdhfgljshflgkjdljg sydg",
        is_state: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n" +
            "molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n" +
            "numquam blanditiis harum shfshgsjdfhsjkfhsfsf sdfs df hsdfk hsdfhdskfsdhfjksdhfkdshfksdfsdfh jsd kdk" +
            " hfs hdfj hsdkfjh sdjf kjdhk hfjfhskjfh ksdhjk s",
        worker: ["Joshua Koch", "Jakob Hausdorf", "Ewa Letkiewicz"],
        producer: ["comNET"],
        priority: "Sehr Hoch",
        start: "23.01.2023",
        end: "25.01.2023",
        id: 4
    },
    {
        name: "Interne Besprechung",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n" +
            "molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n" +
            "numquam blanditiis harum",
        is_state: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n" +
            "molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n" +
            "numquam blanditiis harum",
        worker: ["Jakob Hausdorf", "Joshua Koch"],
        producer: ["Aruba"],
        priority: "",
        start: "21.01.2021",
        end: "23.01.2021",
        id: 5
    },
])

export const dateList2 = ref<String[]>([])

// export const getPastTasks = (myList, pastTasks) => {
//     const today = new Date()
//     const end = ref()
//     const tmpList = ref(myList.value)
//     myList.value.forEach(item => {
//         let index = myList.value.indexOf(item)
//         end.value = item.end.split(".")
//         if (parseInt(end.value[2]) < today.getFullYear()) {
//             pastTasks.value.push(myList.value[index])
//             tmpList.value.splice(index, 1)
//             console.log(myList.value)
//         } else if (end.value[1] < String(today.getMonth()) && end.value[2] <= String(today.getFullYear())) {
//             pastTasks.value.push(myList.value[index])
//             tmpList.value.splice(index, 1)
//         } else if (end.value[0] < String(today.getDay()) && end.value[1] <= String(today.getMonth()) && end.value[2] <= String(today.getFullYear())) {
//             pastTasks.value.push(myList.value[index])
//             tmpList.value.splice(index, 1)
//         }
//     })
//     myList.value = tmpList.value
// }

export const getPastTasks = (myTasks: ITask[], pastTasks: ITask[]) => {
    const end = ref()
    const today = new Date()
    const tmp = ref<ITask[]>([])

    myTasks.forEach(item => {
        end.value = item.end.split(".")
        if (parseInt(end.value[2]) < today.getFullYear() ||
            (parseInt(end.value[1]) < today.getMonth() && parseInt(end.value[2]) <= today.getFullYear()) ||
            (parseInt(end.value[0]) < today.getDay() && parseInt(end.value[1]) <= today.getMonth() && parseInt(end.value[2]) <= today.getFullYear())) {
            pastTasks.push(item)
        } else {
            tmp.value.push(item)
        }
    })
    myTasks = tmp.value
}
//
// export const getSortedList2 = computed(() => {
//
// })
