// PERSONAL TASK MANAGER

const tasks = [
  {
    id: 2,
    title: "N1 lesson 1",
    description: "Japanese class N1",
    category: "Japanese Language",
    priority: "High",
    completed: true,
  },
  {
    id: 3,
    title: "N1 lesson 2",
    description: "Japanese class N1",
    category: "Japanese Language",
    priority: "Low",
    completed: false,
  },
  {
    id: 4,
    title: "N1 lesson 3",
    description: "Japanese class N1",
    category: "Japanese Language",
    priority: "Medium",
    completed: false,
  },
];

function displayTask(task) {
  console.log("Task: " + task.title);
  console.log("Priority: " + task.priority);
  console.log("Category: " + task.category);

  if (task.completed === true) {
    console.log("Status: Completed");
  } else {
    console.log("Status: Pending");
  }

  if (task.priority === "High") {
    console.log("Priority Level: Urgent");
  } else if (task.priority === "Medium") {
    console.log("Priority Level: Normal");
  } else {
    console.log("Priority Level: Low");
  }

  if (task.priority === "High" && task.completed === false) {
    console.log("Reminder: High priority task still pending");
  }

  if (task.priority === "High" || task.priority === "Medium") {
    console.log("This task needs attention");
  }

  if (!task.completed) {
    console.log("Reminder: This task is not completed.");
  }

  if (task.id > 3) {
    console.log("Task ID is greater than 3");
  }

  console.log("---------------------------");
}

const newTask = {
  id: 5,
  title: "N1 lesson 5",
  description: "Japanese class N1",
  category: "Japanese Language",
  priority: "Medium",
  completed: false,
};

tasks.push(newTask);

console.log("Total tasks: " + tasks.length);

tasks.forEach(function (task) {
  displayTask(task);
});

console.log(5 !== 3);
console.log(5 > 3);
console.log(2 <= 5);
