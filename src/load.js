const loadPage = () => {
    // main body
    const container = createElement("div", "container");
    document.body.appendChild(container);

    // left side
    const listsContainer = createElement("div", "listsContainer");
    container.appendChild(listsContainer);

    const newListBtn = createElement("button", "newListBtn");
    newListBtn.innerText = "New list";
    listsContainer.appendChild(newListBtn);

    const listBar = createElement("ul", "listBar")
    listsContainer.appendChild(listBar);

    // right side
    const tasksContainer = createElement("div", "tasksContainer");
    container.appendChild(tasksContainer);

    const newTaskBtn = createElement("button", "newTaskBtn");
    newTaskBtn.innerText = "New task";
    tasksContainer.appendChild(newTaskBtn);

    const listArea = createElement("div", "listArea");
    tasksContainer.appendChild(listArea);

}

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

export { loadPage }
