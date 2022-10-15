// //get data on form submit
// //store the data in a global array
// //create a display function to display all the data from array to our entry list
// let taskList = [];
// let badList = [];
// const hrPerWeek = 24*7;

// const handleOnSubmit = (e) => {
//     const formData = new FormData(e);
//     const task = formData.get("task");
//     const hr = +formData.get("hr");

//     const obj = {
//         task,
//         hr
//     }
//     const totalAllocatedHrs = totalTaskHours() +totalBadTaskHours();
//     if(totalAllocatedHrs +hr > hrPerWeek){

//         return alert ("Sorry Boss!! you don't have enough time left to add");
//     }
//     taskList.push(obj)
//     console.log(taskList);
//     displayTask();
//     totalTaskHours();
// };

// const displayTask = () => {

//     let str = "";
//   taskList.map((item, i)=> {
//     console.log(item, i);
//     str += `<tr>
//     <th scope="row">${i + 1}</th>
//     <td>${item.task}</td>
//     <td>${item.hr}</td>
//     <td class ="text-end">
//         <button onclick="deleteTask (${i})" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
//         <button onclick="markAsNotToDo (${i})" class="btn btn-success"><i class="fa-solid fa-right-long"></i></button>
//     </td>
//   </tr>`
//   })
//     document.getElementById('task-list').innerHTML = str;
// };
// const displayBadTask = () => {
//     let str="";
//     badList.map((item, i) =>{
//         str += `  <tr>
//         <th>${i+1}</th>
//         <td>${item.task}</td>
//         <td>${item.hr}</td>
//         <td>
//             <button class="btn btn-warning"><i class="fa-solid fa-left-long"></i></button>
//             <button onclick="deleteBadTask(${i})" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
            
//         </td>
//     </tr>  `
//     });
//     document.getElementById("bad-task").innerHTML = str;
//     totalBadTaskHours();
// }
// const totalTaskHours = () =>{

//     const total = taskList.reduce((s, i) => s + i.hr,0);
//     console.log(total);
//     document.getElementById("totalhrs").innerText = total + totalBadTaskHours();
//     return total;
// };
// const totalBadTaskHours = () =>{

//     const total = badList.reduce((s, i) => s + i.hr,0);
//     console.log(total);
//     document.getElementById("totalBadhr").innerText = total;
//     return total;
// };
// const deleteTask = (i) => {
//     if(!window.confirm("Are you sure you want ro delete this task?")){
//         return;
//     }
//     // console.log(i);
//     taskList = taskList.filter((item, index)=> index !==i);
//     displayTask();
//     totalTaskHours();
// };
// const deleteBadTask = (i) => {
//     if(!window.confirm("Are you sure you want ro delete this task?")){
//         return;
//     }
//     // console.log(i);
//     badList = badList.filter((item, index)=> index !==i);
//     displayBadTask();
//     totalTaskHours();
//     // totalBadTaskHours();
// };

// const markAsNotToDo = (i) => {
//     const itm = taskList.splice(i, 1);
//     badList.push(itm[0]);
//     // console.log(badList);
//     displayTask();
//     displayBadTask();
// }

//get data on form submit
//store the data in a global array
//create a display function to display all the data from array to our entry list
let taskList = [];
let badList = [];
const hrPerWeek = 24*7;

const handleOnSubmit = (e) => {
    const formData = new FormData(e);
    const task = formData.get("task");
    const hr = +formData.get("hr");

    const obj = {
        task,
        hr
    }
    const totalAllocatedHrs = totalTaskHours() +totalBadTaskHours();
    if(totalAllocatedHrs +hr > hrPerWeek){

        return alert ("Sorry Boss!! you don't have enough time left to add");
    }
    taskList.push(obj)
    console.log(taskList);
    displayTask();
    totalTaskHours();
};

const displayTask = () => {

    let str = "";
  taskList.map((item, i)=> {
    console.log(item, i);
    str += `<tr>
    <th scope="row">${i + 1}</th>
    <td>${item.task}</td>
    <td>${item.hr}</td>
    <td class ="text-end">
        <button onclick="deleteTask (${i})" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
        <button onclick="markAsNotToDo (${i})" class="btn btn-success"><i class="fa-solid fa-right-long"></i></button>
    </td>
  </tr>`
  })
    document.getElementById('task-list').innerHTML = str;
};
const displayBadTask = () => {
    let str="";
    badList.map((item, i) =>{
        str += `  <tr>
        <th>${i+1}</th>
        <td>${item.task}</td>
        <td>${item.hr}</td>
        <td>
            <button onclick="markAsToDo(${i})" class="btn btn-warning"><i class="fa-solid fa-left-long"></i></button>
            <button onclick="deleteBadTask(${i})" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
            
        </td>
    </tr>  `
    });
    document.getElementById("bad-task").innerHTML = str;
    totalBadTaskHours();
}
const totalTaskHours = () =>{

    const total = taskList.reduce((s, i) => s + i.hr,0);
    console.log(total);
    document.getElementById("totalhrs").innerText = total + totalBadTaskHours();
    return total;
};
const totalBadTaskHours = () =>{

    const total = badList.reduce((s, i) => s + i.hr,0);
    console.log(total);
    document.getElementById("totalBadhr").innerText = total;
    return total;
};
const deleteTask = (i) => {
    if(!window.confirm("Are you sure you want ro delete this task?")){
        return;
    }
    // console.log(i);
    taskList = taskList.filter((item, index)=> index !==i);
    displayTask();
    totalTaskHours();
};
const deleteBadTask = (i) => {
    if(!window.confirm("Are you sure you want ro delete this task?")){
        return;
    }
    // console.log(i);
    badList = badList.filter((item, index)=> index !==i);
    displayBadTask();
    totalTaskHours();
    // totalBadTaskHours();
};

const markAsNotToDo = (i) => {
    const itm = taskList.splice(i, 1);
    badList.push(itm[0]);
    // console.log(badList);
    displayTask();
    displayBadTask();
}
const markAsToDo = (i) => {
    const itm = badList.splice(i, 1);
    taskList.push(itm[0]);
    // console.log(badList);
    displayTask();
    displayBadTask();
}