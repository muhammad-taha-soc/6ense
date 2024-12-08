import React, { useState, useEffect, useRef } from 'react';
import Separator from './containers/Separator'; // Ensure you have the Separator component

export default function ChatBot() {
  // ChatBot State Management
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Welcome to 6SENSE Chat, v1.0. Ask me anything!' },
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false); // Track if bot is typing
  const [error, setError] = useState(null); // Track API error message
  const chatLogRef = useRef(null); // Reference to the chat log for auto-scrolling

  // Simulate API Call to Fetch Bot Response
  const fetchBotResponse = async (userMessage) => {
    try {
      // Simulate API call (replace this with your actual API logic)
      const response = await fetch('https://example.com/api/bot', { // Replace with your actual API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }), // Sending user message to the bot
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json(); // Assuming the response is in JSON format
      return data.reply; // Adjust this based on the actual response structure
    } catch (error) {
      throw new Error('Errore nella comunicazione con il server. Riprova più tardi.');
    }
  };

  // Handle Send Message Logic
  const handleSendMessage = async () => {
    if (!userInput.trim()) return; // Don't send empty messages

    // Add user message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', text: userInput },
    ]);
    setError(null); // Clear previous errors

    // Clear the input field
    setUserInput('');

    // Show typing indicator from bot
    setIsTyping(true);

    // Simulate bot response after some time or fetch from API
    try {
      const botResponse = await fetchBotResponse(userInput);
      setIsTyping(false); // Stop typing indicator

      // Add bot response to chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: botResponse }, // Bot response
      ]);
    } catch (err) {
      setIsTyping(false); // Stop typing indicator
      setError(err.message); // Set the error message
      // Add the error message to chat log
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: err.message }, // Error message
      ]);
    }
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <section id="tutorial" className=" py-16">
      <div className="md:text-left lg:w-[94%] w-full max-w-auto mx-auto">
        <div className="md:px-6 text-center md:text-left w-full p-6 mt-16 lg:mt-0 sm:p-0">
          {/* Separator */}
          <Separator text="Tutorial" variant="dark" />
          
          <h1 className="lg:text-6xl text-4xl mt-5 font-space font-medium">
            Interact with SAMA.
          </h1>
        </div>
        
        {/* ChatBot Component */}
        <div className="w-[500px] h-[500px] max-w-[95%] mx-auto mt-16 bg-[#F1F1F1]  rounded-lg p-4 shadow-lg">
          <div className="w-full h-full flex flex-col bg-[#F1F1F1] rounded-xl overflow-hidden">
            <div
              ref={chatLogRef}
              className="flex-grow overflow-y-auto p-4 space-y-4 scroll-smooth"
            >
              {/* Chat Log */}
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.sender === 'bot'
                        ? 'bg-[#4000FF] text-white' // Bot message background (purple)
                        : 'bg-[#1C1C1C] text-white' // User message background (light gray)
                    }`}
                  >
                    {message.sender === 'bot' && <span className="font-bold">SAMA: </span>}
                    {message.sender === 'user' && <span className="font-bold">Tu: </span>}
                    {message.text}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-3 rounded-lg text-sm bg-[#4000FF] text-white">
                    <span className="font-bold">SAMA: </span>
                    <span className="typing">Typing<span className="dots">...</span></span>
                  </div>
                </div>
              )}
            </div>
            
            {/* Input and Send Button */}
            <div className="flex items-center p-2 border-t border-[#ccc]">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Scrivi un messaggio..."
                className="flex-grow p-2 border border-[#4000FF] rounded-lg outline-none focus:ring-2 focus:ring-[#4000FF] text-black"
              />
              <button
                onClick={handleSendMessage}
                className="ml-2 p-2 bg-[#4000FF] text-white rounded-lg hover:bg-[#3500cc] focus:ring-2 focus:ring-[#3500cc]"
              >
                Invia
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for Typing Animation */}
      <style jsx>{`
        .typing .dots {
          display: inline-block;
          animation: blink 1.2s infinite;
        }

        @keyframes blink {
          0%, 20% {
            opacity: 0;
          }
          40%, 60% {
            opacity: 1;
          }
          80%, 100% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
