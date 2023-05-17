import { TITLE } from "../../helpers/configs";
import ChatGPT from "../../components/ChatGPT";

const Home = () => {
    document.title = TITLE + " | GPT-3";
    return (
        <div className="flex p-2 md:p-10">
            <ChatGPT />
        </div>
    );
};

export default Home;
