import React, { useState } from "react";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = getResponse(message);
    setMessages([
      ...messages,
      { text: message, sender: "Moi" },
      { text: response, sender: "FitBot" },
    ]);
    setMessage("");
  };

  const getResponse = (question) => {
    const questionLower = question.toLowerCase();

    if (
      questionLower.includes("bonjour") ||
      questionLower.includes("hello") ||
      questionLower.includes("hey") ||
      questionLower.includes("yo") ||
      questionLower.includes("salut")
    ) {
      return "Bonjour, je suis BotFit et je peux répondre à certaines de vos questions!";
    } else if (
      questionLower.includes("horaire") ||
      questionLower.includes("salle") ||
      questionLower.includes("horraire") ||
      questionLower.includes("heure")
    ) {
      return "Lundi, mardi, mercredi, de 9h à 18h.";
    } else if (
      questionLower.includes("où") &&
      questionLower.includes("salle") &&
      questionLower.includes("lieu")
    ) {
      return "L'adresse est 2 rue du pont.";
    } else if (
      questionLower.includes("contact") ||
      questionLower.includes("téléphone") ||
      questionLower.includes("messenger") ||
      questionLower.includes("contacter")
    ) {
      return "Vous pouvez me contacter au 06 00 00 00 00, par mail à example@example.com ou directement sur notre page Messenger : URL.";
    } else {
      return "Désolé, je ne peux pas vous aider avec cette question.";
    }
  };

  return (
    <div>
      <h1>Chatbot</h1>
      <div className="chat-container">
        {messages.map((msg, index) => (
          <p key={index} className={msg.sender}>
            {msg.sender}: {msg.text}
          </p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Posez votre question"
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Chat;
