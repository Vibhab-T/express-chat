import { useState } from 'react';
import GenderCheckbox from './genderCheckbox';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: '',
		userName: '',
		password: '',
		confirmPassword: '',
		gender: '',
	});

	const { loading, signup } = useSignup();

	const handleGenderCheckbox = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const signupSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto min-h-screen'>
			<div className='bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 p-8 shadow-md'>
				<h1 className='text-white text-3xl font-semibold text-center'>
					Sign Up
					<span className='text-teal-500'> | MERN Chat App</span>
				</h1>
				<form onSubmit={signupSubmit}>
					<div>
						<div>
							<label className='label p-2'></label>
							<input
								type='text'
								placeholder='Full Name'
								className='w-full input input-bordered h-10 rounded-full'
								value={inputs.fullName}
								onChange={(e) =>
									setInputs({ ...inputs, fullName: e.target.value })
								}
							/>
						</div>
						<div>
							<label className='label p-2'></label>
							<input
								type='text'
								placeholder='Username'
								className='w-full input input-bordered h-10 rounded-full'
								value={inputs.userName}
								onChange={(e) =>
									setInputs({ ...inputs, userName: e.target.value })
								}
							/>
						</div>
						<div>
							<label className='label p-2'></label>
							<input
								type='password'
								placeholder='Password'
								className='w-full input input-bordered h-10 rounded-full'
								value={inputs.password}
								onChange={(e) =>
									setInputs({ ...inputs, password: e.target.value })
								}
							/>
						</div>
						<div>
							<label className='label p-2'></label>
							<input
								type='password'
								placeholder='Confirm Password'
								className='w-full input input-bordered h-10 rounded-full'
								value={inputs.confirmPassword}
								onChange={(e) =>
									setInputs({ ...inputs, confirmPassword: e.target.value })
								}
							/>
						</div>

						<GenderCheckbox
							onCheckboxChange={handleGenderCheckbox}
							selectedGender={inputs.gender}
						/>

						<Link
							to={'/login'}
							className='text-sm hover:underline hover:text-blue-400 mt-2 ml-3 inline-block'>
							Already Have An Account?
						</Link>

						<div>
							<button
								className='btn btn-block btn-sm mt-2 rounded-full bg-transparent text-teal-500 border-green-200 hover:bg-green-300 hover:text-blue-600'
								disabled={loading}>
								{loading ? (
									<span className='loading loading-spinner'></span>
								) : (
									'Sign Up'
								)}
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
