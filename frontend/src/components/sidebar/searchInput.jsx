import { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import useConversation from '../../zustand/useConversation';
import useGetConversation from '../../hooks/useGetConversation';
import toast from 'react-hot-toast';

const SearchInput = () => {
	const [search, setSearch] = useState('');

	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversation();

	const handleSearch = (e) => {
		e.preventDefault();
		if (!search) return;

		if (search.length < 3) {
			return toast.error(
				'Search term must be at least 3 characters long. For some reason'
			);
		}

		const conversation = conversations.find((c) =>
			c.fullName.toLowerCase().includes(search.toLowerCase())
		);

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch('');
		} else {
			return toast.error('No users found');
		}
	};

	return (
		<div>
			<form
				action=''
				className='flex items-center gap-2'
				onSubmit={handleSearch}>
				<input
					type='text'
					placeholder='Search...'
					className='input input-bordered rounded-full'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button
					type='submit'
					className='btn btn-cirlce bg-transparent text-teal-500 border-green-200 rounded-full hover:bg-accent-content'>
					<IoSearchSharp className='w-6 h-6 outline-none' />
				</button>
			</form>
		</div>
	);
};

export default SearchInput;
