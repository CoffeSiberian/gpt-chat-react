import { TITLE } from "../../helpers/configs";
import ChatGPT from "../../components/ChatGPT";
import { Typography } from "@mui/material";
import { useDarkMode } from "../../hooks/contex/DarkModeContex";

const Home = () => {
    document.title = TITLE + " | GPT-3.5";
    const { themeTatailwind } = useDarkMode();

    return (
        <div className="flex flex-col ml-2 mr-2 mb-5 md:ml-10 md:mr-10">
            <div className="flex w-full justify-center mb-3">
                <Typography variant="h5" color={themeTatailwind.primary.color}>
                    <b>ChatBot GPT-3.5 Turbo</b>
                </Typography>
            </div>
            <ChatGPT />
        </div>
    );
};

export default Home;
