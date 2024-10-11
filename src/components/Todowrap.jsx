import React, { useState } from 'react';
import Todoform from './Todoform';
import { v4 as uuidv4 } from 'uuid'; // Correct import from uuid
import Todo from './Todo';

const Todowrap = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (task) => {
        setTodos([...todos, { id: uuidv4(), task, completed: false }]);
    };

    const editTodo = (id, newTask) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, task: newTask } : todo)));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleCompletion = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    return (
        <div className='w-full mt-5 flex justify-center'>
            <div className='w-[500px] bg-white p-5 rounded-xl shadow-md'>
                <Todoform addTodo={addTodo} />
                <div className='mt-4'>
                    {todos.map((todo) => (
                        <Todo 
                            key={todo.id} 
                            todo={todo} 
                            onEdit={editTodo} 
                            onDelete={deleteTodo} 
                            onToggleCompletion={toggleCompletion} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Todowrap;
