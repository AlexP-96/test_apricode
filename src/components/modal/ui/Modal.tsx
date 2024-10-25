import { observer } from 'mobx-react-lite';
import React from 'react';
import TaskStore from '../../../store/TaskStore';
import './Modal.css';

export const Modal = observer(() => {
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
                    onChange={(e) => {TaskStore.titleHandler(e.target.value);}}
                />
                <textarea
                    placeholder='Текст задачи'
                    rows={3}
                    onChange={(e) => {TaskStore.textHandler(e.target.value);}}
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