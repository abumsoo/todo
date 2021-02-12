const loadPage = () => {
    const newTaskBtn = document.createElement("button");
    newTaskBtn.className = "newTaskBtn";
    newTaskBtn.innerText = "New task";
    document.body.appendChild(newTaskBtn);
    const newListBtn = document.createElement("button");
    newListBtn.className = "newListBtn";
    newListBtn.innerText = "New list";
    document.body.appendChild(newListBtn);
    const listArea = document.createElement("div");
    listArea.className = "listArea";
    document.body.appendChild(listArea);
}

export { loadPage }
