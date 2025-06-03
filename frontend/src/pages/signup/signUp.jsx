import GenderCheckbox from './genderCheckbox';

const SignUp = () => {
	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto min-h-screen'>
			<div className='bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 p-8 shadow-md'>
				<h1 className='text-white text-3xl font-semibold text-center'>
					Sign Up
					<span className='text-green-400'> | MERN Chat App</span>
				</h1>
				<form>
					<div>
						<div>
							<label className='label p-2'></label>
							<input
								type='text'
								placeholder='Full Name'
								className='w-full input input-bordered h-10'
							/>
						</div>
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
						<div>
							<label className='label p-2'></label>
							<input
								type='password'
								placeholder='Confirm Password'
								className='w-full input input-bordered h-10'
							/>
						</div>

						<GenderCheckbox />

						<a
							href='#'
							className='text-sm hover:underline hover:text-blue-400 mt-2 inline-block'>
							Already Have An Account?
						</a>

						<div className='btn btn-block btn-sm mt-2 bg-green-200 text-indigo-500 rouded-sm border-none hover:bg-green-300 hover:text-blue-600'>
							Sign Up
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
