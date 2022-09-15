import React from 'react';

const Contact = ({ contact, changeState, rmvContact }) => {
    
    const onChangeState = () => changeState(contact)
    const onRmvChange = () => rmvContact(contact)

    return (
        <div>
            <li>{contact.name}</li>

            <button style={ { backgroundColor: contact.isConected ? 'green' : 'red' } } onClick={onChangeState}>
                {contact.isConected ? 'Conectado' : 'Desconectado'}
            </button>
            <button onClick={onRmvChange}>Borrar</button>
        </div>
    )
}

export default Contact;
