import MessageContainer from '../../components/messages/messageContainer';
import Sidebar from '../../components/sidebar/sidebar';

const Home = () => {
	return (
		<div className='flex sm:h-[450px] md:h-[550px] overflow-hiddenbg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-md'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};

export default Home;
