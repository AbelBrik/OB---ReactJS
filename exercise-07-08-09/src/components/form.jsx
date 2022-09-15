import React, { useRef } from 'react';

const Form = ({ addContact }) => {
    const name = useRef('');
    
    const onAddContact = (e) => {
        e.preventDefault();
        addContact({ name: name.current.value, isConected: true });
        resetInput()
    }
    
    const resetInput = () => name.current.value = ''

    return (
        <form onSubmit={addContact}>
            <h2>Añadir contacto:</h2>
            <input ref={name} placeholder="Nombre"/>
            <button onClick={onAddContact} type="submit">Añadir</button>
        </form>
    )
}

export default Form
