import React from 'react';
import ReactDOM from 'react-dom';
import PaymentMethod from './PaymentMethod';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PaymentMethod />, div);
  ReactDOM.unmountComponentAtNode(div);
});