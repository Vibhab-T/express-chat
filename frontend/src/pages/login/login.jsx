import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto min-h-screen'>
			<div className='bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 p-8 shadow-md'>
				<h1 className='text-white text-3xl font-semibold text-center'>
					Login
					<span className='text-teal-500'> | MERN Chat App</span>
				</h1>
				<form>
					<div>
						<label className='label p-2'></label>
						<input
							type='text'
							placeholder='Username'
							className='w-full input input-bordered h-10 rounded-full'
						/>
					</div>
					<div>
						<label className='label p-2'></label>
						<input
							type='password'
							placeholder='Password'
							className='w-full input input-bordered h-10 rounded-full'
						/>
					</div>
					<Link
						to={'/signup'}
						className='text-sm hover:underline hover:text-blue-400 mt-2 ml-3 inline-block'>
						Sign Up For A New Account?
					</Link>

					<button
						type='submit'
						className='btn btn-block btn-sm mt-2 rounded-full bg-transparent text-teal-500 border-green-200 hover:bg-green-300 hover:text-blue-600'>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
