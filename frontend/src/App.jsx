import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import Home from './pages/home/home.jsx';
import Login from './pages/login/login.jsx';
import Signup from './pages/signup/abc.jsx';
import { Toaster } from 'react-hot-toast';
import useAuthContext from './hooks/useAuthContext.js';

function App() {
	const { authUser } = useAuthContext();
	return (
		<div className='p-4 h-screen flex items-center justify-center'>
			<Routes>
				<Route
					path='/'
					element={authUser ? <Home /> : <Navigate to={'/login'} />}
				/>
				<Route
					path='/login'
					element={authUser ? <Navigate to='/' /> : <Login />}
				/>
				<Route
					path='/signup'
					element={authUser ? <Navigate to='/' /> : <Signup />}
				/>
			</Routes>
			<Toaster />
		</div>
	);
}

export default App;
