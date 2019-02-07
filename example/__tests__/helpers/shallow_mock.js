import React from 'react';

export const ShallowMock = (Component, props) =>
  React.cloneElement(Component, props);

export default ShallowMock;
