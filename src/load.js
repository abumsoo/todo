const loadPage = () => {
    const addBtn = document.createElement("button");
    addBtn.className = "newTaskBtn";
    addBtn.innerText = "Add task";
    document.body.appendChild(addBtn);
}

export { loadPage }