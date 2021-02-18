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

import {loadPage} from "./load.js"

loadPage();

let inbox = new TaskList("inbox", "Inbox", null);
let lists = {"inbox": inbox}

class TaskNode {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.next = null;
    }
}

const createTask = (title, description, listKey="inbox") => {
    // new TaskNode
    const newTask = new TaskNode(title, description);
    //  if list exists, add new task to the list
    if (listKey in lists) {
        if (lists[listKey] != null) {
            newTask.next = lists[listKey];
        }
        lists[listKey] = newTask;
    //  if not, create a new list, add new task to list, and add list to lists
    } else {
        const listTitle = listKey.charAt(0).toUpperCase() + listKey.slice(1);
        lists[listKey] = new TaskList(listKey, listTitle, newTask);
    }
    renderList(lists[list]);
}

class TaskList {
    constructor(key, title, head=null) {
        this.key = key;
        this.title = title;
        this.head = head;
    }
}

const renderList = (list) => {
    let listElement = document.querySelector(list.key);
    if (!listElement) {
        listElement = document.createElement("div");
        listElement.className = list.key
        document.querySelector(".listArea").appendChild(listElement);
    }
    const taskElement = document.createElement("div");
    taskElement.className = "task";
    taskElement.textContent = task.title;
    listElement.appendChild(taskElement);
}

createTask("First task in redesign");
createTask("Second task in redesign");
createTask("Third task in redesign");
