import React from 'react';
import {Route, Routes} from 'react-router-dom';
import PageBody from './components/ui/PageBody/PageBody';
import {protectedRoutes, unprotectedRoutes} from './routes';
import {v4} from 'uuid';
import ModalProvider from './components/ui/ModalProvider/ModalProvider';
import ProtectedRoute from "./components/ui/ProtectedRoute/ProtectedRoute";
import PageNotFound from "./components/ui/PageNotFound/PageNotFound";


function App() {
    return (
        <ModalProvider>
            <PageBody>
                <Routes>
                    {unprotectedRoutes.map((route) => (
                        <Route key={v4()} path={route.path} element={route.element}/>
                    ))}
                    {protectedRoutes.map((route) => (
                        <Route key={v4()} path={route.path} element={<ProtectedRoute>{route.element}</ProtectedRoute>}/>
                    ))}
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </PageBody>
        </ModalProvider>
    );
}

export default App;
