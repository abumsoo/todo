const renderList = (list) => {
    const listArea = document.querySelector(".listArea");
    listArea.innerHTML = "";

    const listElement = document.createElement("div");
    listElement.className = list.key;
    listElement.innerHTML = `<h2>${list.title}</h2>`;
    listArea.appendChild(listElement);

    let node = list.head;
    let id = 0;
    while (node != null) {
        const taskElement = document.createElement("div");
        taskElement.className = "task";
        listElement.appendChild(taskElement);
        
        const item = document.createElement("input");
        item.type = "checkbox";
        item.name = `task-${id}`;
        taskElement.appendChild(item);
        if (node.checked == true) {
            item.checked = true;
        }
        item.addEventListener('change', (node) => {
            node.checked = !node.checked;
        });
        const itemLabel = document.createElement("label");
        itemLabel.innerHTML = `${node.title}<br>`;
        itemLabel.for = `task-${id}`;
        taskElement.appendChild(itemLabel);

        id++;
        node = node.next;
    }
}

const renderListBar = (listsList) => {
    const listBar = document.querySelector(".listBar");
    listBar.innerHTML = "";
    for (const list in listsList) {
        const listItem = document.createElement("li");
        listItem.innerText = listsList[list].title;
        listBar.appendChild(listItem);
        listItem.addEventListener('click', () => renderList(listsList[list]));
    }
}

export { renderList, renderListBar }
