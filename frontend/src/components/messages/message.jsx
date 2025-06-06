import useAuthContext from '../../hooks/useAuthContext';
import { extractTime } from '../../utils/extractTime';
import useConversation from '../../zustand/useConversation';

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const chatClass = fromMe ? 'chat-end' : 'chat-start';
	const profilePic = fromMe
		? authUser.profilePic
		: selectedConversation?.profilePic;
	const bubbleColor = fromMe ? 'bg-teal-900' : 'bg-green-500';
	const formatDate = extractTime(message.createdAt);
	return (
		<div className={`chat ${chatClass}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img src={profilePic} alt='user avatar' />
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleColor}`}>
				{message.message}
			</div>
			<div className='chat-footer opacity-50 text-xs flex gap-2 items-center'>
				{formatDate}
			</div>
		</div>
	);
};

export default Message;
