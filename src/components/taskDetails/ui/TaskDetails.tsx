import React from "react";
import { observer } from "mobx-react-lite";

export const TaskDetails = observer(() => {
    return (
        <div>
            <h2>Детали задачи</h2>
            <h3>Заголовок задачи</h3>
            <p>Текст задачи</p>
        </div>
    );
});


