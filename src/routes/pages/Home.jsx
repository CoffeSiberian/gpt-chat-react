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
            <div className="flex w-full justify-center mb-3 mt-3">
                <Typography
                    variant="caption"
                    color={themeTatailwind.primary.color}
                >
                    Codigo fuente disponible en:{" "}
                    <a
                        className="underline text-sky-600"
                        href="https://github.com/CoffeSiberian/gpt-chat-react"
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://github.com/CoffeSiberian/gpt-chat-react
                    </a>
                </Typography>
            </div>
        </div>
    );
};

export default Home;
