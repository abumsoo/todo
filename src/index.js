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

let head = null;

class TaskNode {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.next = null;
    }
}

const createTask = (title, description) => {
    const newTask = new TaskNode(title, description);
    if (head != null) {
        newTask.next = head;
    }
    head = newTask;
}
