import { useState } from "react";
import useFetch from "../hooks/useFetch";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import {
    PROXY_CORS_REST_API_URL,
    PROXY_CORS_REST_API_PASS,
} from "../helpers/configs";
import { RANDOM_ID } from "../helpers/randomId";
import ChatObj from "./ChatObj";
import AlertModal from "./AlertModal";
import system from "../static/img/system.png";
import user from "../static/img/user.png";

const ChatGPT = () => {
    const [Response, setResponse] = useState({
        messages: [
            {
                text: "¡Hola! Soy un chatbot construido utilizando la tecnología GPT-3.5 de OpenAI, que es una inteligencia artificial de procesamiento del lenguaje natural (NLP) basada en redes neuronales profundas. Específicamente, GPT-3.5 utiliza una arquitectura de red neuronal llamada Transformer.",
                img: system,
            },
        ],
    });
    const [chatWrite, setChatWrite] = useState("");
    const [errorChat, setErrorChat] = useState(false);

    // eslint-disable-next-line
    const [loading, error, succes, bodyResponse, setError] = useFetch(
        `${PROXY_CORS_REST_API_URL}`,
        "POST",
        {
            "Content-Type": "application/json",
        }
    );

    const getChatResponse = async (prompt, msjObj) => {
        const bodyQuery = {
            prompt: prompt,
            pass: PROXY_CORS_REST_API_PASS,
            user_id: RANDOM_ID,
        };

        const fetchResponse = await bodyResponse(bodyQuery);
        const clone = JSON.stringify(msjObj);
        const newMsj = JSON.parse(clone);
        if (fetchResponse.status === 200) {
            const message = await fetchResponse.text();
            newMsj.messages.push({ text: message, img: system });
            setResponse(newMsj);
            setChatWrite("");
        } else {
            newMsj.messages.pop();
            setResponse(newMsj);
        }
    };

    const addClientMessage = async (message) => {
        if (!checkChatNotEmpty()) return;
        const messagesClone = JSON.stringify(Response);
        const newMessages = JSON.parse(messagesClone);
        newMessages.messages.push({ text: message, img: user });
        setResponse(newMessages);
        getChatResponse(message, newMessages);
    };

    const checkChatNotEmpty = () => {
        const clearChat = chatWrite.replace(/\s/g, "");
        if (clearChat.length === 0) {
            setErrorChat(true);
            return false;
        }
        setErrorChat(false);
        return true;
    };

    const handleKeyEnter = (event) => {
        if (event.key === "Enter") {
            addClientMessage(chatWrite);
        }
    };

    return (
        <>
            <AlertModal
                title="Error al enviar el mensaje"
                description="Por favor envie el mensaje nuevamente."
                handleClose={() => setError(false)}
                open={error}
            />
            <div className="flex flex-col border-2 border-orange-600 rounded-lg w-full p-3 md:p-8">
                <div className="flex flex-col gap-5">
                    {Response.messages.map((chat, index) => {
                        return (
                            <ChatObj
                                key={index}
                                text={chat.text}
                                img={chat.img}
                            />
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
                                onKeyDown={(e) => {
                                    handleKeyEnter(e);
                                }}
                                maxRows={8}
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
        </>
    );
};

export default ChatGPT;
