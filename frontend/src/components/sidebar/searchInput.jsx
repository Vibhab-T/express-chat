import { IoSearchSharp } from 'react-icons/io5';

const SearchInput = () => {
	return (
		<div>
			<form action='' className='flex items-center gap-2'>
				<input
					type='text'
					placeholder='Search...'
					className='input input-bordered rounded-full'
				/>
				<button
					type='submit'
					className='btn btn-cirlce bg-transparent text-teal-500 border-green-200 rounded-full'>
					<IoSearchSharp className='w-6 h-6 outline-none' />
				</button>
			</form>
		</div>
	);
};

export default SearchInput;
