import { RiSendPlane2Line } from 'react-icons/ri';

const MessageInput = () => {
	return (
		<form className='px-2 my-3'>
			<div className='w-full relative'>
				<input
					type='text'
					className='border text-sm rounded-full block w-full p-2.5 bg-gray-900 border-gray-600 text-white'
					placeholder='Send a message...'
				/>
				<button
					type='submit'
					className='absolute inset-y-0 end-0 flex items-center pe-3 btn btn-cirlce bg-transparent text-teal-500 border-green-200 rounded-full'>
					<RiSendPlane2Line className='w-6 h-6 outline-none curson-pointer ' />
				</button>
			</div>
		</form>
	);
};

export default MessageInput;
