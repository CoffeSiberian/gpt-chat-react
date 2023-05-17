import { Typography } from "@mui/material";
import { useDarkMode } from "../hooks/contex/DarkModeContex";

const ChatObj = ({ text, img }) => {
    const { themeTatailwind } = useDarkMode();
    return (
        <div className="flex w-full md:w-8/12 h-auto gap-5">
            <img className="rounded-full w-10 h-10" src={img} alt="chatuser" />
            <Typography
                className="flex"
                component="div"
                color={themeTatailwind.primary.color}
            >
                <p className="break-words">{text}</p>
            </Typography>
        </div>
    );
};

export default ChatObj;
