let tasks3 = [
    { id: 1, title: "do homework", status: "completed" },
    { id: 2, title: "clean room", status: "pending" },
    { id: 3, title: "go shopping", status: "pending" },
  ];
  const result9 = tasks3.map(task => {
   task = task.title[0].toUpperCase(1) + task.title.slice(1)
    return  task
  })
  console.log(result9)