/* Code organization
    What needs to happen
    - Tasks are objects with the following:
        - title
        - description
        - checkbox
        - deadline
        - scheduled date
        - subtasks (future)
    - Lists are a list of tasks
    - There will be a default list
    User can:
        - create, update, and delete tasks
        - can sort tasks by deadline, scheduled date, or created date, or user's order
        - Make a list
        - Make todo items in any list
        - reorder tasks
        - reorder lists
    Loading screen:
        - Inbox (main list)
        - Render list function, specifically render inbox
*/

class TaskNode {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.next = null;
    }
}

class TaskList {
    constructor(head = null) {
        this.head = head;
    }
}

let t1 = new TaskNode("Make a checklist", "detailed checklist");
let t2 = new TaskNode("Complete checklist", "check off checklist");
t1.next = t2;
let tasks = new TaskList(t1);

const addBtn = document.createElement("button");
addBtn.innerText = "Add task";
document.body.appendChild(addBtn);

const createTask = () => {
    let title = prompt("Task name");
    let description = prompt("Task description");
    let task = new TaskNode(title, description);
    task.next = tasks.head;
    tasks.head = task;
    renderTasks();
};

const renderTasks = () => {
    let list = document.querySelector(".tasklist");
    if (list) {
        list.innerHTML = "";
    } else {
        list = document.createElement("ul");
    }
    let node = tasks.head;
    list.className = "taskList";
    while (node != null) {
        const item = document.createElement("li");
        item.innerText = node.title;
        list.appendChild(item);
        node = node.next;
    }
    document.body.appendChild(list);
};

renderTasks();

const addBtnListener = addBtn.addEventListener("click", createTask);
