import React from 'react';

const Todo = ({ todo, onEdit, onDelete, onToggleCompletion }) => {
  return (
    <div className={`flex items-center justify-between bg-green-400 py-2 rounded-xl w-full px-2 mt-2`}>
      <p className={`font-semibold text-center flex-1 ${todo.completed ? 'line-through text-gray-300' : ''}`}>
        {todo.task}
      </p>
      <div className='flex gap-4 items-center cursor-pointer '>
        <button onClick={() => onToggleCompletion(todo.id)} title="Toggle Completion">
          <i className="fa-solid fa-check"></i>
        </button>
        <button onClick={() => onEdit(todo.id, prompt('Edit task:', todo.task))} title="Edit Task">
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => onDelete(todo.id)} title="Delete Task">
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
