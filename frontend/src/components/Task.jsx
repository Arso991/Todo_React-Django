/* eslint-disable react/prop-types */
import "../styles/components/taskList.css";
function Task({
  todo,
  checkedValue,
  setCheckedValue,
  toggleStatus,
  deleteTodo,
  setOpenModal,
  setNewTask,
  setTaskId,
}) {
  const { id, task, created_at, status } = todo;
  const formattedDate = new Date(created_at).toLocaleDateString("fr-FR");
  const formattedHoure = new Date(created_at).toLocaleTimeString("fr-FR");

  return (
    <tr>
      <td>
        <input
          checked={status}
          type="checkbox"
          onChange={() => {
            setCheckedValue(!checkedValue);
            toggleStatus(id);
          }}
        />
      </td>
      <td className={status == true ? "finish" : ""}>{task}</td>
      <td className={status == true ? "finish" : ""}>
        {formattedDate} à {formattedHoure}
      </td>
      <td className="task-status">
        {status === false ? (
          <p className="task-status2">Incomplete</p>
        ) : (
          <p className="task-status1">Terminer</p>
        )}
      </td>
      <td>
        <button
          onClick={() => {
            setOpenModal(true);
            setNewTask(task);
            setTaskId(id);
          }}
          className="table-btn1"
        >
          editer
        </button>
        <button onClick={() => deleteTodo(id)} className="table-btn2">
          supprimer
        </button>
      </td>
    </tr>
  );
}

export default Task;
