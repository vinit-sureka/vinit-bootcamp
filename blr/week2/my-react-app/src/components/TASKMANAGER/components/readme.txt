This is a simple and interactive task management app built with **React**. It lets you add, edit, delete, complete, and filter tasks.
Features

- Add new tasks with input validation
- Mark tasks as complete/incomplete
- Edit tasks inline
- Delete tasks with confirmation
- Filter by All / Completed / Pending
- See task statistics (total and completed)

How do components talk to each other?
Child → Parent communication uses callback props.
TaskForm calls onAdd to pass new tasks up.
TaskItem calls onEdit, onDelete, onToggle via props.

Data flow example:
User types a task in TaskForm and clicks "Add".
TaskForm runs onAdd(taskText).
TaskManager adds it to tasks state.
TaskList receives updated tasks as a prop.
TaskItem renders the task.