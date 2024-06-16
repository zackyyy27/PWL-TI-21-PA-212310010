import React, { useEffect, useMemo, useRef, useState } from "react";
import moment from "moment";
import { ButtonPrimary } from "./components/ButtonUi";
import ChatBody from "./components/ChatBody";
import { ButtonSearch } from "../components/Button";
import Sentiment from 'sentiment'; 

const MessengersUI = ({ profile, selectedChat }) => {
  const [myChat, setMyChat] = useState(selectedChat);
  const [writeChat, setWriteChat] = useState("");
  const endOfMessageRef = useRef(null);

  const scrollToBottom = () => {
    endOfMessageRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Filter kata-kata kasar
  const filterBadWords = (message) => {
    const badWords = ['fuck']; // Daftar kata kasar yang ingin diganti
    let filteredMessage = message;

    badWords.forEach(word => {
      const regex = new RegExp(word, 'gi');
      filteredMessage = filteredMessage.replace(regex, '****');
    });

    return filteredMessage;
  };

  const handleSendChat = (e) => {
    e.preventDefault();

    const filteredChat = filterBadWords(writeChat);

    const objChat = {
      id: 100,
      messages: filteredChat,
      from_id: profile.id,
      createdAt: new Date(),
    };

    setMyChat([...myChat, objChat]);
    setWriteChat("");
  };

  useEffect(() => {
    setMyChat(selectedChat);
    scrollToBottom();
  }, [selectedChat]);

  const sentiment = new Sentiment(); 

  const resultMessageData = useMemo(() => { 
    let computedData = []; 
    if (myChat.length > 0) { 
      computedData = myChat.map((msg) => { 
        const filteredMessage = filterBadWords(msg.messages); // Filter kata-kata kasar dalam pesan
        const result = sentiment.analyze(filteredMessage); 
        let sentimentLabel = 'Netral'; 
        if (result.score > 0) sentimentLabel = 'Positif'; 
        else if (result.score < 0) sentimentLabel = 'Negatif'; 
 
        return { 
          ...msg, 
          messages: filteredMessage, // Setelah difilter
          sentiment: sentimentLabel, 
          date: msg.createdAt,
          date_fmt: moment(msg.createdAt).format("YYYY-MM-DD"), 
          isOutgoing: msg.from_id === profile.id
        };
      });
    }

    return computedData;    
  }, [myChat, profile.id]);

  const EmptyChat = () => (
    <div className="info text-center">
      <h1>No Conversations</h1>
      <p>You haven't made any conversation yet, please select a user</p>
      <span className="badge badge-primary">Start a chat</span>
    </div>
  );

  const readChatToSpeech = () => {
    let speechText = "";

    if (resultMessageData.length > 0) {
      let currentSender = ""; // Variabel untuk menyimpan sender saat ini

      resultMessageData.forEach(msg => {
        if (msg.isOutgoing) {
          // Jika pengirim adalah user saat ini (profile.id), tulis "Pesan dari saya"
          speechText += `Pesan dari saya: ${msg.messages}. `;
        } else {
          // Jika pengirim bukan user saat ini, tulis "Pesan dari [Nama Pengirim]"
          if (msg.from_id !== currentSender) {
            currentSender = msg.from_id;
            speechText += `Pesan dari ${msg.from_id}: ${msg.messages}. `;
          } else {
            speechText += `${msg.messages}. `;
          }
        }
      });

      // Example using Audio HTML5 for text-to-speech (replace with your preferred TTS implementation)
      const speechSynthesis = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(speechText);
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="card my-3">
      <div className="card-header d-flex justify-content-between flex-row">
        <h5 className="card-title my-auto">
          <span className="fw-bold mb-2" style={{ color: "gray" }}>
            Chat
          </span>
        </h5>

        <div className="card-toolbar">
          <ButtonSearch setSearch={() => {}}>{/* setSearch function placeholder */}</ButtonSearch>
        </div>
      </div>

      <div className="card-body p-0">
        {resultMessageData.length > 0 ? (
          <>
            <div className="chat-message px-2 bg-light-primary" style={styleMessage.chatBox}>
              <ChatBody data={resultMessageData} />
              <div ref={endOfMessageRef}></div>
            </div>
            <div className="card-footer text-muted text-center">
                <p className="mb-0 ">Status sentimental: 
                  <span className="text-primary">Positif</span>, 
                  <span className="text-danger"> Negatif</span>, 
                  <span className="text-muted"> Netral</span></p> 
            </div>
            
            <div className="chat-send bg-light p-3">
              <form onSubmit={handleSendChat} autoComplete="off">
                <div className="d-flex justify-content-between align-items-center">
                  <input
                    type="text"
                    className="form-control me-2"
                    autoFocus={true}
                    value={writeChat}
                    onChange={(e) => setWriteChat(e.target.value)}
                  />
                  <ButtonPrimary items={{ title: "Create new chat", btn_class: "btn-icon" }}>
                    <i className="bi bi-send"></i>
                  </ButtonPrimary>
                </div>
              </form>
            </div>

            <div className="card-footer text-end">
              <button className="btn btn-primary mt-3" onClick={readChatToSpeech}>
                Read Chat
              </button>
            </div>
          </>
        ) : (
          <EmptyChat />
        )}
      </div>
    </div>
  );
};

const styleMessage = {
  chatBox: {
    minHeight: "200px",
    maxHeight: "45vh",
    overflowY: "auto",
  },
};

export default MessengersUI;
