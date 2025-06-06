import { useEffect, useRef } from 'react';
import useGetMessages from '../../hooks/useGetMessages';
import MsgSkeleton from '../skeletons/msgSkeleton';
import Message from './message';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
	const { messages, loading } = useGetMessages();
	useListenMessages();
	const lastMsgRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMsgRef.current?.scrollIntoView({ behavior: 'smooth' });
		}, 100);
	}, [messages]);

	return (
		<div className='px-4 flex-1 overflow-auto'>
			{!loading &&
				messages.length > 0 &&
				messages.map((message) => {
					return (
						<div key={message._id} ref={lastMsgRef}>
							<Message message={message} />
						</div>
					);
				})}

			{loading && [...Array(5)].map((_, idx) => <MsgSkeleton key={idx} />)}

			{!loading && messages.length === 0 && (
				<p className='text-center mt-50 ml-10'>
					Send a message to start a conversation.
				</p>
			)}
		</div>
	);
};

export default Messages;
