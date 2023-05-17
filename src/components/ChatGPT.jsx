import { useState, useRef } from "react";
import useFetch from "../hooks/useFetch";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import {
    PROXY_CORS_REST_API_URL,
    PROXY_CORS_REST_API_PASS,
} from "../helpers/configs";
import ChatObj from "./ChatObj";
import randomId from "../helpers/randomId";

const ChatGPT = () => {
    const TempId = useRef(randomId(5));

    const IAimg = "https://i.imgur.com/gF4XX0g.png";
    const UserImg = "https://i.imgur.com/hvZk4Yp.png";

    const [Response, setResponse] = useState({
        messages: [
            {
                text: "¡Hola! Soy un chatbot construido utilizando la tecnología GPT-3.5 de OpenAI, que es una inteligencia artificial de procesamiento del lenguaje natural (NLP) basada en redes neuronales profundas. Específicamente, GPT-3.5 utiliza una arquitectura de red neuronal llamada Transformer.",
                img: IAimg,
            },
        ],
    });
    const [chatWrite, setChatWrite] = useState("");
    const [errorChat, setErrorChat] = useState(false);

    // eslint-disable-next-line
    const [loading, error, succes, bodyResponse] = useFetch(
        `${PROXY_CORS_REST_API_URL}`,
        "POST",
        {
            "Content-Type": "application/json",
        }
    );

    const getChatResponse = async (prompt, msjObj) => {
        let bodyQuery = {
            prompt: prompt,
            pass: PROXY_CORS_REST_API_PASS,
            user_id: TempId.current,
        };

        let fetchResponse = await bodyResponse(bodyQuery);

        if (fetchResponse.status === 200) {
            let message = await fetchResponse.text();
            let clone = JSON.stringify(msjObj);
            let newMsj = JSON.parse(clone);
            newMsj.messages.push({ text: message, img: IAimg });
            console.log(newMsj);
            setResponse(newMsj);
        }
    };

    const addClientMessage = async (message) => {
        if (!checkChatNotEmpty()) return;
        let messagesClone = JSON.stringify(Response);
        let newMessages = JSON.parse(messagesClone);
        newMessages.messages.push({ text: message, img: UserImg });
        setResponse(newMessages);
        getChatResponse(message, newMessages);
        setChatWrite("");
    };

    const checkChatNotEmpty = () => {
        let clearChat = chatWrite.replace(/\s/g, "");
        if (clearChat.length === 0) {
            setErrorChat(true);
            return false;
        }
        setErrorChat(false);
        return true;
    };
    return (
        <div className="flex flex-col border-2 border-orange-600 rounded-lg w-full p-3 md:p-8">
            <div className="flex flex-col gap-5">
                {Response.messages.map((chat, index) => {
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
                            error={errorChat}
                            size="small"
                            id="outlined-required"
                            label="Pregunta"
                            color="warning"
                            multiline
                            InputProps={{
                                readOnly: loading,
                            }}
                            value={chatWrite}
                            onChange={(e) => setChatWrite(e.target.value)}
                            maxRows={5}
                        />
                    </div>
                    <div>
                        <LoadingButton
                            variant="contained"
                            onClick={() => addClientMessage(chatWrite)}
                            endIcon={<SendIcon />}
                            loading={loading}
                        >
                            Enviar
                        </LoadingButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatGPT;
