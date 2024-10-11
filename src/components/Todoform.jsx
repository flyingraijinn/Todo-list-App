import React, { useState } from 'react';

const Todoform = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (value.trim()) {  
            addTodo(value);
            setValue("");
        }
    };

    return (
        <div className='w-full mt-5 h-auto flex justify-center items-center'>
            <form className='w-[500px] h-auto bg-white pt-5 text-center rounded-xl' onSubmit={handleSubmit}>
                <input
                    className='px-5 py-2 rounded-s-full border-green-400 border-[1px]'
                    type="text"
                    placeholder='What is the task today?'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button className='bg-green-400 text-white px-5 py-2 rounded-e-full border-green-400 border-[1px] hover:bg-gray-500 hover:text-white hover:scale-105 duration-300'>
                    Add Task
                </button>
            </form>
        </div>
    );
};

export default Todoform;
