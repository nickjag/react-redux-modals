import React from 'react';

export const ShallowMock = (Component, props) => {

    return React.cloneElement(
	    Component, 
	    props
    );
};

export default ShallowMock;