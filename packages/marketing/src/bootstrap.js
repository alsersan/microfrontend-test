import React from 'react';
import ReactDOM from 'react-dom';

// Mount function
const mount = (el) => {
  ReactDOM.render(<h1>test</h1>, el);
};

// If we are in development and in isolation, call immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_marketing-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

// If not, then we are running through the container and mount has to be exported
export { mount };
