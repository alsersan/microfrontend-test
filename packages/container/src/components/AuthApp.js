import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'auth/AuthApp';

const AuthApp = () => {
  const ref = useRef();
  const history = useHistory();

  useEffect(() => {
    if (ref.current) {
      const { onParentNavigate } = mount(ref.current, {
        onNavigate({ pathname: nextPathname }) {
          const { pathname } = history.location;

          if (pathname !== nextPathname) {
            history.push(nextPathname);
          }
        },
      });

      history.listen(onParentNavigate);
    }
  }, []);

  return <div ref={ref} />;
};

export default AuthApp;
