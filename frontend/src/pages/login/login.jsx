const Login = () => {
	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto min-h-screen'>
			<div className='bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 p-8 shadow-md'>
				<h1 className='text-white text-3xl font-semibold text-center'>
					Login
					<span className='text-blue-400'> | MERN Chat App</span>
				</h1>
				<form>
					<div>
						<label className='label p-2'></label>
						<input
							type='text'
							placeholder='Username'
							className='w-full input input-bordered h-10'
						/>
					</div>
					<div>
						<label className='label p-2'></label>
						<input
							type='password'
							placeholder='Password'
							className='w-full input input-bordered h-10'
						/>
					</div>
					<a
						href='#'
						className='text-sm hover:underline hover:text-blue-400 mt-2 inline-block'>
						Sign Up For A New Account?
					</a>

					<div className='btn btn-block btn-sm mt-2'>Login</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
