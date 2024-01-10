import React, {useId} from 'react';
import Button from "./Button";

function TaskForm({isTimerStarted, onSubmit}) {

    const id = useId();

    const handelSubmitForm = e => {
        e.preventDefault();
        onSubmit();
    }

    return (
        <form onSubmit={handelSubmitForm}>
            <div>
                <label htmlFor={`${id}-tiltle`}>Titre de votre tache</label>
                <input type="text" id={`${id}-title`} placeholder={`Titre de votre tache`} />
            </div>
            <div>
                <label htmlFor={`${id}-description`}>Description</label>
                <textarea id={`${id}-description`} rows="10" placeholder="Ecrivez la description de votre tache" ></textarea>
            </div>
            <Button type='submit' />
        </form>
    );
}

export default TaskForm;