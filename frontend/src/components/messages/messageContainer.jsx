import { useEffect } from 'react';
import useConversation from '../../zustand/useConversation';
import MessageInput from './messageInput';
import Messages from './messages';
import { TiMessages } from 'react-icons/ti';

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	//removes selected convo when unmounting
	useEffect(() => {
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='md:min-w-[450px] flex flex-col'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					<div className='bg-accent-content px-4 py-2 mb-2 rounded-full ml-2'>
						<span className='text-white font-bold'>
							{selectedConversation.fullName}
						</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};

export default MessageContainer;

const NoChatSelected = () => {
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Hello, John Doe.</p>
				<p>Select a friend to start messaging.</p>
				<TiMessages className='text-3xl md:text-6xl text0center' />
			</div>
		</div>
	);
};
