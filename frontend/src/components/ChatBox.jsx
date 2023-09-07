import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "../chatbot/config"
import ActionProvider from "../chatbot/ActionProvider";
import MessageParser from "../chatbot/MessageParser"
import 'react-chatbot-kit/build/main.css'

const ChatBox = () => {
  return (
    <div className="chatBox">
        <div style={{ maxWidth: "300px" }}></div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default ChatBox;