import React, {useState} from 'react'
import Todo from './Todo'

const Form = () => {
    const [todo, setTodo] = useState({}) //Agrega solo UNA tarea
    const [todos, setTodos] = useState([ //Crea una LISTA de tareas
        {todo: 'todo 1'},
        {todo: 'todo 2'},
        {todo: 'todo 3'}
    ])

    //Captura la nueva tarea del input
    const handleChange = e => setTodo({[e.target.name]: e.target.value})
    //Verifica si el campo esta vacío y agrega la nueva tarea, conservando las tareas anteriores
    const handleClick = e => {
        if (Object.keys(todo).length === 0 || todo.todo.trim() === '') {
            alert('El campo no puede estar vacío')
            return
        }
        setTodos([...todos, todo])
    }

    //Elimina una tarea
    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
    }

    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                <label>Agregar tarea</label>
                <br />
                <input type="text" name='todo' onChange={handleChange} />
                <button onClick={handleClick}>Agregar</button>
            </form>

            {
                todos.map((value, index) => (
                    <Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo}/>
                ))
            }
        </>
    )
}

export default Form