import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "../components/ChatFeed";
import PeerSignin from "./PeerSignin";

const KhatEngine = () => {
  if (!localStorage.getItem("username")) return <PeerSignin />;
  return (
    <ChatEngine
      height="90vh"
      projectID="502d9cd0-975e-4246-8c57-99e109aae46c"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
};

export default KhatEngine;
