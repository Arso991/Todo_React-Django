/* eslint-disable react/prop-types */
import Loader from "./loader";
import "../styles/components/form.css";

function Form({ loading, handleSubmit, taskValue, setTaskValue }) {
  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-input">
          <input
            type="text"
            required
            value={taskValue}
            onChange={(e) => setTaskValue(e.target.value)}
            placeholder="Ajouter une tâche"
          />
        </div>
        {loading == true && <Loader />}
        <button className="form-button" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default Form;
