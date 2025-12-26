'use client';

import { useState, FormEvent } from 'react';

interface AddTodoProps {
    onAdd: (text: string) => void;
}

export function AddTodo({ onAdd }: AddTodoProps) {
    const [text, setText] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text.trim());
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-8">
            <div className="relative">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="What needs to be done?"
                    className="w-full px-6 py-4 pr-32 text-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl border-2 border-transparent focus:border-indigo-500 dark:focus:border-indigo-400 outline-none transition-all duration-300 shadow-lg placeholder-gray-400 dark:placeholder-gray-500 text-gray-800 dark:text-gray-100"
                />
                <button
                    type="submit"
                    disabled={!text.trim()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                    Add
                </button>
            </div>
        </form>
    );
}
