import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

export const TaskItem = observer(() => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [editing, setEditing] = useState(true);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    return (
        <div>
            <div>
                <button>
                    {isExpanded
                        ? '▼'
                        : '➤️'}
                </button>
                <span>
                    Заголовок
                </span>
                <button>✏️</button>
                <button>🗑️</button>
                <input
                    type='checkbox'
                />
            </div>
            {editing && (
                <div className='task-item__edit'>
                    <input
                        type='text'
                        placeholder='Заголовок задачи'
                    />
                    <textarea
                        placeholder='Текст задачи'
                        rows={3}
                    />
                    <button>Сохранить</button>
                    <button>Отмена</button>
                </div>
            )}
        </div>
    );
});
