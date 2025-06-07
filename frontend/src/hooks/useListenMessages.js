import { useEffect } from 'react';
import useSocketContext from '../hooks/useSocketContext';
import useConversation from '../zustand/useConversation';

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { setMessages } = useConversation();

	useEffect(() => {
		if (!socket) return;

		const hadnleNewMessage = (newMessage) => {
			setMessages((prevMessages) => [...prevMessages, newMessage]);
		};

		socket?.on('newMessage', 'handleNewMessage');

		return () => socket?.off('newMessage', hadnleNewMessage);
	}, [socket, setMessages]);
};

export default useListenMessages;
