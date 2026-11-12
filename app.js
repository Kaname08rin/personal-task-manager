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
    priority: "Low",
    completed: false,
  },
];

function displayTask(task) {
  console.log("Task: " + task.title);
  console.log("Priority: " + task.priority);
  console.log("Category: " + task.category);
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
