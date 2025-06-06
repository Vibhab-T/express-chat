import { useState } from 'react';
import { RiSendPlane2Line } from 'react-icons/ri';
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
	const [message, setMessage] = useState('');

	const { loading, sendMessage } = useSendMessage();

	const handleSendMessage = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage('');
	};

	return (
		<form className='px-2 my-3' onSubmit={handleSendMessage}>
			<div className='w-full relative'>
				<input
					type='text'
					className='border text-sm rounded-full block w-full p-2.5 bg-gray-900 border-gray-600 text-white overflow-auto'
					placeholder='Send a message...'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button
					type='submit'
					className='absolute inset-y-0 end-0 flex items-center pe-3 btn btn-cirlce bg-transparent text-teal-500 border-green-200 rounded-full'>
					{loading ? (
						<span className='loading loading-spinner'></span>
					) : (
						<RiSendPlane2Line className='w-6 h-6 outline-none curson-pointer ' />
					)}
				</button>
			</div>
		</form>
	);
};

export default MessageInput;
