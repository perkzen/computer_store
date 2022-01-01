import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageBody from './components/ui/PageBody/PageBody';
import { unprotectedRoutes } from './routes';

import { v4 } from 'uuid';
import ModalProvider from './components/ui/ModalProvider/ModalProvider';

function App() {
  return (
    <ModalProvider>
      <PageBody>
        <Routes>
          {unprotectedRoutes.map((route) => (
            <Route key={v4()} path={route.path} element={route.element} />
          ))}
        </Routes>
      </PageBody>
    </ModalProvider>
  );
}

export default App;
