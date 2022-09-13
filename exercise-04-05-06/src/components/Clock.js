import React, { useState, useEffect } from 'react';

const Clock = () => {
    const defaultState = {
        date: new Date(),
        age: 0,
        name: 'Pepito',
        surname: 'Gargollo'
    }

    const [user, setUser] = useState(defaultState)

    const updateUser = () => setUser({ ...defaultState, age: user.age + 1 })

    useEffect(() => {
        const intervalAge = setInterval(() => updateUser(), 1000)
        return () => clearInterval(intervalAge)
    })

    return (
        <div>
            <h2>{user.name} {user.surname}</h2>
            <h2>Hora: {user.date.toLocaleTimeString()}</h2>
            <h3>Edad: {user.age}</h3>
        </div>
    )
}

export default Clock
