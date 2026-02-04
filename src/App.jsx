import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ModalProvider from './provider/ModalProvider';
import ProtectedRoute from './auth/ProtectedRoute';
import UnprotectedRoute from './auth/UnprotectedRoute';

function App() {
  return (
    <>
      <Routes>
        {/*UNPROTECTED ROUTES*/}
        <Route element={<UnprotectedRoute/>}>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/login' element={<Login/>}/>
        </Route>
        

        {/*PROTECTED ROUTES*/}
        <Route element={ <ProtectedRoute/> }>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>

      <ModalProvider />
    </>
  )
}

export default App
