const loadPage = () => {
    /*
     */
    // left sidebar to select lists
    const container = document.createElement("div");
    container.className = "container";
    document.body.appendChild(container);
    const listsContainer = document.createElement("div");
    listsContainer.className = "listsContainer";
    container.appendChild(listsContainer);
    const tasksContainer = document.createElement("div");
    tasksContainer.className = "tasksContainer";
    container.appendChild(tasksContainer);

    const newTaskBtn = document.createElement("button");
    newTaskBtn.className = "newTaskBtn";
    newTaskBtn.innerText = "New task";
    tasksContainer.appendChild(newTaskBtn);
    const newListBtn = document.createElement("button");
    newListBtn.className = "newListBtn";
    newListBtn.innerText = "New list";
    listsContainer.appendChild(newListBtn);
    const listArea = document.createElement("div");
    listArea.className = "listArea";
    tasksContainer.appendChild(listArea);
}

export { loadPage }
