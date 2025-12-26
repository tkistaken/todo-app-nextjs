'use client';

import { useState, useEffect } from 'react';
import { TodoList } from './components/TodoList';
import { AddTodo } from './components/AddTodo';

export interface Todo {
    id: string;
    text: string;
    completed: boolean;
    createdAt: number;
}

export default function Home() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: Date.now().toString(),
            text,
            completed: false,
            createdAt: Date.now(),
        };
        setTodos([newTodo, ...todos]);
    };

    const toggleTodo = (id: string) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const activeTodos = todos.filter((todo) => !todo.completed);
    const completedTodos = todos.filter((todo) => todo.completed);

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 animate-fade-in">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                        Todo App
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                        Organize your tasks beautifully
                    </p>
                </div>

                {/* Add Todo Form */}
                <AddTodo onAdd={addTodo} />

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-white/20">
                        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                            {activeTodos.length}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            Active Tasks
                        </div>
                    </div>
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-white/20">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                            {completedTodos.length}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            Completed
                        </div>
                    </div>
                </div>

                {/* Todo List */}
                <TodoList
                    todos={todos}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                />

                {/* Empty State */}
                {todos.length === 0 && (
                    <div className="text-center py-12 animate-fade-in">
                        <div className="text-6xl mb-4">📝</div>
                        <p className="text-gray-500 dark:text-gray-400 text-lg">
                            No tasks yet. Add one to get started!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
