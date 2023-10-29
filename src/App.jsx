import { useState, useEffect  } from 'react'
import "./App.css";
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "criar funcionalidade x no sistema",
      date: "15/11/2023",
      category:"Trabalho" ,
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir à academia",
      date: "15/11/2023",
      category:"Pessoal" ,
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      date: "15/11/2023",
      category:"Estudos" ,
      isCompleted: false,
    },
    
   
  ])

  const updateAndSaveTodos = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const addTodo =(text,category,date) => {
   
    const newTodos = [...todos, {
      id: Math.floor(Math.random()*10000),
      text,
      date, 
      category, 
      isCompleted: false,
    },
  ];
 
  setTodos(newTodos);
  updateAndSaveTodos(newTodos)
  };

  const removeTodo = (id)  => {
    const newTodos =[...todos]
    const filteredTodos = newTodos.filter((todo) => todo.id !==id ? todo: null
    );
    setTodos(filteredTodos);
    updateAndSaveTodos(filteredTodos)

  };
    const completeTodo =(id) => {
      const newTodos = [...todos];
      newTodos.map((todo) => todo.id===id ? todo.isCompleted = !todo.isCompleted : todo);
      setTodos(newTodos)
      updateAndSaveTodos(newTodos)
      console.log(newTodos)
    }

    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("All")
    const [sort, setSort] = useState("Asc")

    useEffect(() => {
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    }, []);

  return <div className="app">
    <h1>Lista de tarefas</h1>
    <Search search={search}  setSearch={setSearch} />
    <Filter filter={filter} setFilter={setFilter} sort={sort} setSort={setSort}  />
    <div className="todo-list">
      {todos.filter((todo) => filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted)
      .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()) )
      .sort((a,b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text) )
      .map((todo) => (
        <Todo key={todo.id} todo={todo}  removeTodo={removeTodo}  completeTodo={completeTodo} />
      ))}
    </div>
    <TodoForm addTodo={addTodo} />

  </div>


}


export default App
