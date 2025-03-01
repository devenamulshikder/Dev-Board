const completeButton = document.querySelectorAll(".complete-btn");
for (let i = 0; i < completeButton.length; i++) {
  completeButton[i].addEventListener("click", function () {
    alert("Board Updated Successfully!!");
    const taskAssign = document.getElementById("task-assign");
    let taskCount = parseInt(taskAssign.innerText);
    const doneCount = document.getElementById("done-count");
    let doneTaskCount = parseInt(doneCount.innerText);
    if (taskCount > 0) {
      taskAssign.innerText = taskCount - 1;
    }
    doneCount.innerText = doneTaskCount + 1;

    // date implement
    const now = new Date();
    const buttonClickTime = now.toLocaleTimeString();
    let card = this.closest("div.mt-7");
    if (card) {
      let cardHeading = card.querySelector("h1").innerText;
      let historyDiv = document.getElementById("history");
      let newEntryFirst = document.createElement("span");
      newEntryFirst.innerText = "You Have Completed the task ";

      let newEntryBold = document.createElement("span");
      newEntryBold.innerText = cardHeading;
      newEntryBold.className = "font-bold text-lg";

      let newEntryAt = document.createElement("span");
      newEntryAt.innerText = ` at ${buttonClickTime}`;

      let newEntry = document.createElement("p");
      newEntry.className = "p-5 bg-[#F4F7FF] rounded-lg mt-4";
      newEntry.appendChild(newEntryFirst);
      newEntry.appendChild(newEntryBold);
      newEntry.appendChild(newEntryAt);
      historyDiv.appendChild(newEntry);
      document
        .getElementById("clear-history")
        .addEventListener("click", function () {
          const historyDivRemove = document.getElementById("history");
          historyDivRemove.removeChild(newEntry);
        });
    }

    this.disabled = true;
    this.innerText = "Completed";
    this.classList.add("opacity-50", "cursor-not-allowed");
    if (taskCount === 1) {
      alert("congrats!!! You have completed all the task");
    }
  });
}

// Background color change feature
const changeBgButton = document.getElementById("change-bg");
const colors = [
  "#D1C4E9",
  "#E0F7FA",
  "#FFEBEE",
  "#E8F5E9",
  "#F3E5F5",
  "#FFF3E0",
  "#C8E6C9",
  "#FFCDD2",
  "#B3E5FC",
  "#DCEDC8",
  "#FFE0B2",
];
let currentColorIndex = 0;

changeBgButton.addEventListener("click", function () {
  document.body.style.backgroundColor = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length;
});

// Clear history functionality
document.getElementById("clear-history").addEventListener("click", function () {
  document.getElementById("history").innerHTML = "";
});


// open blog site
document.getElementById('open-blog').addEventListener('click', function(e){
  e.preventDefault()
  window.location.href = '/blog.html'
})