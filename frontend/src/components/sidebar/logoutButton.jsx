import { BiLogOutCircle } from 'react-icons/bi';

const Logout = () => {
	return (
		<div className='mt-auto'>
			<button
				type='submit'
				className='btn btn-cirlce bg-transparent text-teal-500 border-green-200 rounded-full'>
				<BiLogOutCircle className='w-6 h-6 outline-none curson-pointer ' />
			</button>
		</div>
	);
};

export default Logout;
