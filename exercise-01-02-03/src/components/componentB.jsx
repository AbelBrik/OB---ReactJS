import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ComponentB(props) {
    const [isConected, setState] = useState(props.isConected);
    const changeState = () => setState(!isConected)
    return (
        <div>
            <button onClick={changeState}>{isConected === true ? 'En línea' : 'No disponible'}</button>
        </div>
    );
}

ComponentB.propTypes = {
    props: PropTypes.bool
}

export default ComponentB