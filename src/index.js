const remove = el => {el.remove()}

document.addEventListener("DOMContentLoaded", (e) => {
  let array = []

  function create(task){
    return `<li onClick=remove(this)>${task}</li>`
  }

  function createArray(task){
    const taskObject = {id: array.length, task:task}
    array.push(taskObject)
    display(array)
  }

  const submitBtn = document.getElementById("submitBtn")
  submitBtn.addEventListener('click', function(e){
    e.preventDefault()

    const taskText = document.getElementById("new-task-description").value 
    let task = create(taskText)
    createArray(task)
  })

  const taskList = document.getElementById("tasks")
  function display(taskArray){
    taskList.innerHTML = ""
    for (const item of taskArray){
      taskList.innerHTML += item.task
    }
  }

});
