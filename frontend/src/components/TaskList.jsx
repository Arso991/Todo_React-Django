/* eslint-disable react/prop-types */
import "../styles/components/taskList.css";
import Task from "./Task";
import TaskModal from "../components/TaskModal";

function TaskList({
  tasks,
  setCheckedValue,
  checkedValue,
  toggleStatus,
  deleteTodo,
  openModal,
  setOpenModal,
  setNewTask,
  editTodo,
  newTask,
  taskId,
  setTaskId,
}) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <td></td>
            <td>Tâche à faire</td>
            <td>Ajouter le</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            return (
              <Task
                todo={task}
                key={index}
                checkedValue={checkedValue}
                setCheckedValue={setCheckedValue}
                toggleStatus={toggleStatus}
                deleteTodo={deleteTodo}
                setOpenModal={setOpenModal}
                setNewTask={setNewTask}
                setTaskId={setTaskId}
              />
            );
          })}
        </tbody>
      </table>
      {openModal == true && (
        <TaskModal
          editTodo={editTodo}
          newTask={newTask}
          setNewTask={setNewTask}
          taskId={taskId}
        />
      )}
    </div>
  );
}

export default TaskList;
