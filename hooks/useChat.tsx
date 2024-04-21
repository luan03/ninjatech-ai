import { useState, useCallback } from "react";
import EventSource from "react-native-sse";

export const useChat = () => {

    const [conversations, setConversations] = useState([]);
    const [aiMessage, setAiMessage] = useState('');
    const [userMessage, setUserMessage] = useState('');

    const OpenAIToken = process.env.EXPO_PUBLIC_OPENAI_KEY;
    const API_URL = process.env.EXPO_PUBLIC_API_URL;

    const handleNewMessage = useCallback(async () => {

        if (userMessage === '') {
            return;
        }

        // This package was essential to work with SSE and support stream because 
        // a native implementation is not yet done by most libraries out there
        const es = new EventSource(
            API_URL,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${OpenAIToken}`,
                },
                method: "POST",
                body: JSON.stringify({
                    model: "gpt-3.5-turbo-0125",
                    messages: [
                        {
                            role: "system",
                            content: "You are a helpful assistant.",
                        },
                        {
                            role: "user",
                            content: userMessage,
                        },
                    ],
                    max_tokens: 600,
                    n: 1,
                    temperature: 0.7,
                    stream: true,
                }),
                pollingInterval: 0,
            }
        );

        es.addEventListener("open", () => {
            setConversations((prev) => {
                return [
                    ...prev,
                    {
                        message: userMessage,
                        isHuman: true,
                    },
                ];
            });

            setUserMessage("");
        });

        es.addEventListener("message", (event) => {
            if (event.data !== "[DONE]") {
                const data = JSON.parse(event.data);

                if (data.choices[0].delta.content !== undefined) {
                    setAiMessage((text) => text + data.choices[0].delta.content);
                }
            }
        });

        setConversations((prev) => {
            return [
                ...prev,
                {
                    message: aiMessage,
                    isHuman: false,
                },
            ];
        });

        setAiMessage("");

        return () => {
            es.removeAllEventListeners();
            es.close();
        };

    }, [userMessage]);

    return { handleNewMessage, conversations, aiMessage, userMessage, setUserMessage }
}