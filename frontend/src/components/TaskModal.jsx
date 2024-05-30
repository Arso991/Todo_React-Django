/* eslint-disable react/prop-types */
import "../styles/components/taskModal.css";
import "../styles/components/form.css";

function TaskModal({ editTodo, newTask, setNewTask, taskId }) {
  const handleEdit = (e) => {
    e.preventDefault();
    editTodo(taskId);
  };
  return (
    <div className="modal-container">
      <div className="modal-content">
        <form className="form-container">
          <div className="form-input">
            <input
              type="text"
              defaultValue={newTask}
              onChange={(e) => {
                setNewTask(e.target.value);
              }}
            />
          </div>

          <button onClick={handleEdit} className="form-button" type="submit">
            Modifier
          </button>
        </form>
      </div>
    </div>
  );
}
export default TaskModal;
