function getNextTask(page) {
    for (const task of page.file.tasks) {
        if (task.completed == false) {
            return task;
        }
    }
    return null;
}

const _getNextTask = getNextTask;
export { _getNextTask as getNextTask };