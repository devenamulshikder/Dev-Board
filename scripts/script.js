document.getElementById("complete-btn").addEventListener("click", function () {
  alert("Task completed successfully!");
  const taskAssign = document.getElementById("task-assign");
  let taskCount = parseInt(taskAssign.innerText);
  const doneCount = document.getElementById("done-count");
  let doneTaskCount = parseInt(doneCount.innerText);
  if (taskCount > 0) {
    taskAssign.innerText = taskCount - 1;
  }
  doneCount.innerText = doneTaskCount + 1;
//   const disabled = document.getElementById('complete-btn')
//   disabled.classList.add('hidden')
  this.disabled = true;
  this.innerText = "Completed";
  this.classList.add("opacity-50", "cursor-not-allowed");
});
