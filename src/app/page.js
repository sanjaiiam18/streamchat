"use client";
import Markdown from "markdown-to-jsx";
import { useChat } from "ai/react";
import "./globals.css";
import { IoMdSend } from "react-icons/io";
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="chat">
      <div className="chat-body">
        {messages.map((m) => (
          <div key={m.id} className={`message ${m.role}`}>
            <span className="role-label">{m.role === "user" ? "" : ""}</span>
            <Markdown>{m.content}</Markdown>
          </div>
        ))}
      </div>

      <div className="chat-footer">
        <form onSubmit={handleSubmit} className="input-form">
          <input
            type="text"
            className="chat-input"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
          <button type="submit" className="send-button">
            <IoMdSend color="white" />
          </button>
        </form>
      </div>
    </div>
  );
}
