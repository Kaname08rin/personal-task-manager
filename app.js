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

//display task and remind the urgent items

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

//pending tasks

const pendingTasks = tasks.filter(function (task) {
  return task.completed === false;
});

console.log("Pending tasks:");
pendingTasks.forEach(function (task) {
  displayTask(task);
});

//select a task
const selectedTask = tasks.find(function (task) {
  return task.id === 4;
});

console.log("Selected tasks:");
console.log(selectedTask);

// High-priority tasks
const highPriorityTasks = tasks.filter(function (task) {
  return task.priority === "High";
});

console.log("High-priority tasks");
highPriorityTasks.forEach(function (task) {
  displayTask(task);
});

// Completed tasks
const completedTasks = tasks.filter(function (task) {
  return task.completed === true;
});

console.log("Completed tasks:");
completedTasks.forEach(function (task) {
  displayTask(task);
});

// searchedTasks

const searchedTask = tasks.find(function (task) {
  return task.id === 1;
});

console.log("Searched task:");
console.log(searchedTask);

// get the titles

const taskTitles = tasks.map(function (task) {
  return task.title;
});

console.log("Task titles: ");
console.log(taskTitles);

// count completed tasks
const completedCount = tasks.reduce(function (total, task) {
  if (task.completed === true) {
    return total + 1;
  }
  return total;
}, 0);

console.log("Completed tasks: " + completedCount);

// count pending tasks
const pendingCount = tasks.reduce(function (total, task) {
  if (task.completed === false) {
    return total + 1;
  }

  return total;
}, 0);

console.log("Pending tasks: " + pendingCount);

// get each task's priority
const taskPriority = tasks.map(function (task) {
  return task.priority;
});

console.log("Task priority: ");
console.log(taskPriority);

// count the number of high priority
const highPriorityCount = tasks.reduce(function (total, task) {
  if (task.priority === "High") {
    return total + 1;
  }

  return total;
}, 0);

console.log("High Priority: " + highPriorityCount);

// Count all available tasks
const availableTaskCount = tasks.reduce(function (total, task) {
  return total + 1;
}, 0);

console.log("Available tasks: " + availableTaskCount);

// Confirm that the original tasks array has no changes
tasks.forEach(function (task) {
  displayTask(task);
});
