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

import { renderList } from './renderList.js'
import { loadPage } from './load.js'

class TaskNode {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.next = null;
    }
}

class TaskList {
    constructor(head = null, title) {
        this.head = head;
        this.title = title;
    }
}

let t1 = new TaskNode("First task", "detailed description");
// let t2 = new TaskNode("Complete checklist", "check off checklist");
// t1.next = t2;
let defaultList = new TaskList(t1, "Default");

const createTask = () => {
    let title = prompt("Task name");
    let description = prompt("Task description");
    let task = new TaskNode(title, description);
    task.next = tasks.head;
    defaultList.head = task;
    renderList(defaultList);
};

loadPage();
renderList(defaultList);

const addBtn = document.querySelector(".newTaskBtn");
addBtn.addEventListener("click", createTask);
