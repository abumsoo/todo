const renderList = (taskList) => {
    let list = document.querySelector(".tasklist");
    if (list) {
        list.innerHTML = "";
    } else {
        list = document.createElement("div");
    }
    list.className = "taskList";
    const listTitle = document.createElement("h3");
    listTitle.innerText = taskList.title;
    list.appendChild(listTitle);
    let node = taskList.head;
    let id = 0;
    while (node != null) {
        const item = document.createElement("input");
        item.type = "checkbox";
        item.name = `task${id}`;
        const itemLabel = document.createElement("label");
        itemLabel.innerHTML = `${node.title}<br>`;
        itemLabel.for = `task${id}`;
        list.appendChild(item);
        list.appendChild(itemLabel);
        node = node.next;
        id++;
    }
    document.body.appendChild(list);
};

export { renderList }