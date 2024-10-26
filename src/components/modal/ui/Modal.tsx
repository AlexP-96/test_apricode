import { observer } from 'mobx-react-lite';
import React from 'react';
import TaskStore from '../../../store/TaskStore';
import './Modal.css';
import { ITask } from '../../taskItem/types';

export const Modal: React.FC<React.PropsWithChildren<ITask>> = observer(({ task }) => {
    const handlerInputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        TaskStore.titleHandler(e.target.value);
    };
    const handlerInputText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        TaskStore.textHandler(e.target.value);
    };

    const handlerSaveTask = () => {

    }

    return (
        <div className='modal'>
            <div
                className='modal__bg'
                onClick={() => TaskStore.closeModal()}
            ></div>
            <div className='item__edit'>
                <input
                    type='text'
                    placeholder='Заголовок задачи'
                    value={TaskStore.title}
                    onChange={(e) => {handlerInputTitle(e);}}
                />
                <textarea
                    placeholder='Текст задачи'
                    rows={3}
                    value={TaskStore.text}
                    onChange={(e) => {handlerInputText(e);}}
                />
                <button
                    onClick={() => TaskStore.addTask()}
                >Сохранить
                </button>
                <button
                    onClick={() => TaskStore.closeModal()}
                >Отмена
                </button>
            </div>
        </div>
    );
});