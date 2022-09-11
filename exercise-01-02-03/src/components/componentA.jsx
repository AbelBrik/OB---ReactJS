import React from "react";

import PropTypes from 'prop-types';
import {Contact} from '../models/contact';
import ComponentB from './componentB';

const ComponentA = ({contact}) => {
    return (
        <div>
            <h2>Nombre: {contact.name}</h2>
            <h3>Apellido: {contact.surname}</h3>
            <h3>Email: {contact.mail}</h3>
            <ComponentB isConected={false}/>
        </div>
    );
}

ComponentA.propTypes = {
    contact: PropTypes.instanceOf(Contact),
};

export default ComponentA;
