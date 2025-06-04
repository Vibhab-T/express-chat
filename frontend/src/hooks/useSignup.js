import { useState } from 'react';
import toast from 'react-hot-toast';
import useAuthContext from './useAuthContext';

const useSignup = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const signup = async ({
		fullName,
		userName,
		password,
		confirmPassword,
		gender,
	}) => {
		const validated = handleSignupValidation({
			fullName,
			userName,
			password,
			confirmPassword,
			gender,
		});

		if (!validated) {
			return;
		}

		try {
			const res = await fetch('/api/auth/signup', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					fullName,
					userName,
					password,
					confirmPassword,
					gender,
				}),
			});

			const data = await res.json();

			if (data.error) {
				throw new Error(data.error);
			}

			console.log(data);

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

	return { loading, signup };
};

export default useSignup;

function handleSignupValidation({
	userName,
	fullName,
	password,
	confirmPassword,
	gender,
}) {
	if (!fullName || !userName || !password || !confirmPassword || !gender) {
		toast.error('Please fill out all the fields');
		return false;
	}
	if (password !== confirmPassword) {
		toast.error('Passwords do not match');
		return false;
	}
	if (password.length < 6) {
		toast.error('Password must be atleast 6 characters');
		return false;
	}

	return true;
}
