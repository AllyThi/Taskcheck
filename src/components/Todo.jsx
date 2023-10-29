import PropTypes from 'prop-types';


const Todo = ({todo, removeTodo, completeTodo}) => {
  return (
    <div className="todo">
          <div className="content" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <p>{todo.text}</p>
            <p>({todo.date})</p>
            <p className="category">{todo.category}</p>
          </div>
          <div>
            <button onClick={() => completeTodo(todo.id)} className='complete'>Completar</button>
            <button onClick={() => removeTodo(todo.id)} className='remove'>X</button>
          </div>
        </div>
  )
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  removeTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
};


export default Todo