import { BiLogOutCircle } from 'react-icons/bi';
import useLogout from '../../hooks/useLogout';

const Logout = () => {
	const { loading, logout } = useLogout();

	return (
		<div className='mt-auto'>
			{!loading ? (
				<button className='btn btn-cirlce bg-transparent text-teal-500 border-green-200 rounded-full'>
					<BiLogOutCircle
						className='w-6 h-6 outline-none curson-pointer '
						onClick={logout}
					/>
				</button>
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};

export default Logout;
