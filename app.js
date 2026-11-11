// PERSONAL TASK MANAGER

const myTask = {
  id: 1,
  title: "N1 lesson 1",
  description: "Japanese class N1",
  category: "Japanese Language",
  priority: "High",
  completed: true,
};

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

/*
console.log(tasks[0].title);
console.log(tasks[1].priority);
console.log(tasks[2].completed);

*/

function displayTask(task) {
  console.log("Task: " + task.title);
  console.log("Priority: " + task.priority);
  console.log("Category: " + task.category);
}

displayTask(tasks[0]);
displayTask(tasks[1]);
displayTask(tasks[2]);
