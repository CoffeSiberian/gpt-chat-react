import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import ChatObj from "./ChatObj";

const ChatGPT = () => {
    const IAimg = "https://i.imgur.com/gF4XX0g.png";
    const UserImg = "https://i.imgur.com/hvZk4Yp.png";

    const chats = [
        {
            text: "¡Hola! ¿Cómo puedo ayudarte?",
            img: IAimg,
        },
        {
            text: "Quiero saber si puedo comprar un producto",
            img: UserImg,
        },
    ];

    return (
        <div className="flex flex-col border-2 border-orange-600 rounded-lg w-full p-3 md:p-8">
            <div className="flex flex-col gap-5">
                {chats.map((chat, index) => {
                    return (
                        <ChatObj key={index} text={chat.text} img={chat.img} />
                    );
                })}
            </div>
            <div className="flex justify-center p-8 gap-5">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col md:flex-row">
                        <TextField
                            sx={{ width: "20rem" }}
                            required
                            size="small"
                            id="outlined-required"
                            label="Pregunta"
                            color="warning"
                            multiline
                            maxRows={5}
                        />
                    </div>
                    <div className="flex justify-center">
                        <Button variant="contained" endIcon={<SendIcon />}>
                            Enviar
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatGPT;
