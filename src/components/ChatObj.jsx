import { Typography } from "@mui/material";
import { useDarkMode } from "../hooks/contex/DarkModeContex";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

const ChatObj = ({ text, img }) => {
    const { themeTatailwind } = useDarkMode();
    return (
        <div className="flex w-full md:w-8/12 h-auto gap-5">
            <img className="rounded-full w-10 h-10" src={img} alt="chatuser" />
            <Typography
                className="text-justify space-y-1 overflow-x-auto"
                component="div"
                variant="body1"
                color={themeTatailwind.primary.color}
            >
                <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                    {text}
                </ReactMarkdown>
            </Typography>
        </div>
    );
};

export default ChatObj;
