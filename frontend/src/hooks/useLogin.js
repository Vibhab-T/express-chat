import { useState } from 'react';
import toast from 'react-hot-toast';
import useAuthContext from './useAuthContext';

const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const login = async (userName, password) => {
		const validated = validateLogin(userName, password);

		if (!validated) {
			return;
		}

		setLoading(true);
		try {
			const res = await fetch('/api/auth/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					userName,
					password,
				}),
			});

			const data = await res.json();

			if (data.error) {
				throw new Error(data.error);
			}
			//now save to local storage
			localStorage.setItem('user-info', JSON.stringify(data));
			//update context
			setAuthUser(data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, login };
};

function validateLogin(userName, password) {
	if (!userName || !password) {
		toast.error('Please fill all the fields');
		return false;
	}

	if (password.length < 6) {
		toast.error('Password must be atleast 6 characters long');
		return false;
	}

	return true;
}

export default useLogin;
