import { Todo } from '../page';

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    index: number;
}

export function TodoItem({ todo, onToggle, onDelete, index }: TodoItemProps) {
    return (
        <div
            className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-slide-in"
            style={{ animationDelay: `${index * 50}ms` }}
        >
            <div className="flex items-center gap-4">
                {/* Checkbox */}
                <button
                    onClick={() => onToggle(todo.id)}
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 transition-all duration-300 ${todo.completed
                            ? 'bg-gradient-to-r from-green-400 to-emerald-500 border-green-500'
                            : 'border-gray-300 dark:border-gray-600 hover:border-indigo-500'
                        }`}
                >
                    {todo.completed && (
                        <svg
                            className="w-full h-full text-white p-1"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M5 13l4 4L19 7"></path>
                        </svg>
                    )}
                </button>

                {/* Todo Text */}
                <div className="flex-1 min-w-0">
                    <p
                        className={`text-lg transition-all duration-300 ${todo.completed
                                ? 'line-through text-gray-400 dark:text-gray-500'
                                : 'text-gray-800 dark:text-gray-100'
                            }`}
                    >
                        {todo.text}
                    </p>
                </div>

                {/* Delete Button */}
                <button
                    onClick={() => onDelete(todo.id)}
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center"
                    aria-label="Delete todo"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}
