/* eslint-disable react-refresh/only-export-components */
import { Children, createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState(
		JSON.parse(localStorage.getItem('user-info')) || null
	);

	return (
		<AuthContext.Provider value={{ authUser, setAuthUser }}>
			{children}
		</AuthContext.Provider>
	);
};
