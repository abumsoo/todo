const renderList = (listHead) => {
    let list = document.querySelector(".tasklist");
    if (list) {
        list.innerHTML = "";
    } else {
        list = document.createElement("ul");
    }
    let node = listHead;
    list.className = "taskList";
    while (node != null) {
        const item = document.createElement("li");
        item.innerText = node.title;
        list.appendChild(item);
        node = node.next;
    }
    document.body.appendChild(list);
};

export { renderList }