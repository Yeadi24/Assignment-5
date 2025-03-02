// TOday's Date JS Code
document.addEventListener("DOMContentLoaded", function () {
  let today = new Date();
  let options = {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  };

  let formattedDate = today.toLocaleDateString("en-US", options);
  let finalDate = formattedDate.replace(
    /(\w{3}) (\w{3}) (\d{2}), (\d{4})/,
    "$1 , $2 $3 $4"
  );
  document.querySelector(".today-date").innerHTML += `<p>${finalDate}</p>`;
});
document.addEventListener("DOMContentLoaded", function () {
  const pointsElement = document.querySelector(".points");
  const taskAssignedElement = document.querySelector(".task-completed h1");
  const activityLog = document.querySelector(".activity-cotainer");
  const clearHistoryBtn = document.querySelector(".clear-btn");
  const completedButtons = document.querySelectorAll(".btn");

  completedButtons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("Board Updated Successfully");

      let currentPoints = parseInt(pointsElement.textContent);
      let currentTasks = parseInt(taskAssignedElement.textContent);

      pointsElement.textContent = currentPoints + 1;

      if (currentTasks > 0) {
        taskAssignedElement.textContent = currentTasks - 1;
      }

      const cardTitle =
        this.parentElement.parentElement.querySelector(
          ".card-title"
        ).textContent;
      const currentTime = new Date().toLocaleTimeString();

      const logEntry = document.createElement("p");
      logEntry.textContent = `You have completed the task '${cardTitle}' at ${currentTime}`;
      logEntry.style.padding = "10px";
      logEntry.style.backgroundColor = "white";
      logEntry.style.borderRadius = "5px";
      logEntry.style.marginBottom = "5px";
      activityLog.appendChild(logEntry);

      this.disabled = true;

      if (currentTasks - 1 === 0) {
        setTimeout(() => {
          alert("You have successfully completed all the tasks");
        }, 500);
      }
    });
  });

  clearHistoryBtn.addEventListener("click", function () {
    alert("All history will be cleared");
    activityLog.querySelectorAll("p").forEach((p) => p.remove());
  });
});
// Go to Blog Page
document.querySelector(".blog").addEventListener("click", function () {
  window.location.href = "blog.html";
});

// Back to HomePage
document.querySelector(".home").addEventListener("click", function () {
  window.location.href = "index.html";
});

// random color change
const image = document.getElementById("theme-btn");
const bodyElement = document.getElementById("change");

const colors = ["#FFDC26", "#4CAF50", "#2196F3", "#FF5722", "#9C27B0"];

image.addEventListener("click", function () {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  bodyElement.style.backgroundColor = randomColor;
});
