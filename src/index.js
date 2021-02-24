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
import {renderList, renderListBar} from "./renderList.js"
import css from "./style.css"


class TaskNode {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.next = null;
    }
}

class TaskList {
    constructor(key, title, head=null) {
        this.key = key;
        this.title = title;
        this.head = head;
    }
}

const createTask = (title, description, listKey="inbox") => {
    // new TaskNode
    const newTask = new TaskNode(title, description);
    //  if list exists, add new task to the list
    if (listKey in lists) {
        if (lists[listKey].head != null) {
            newTask.next = lists[listKey].head;
        }
        lists[listKey].head = newTask;
    //  if not, create a new list, add new task to list, and add list to lists
    } else {
        const listTitle = listKey.charAt(0).toUpperCase() + listKey.slice(1);
        lists[listKey] = new TaskList(listKey, listTitle, newTask);
    }
    renderList(lists[listKey]);
}

const getTaskInfo = () => {
    let title = prompt("Task: ");
    let description = prompt("Description: ");
    createTask(title, description);
}

let inbox = new TaskList("inbox", "Inbox", null);
let lists = {"inbox": inbox}

loadPage();
renderListBar(lists);
renderList(lists["inbox"]);

const newTaskBtn = document.querySelector(".newTaskBtn");
newTaskBtn.addEventListener("click", getTaskInfo);
