import { useState, useEffect } from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import TaskList from "../components/TaskList";
import api from "../api";

function Home() {
  const [taskValue, setTaskValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [checkedValue, setCheckedValue] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [taskId, setTaskId] = useState();

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      const res = await api.get("todos/");
      setTasks(res.data);
      console.log(tasks);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await api.post("todos/", { task: taskValue });
      if (res.status == 201) {
        alert("Tâche ajoutée !");
        setTaskValue("");
        getTodos();
      } else {
        alert("Erreur lors de l'ajout");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const toggleStatus = async (id) => {
    try {
      const todo = tasks.filter((task) => task.id == id)[0];
      const res = await api.patch(`todos/update/${id}/`, {
        status: !todo.status,
      });
      if (res.status == 200) {
        getTodos();
      } else {
        alert("Erreur lors de la modification");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const res = await api.delete(`todos/delete/${id}/`);
      if (res.status === 200) {
        alert("Tâche supprimé");
        getTodos();
      } else {
        alert("Erreur lors de la suppression");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editTodo = async (id) => {
    //console.log(newTask);
    try {
      const res = await api.put(`todos/update/${id}/`, { task: newTask });
      if (res.status === 200) {
        alert("Tâche modifiée");
        setOpenModal(false);
        getTodos();
      } else {
        alert("Erreur lors de la modification");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Header />
      <Form
        handleSubmit={handleSubmit}
        taskValue={taskValue}
        setTaskValue={setTaskValue}
        loading={loading}
      />
      <TaskList
        tasks={tasks}
        toggleStatus={toggleStatus}
        checkedValue={checkedValue}
        setCheckedValue={setCheckedValue}
        deleteTodo={deleteTodo}
        openModal={openModal}
        setOpenModal={setOpenModal}
        setNewTask={setNewTask}
        editTodo={editTodo}
        newTask={newTask}
        taskId={taskId}
        setTaskId={setTaskId}
      />
    </div>
  );
}

export default Home;
