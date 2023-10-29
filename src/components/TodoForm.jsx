
import { useState } from 'react';
import PropTypes from 'prop-types';




const TodoForm= ( { addTodo}) => {
    const [value,setValue]= useState("");
    const [category,setCategory]= useState("");
    const [date,setDate]= useState("");

    const handleSubmit = (e) => {
       e.preventDefault();
        if(!value || !category || !date)return;
        addTodo(value, category, date);
        setValue("");
        setCategory("");
        setDate("");
    };

  return (
   <div className="todo-form">
    <h2>Criar Tarefa</h2>
    <form onSubmit={handleSubmit}>
        <input value={value} type="text" placeholder="Digite o Título" onChange={(e) => setValue(e.target.value)} />
        <input value={date} type="text" placeholder="Digite Quando deverá ser feito" onChange={(e) => setDate(e.target.value)} />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value=""> Selecione uma Categoria</option>  
            <option value="Trabalho"> Trabalho</option>  
            <option value="Pessoal"> Pessoal </option>  
            <option value="Estudos"> Estudos </option>  
        </select>
        <button type='submit'>Criar Tarefa</button>
    </form>
   </div>
  )
}

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
};
export default TodoForm