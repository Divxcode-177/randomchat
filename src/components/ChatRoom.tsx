import React from 'react';
import { Send, Users } from 'lucide-react';
import { useChat } from '../hooks/useChat';

export function ChatRoom() {
  const {
    messages,
    currentMessage,
    setCurrentMessage,
    sendMessage,
    onlineUsers,
    partner,
    findNewPartner,
  } = useChat();

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-indigo-600 text-white p-4 shadow-lg">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Random Chat</h1>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>{onlineUsers} online</span>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 max-w-4xl w-full mx-auto p-4 overflow-hidden flex flex-col">
        {partner ? (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto mb-4 space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.isOwn ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      msg.isOwn
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white text-gray-800'
                    } shadow-sm`}
                  >
                    <p>{msg.text}</p>
                    <span className="text-xs opacity-75 mt-1 block">
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={sendMessage}
              className="flex gap-2 bg-white p-2 rounded-lg shadow-sm"
            >
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Find Someone to Chat With
              </h2>
              <button
                onClick={findNewPartner}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Start Chatting
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}