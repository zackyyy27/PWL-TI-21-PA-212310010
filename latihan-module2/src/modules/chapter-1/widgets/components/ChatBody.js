import React from 'react';
import moment from "moment";

const styleChatItems = {
    chatBubleItems: {
      display: "flex",
      flexDirection: "column",
    },
    chatBubleSender: {
      textAlign: "right",
      backgroundColor: "#a198a7",
      alignSelf: "flex-end"
    },
    chatBubleReceiver: {
      backgroundColor: "#a83aef",
      alignSelf: "flex-start"
    },
    chatDateContainer: {
      width: "150px",
      margin: "auto",
      textAlign: "center",
      backgroundColor: "#ffffff",
    },
    chatDate: {
      fontSize: "12px",
      color: "grey",
      fontStyle: "regular",
    },
    chatText: {
      fontSize: "15px",
      padding: "0px",
      margin: "0px",
    },
    chatTime: {
      fontSize: "12px",
    },
  };


const ChatBody = ({data}) => {
    const itsme = "Febry";
    const sortedData = data.sort((a,b)=> new Date(a.date)- new Date(b.Date));
    let nowDisplayed = false;
    let lastDateDisplayed = null;

    return (
      <div className="chat-items px-2 bg-info-subtle">
          {sortedData.map((v,index) => {
            const displayDate = !lastDateDisplayed || moment(v.date).format("YYYY-MM-DD") !==lastDateDisplayed;
            lastDateDisplayed = moment(v.date).format("YYYY-MM-DD");

            let showNow = false;
            if(!nowDisplayed && moment(v.date).isSame(new Date(), 'day')){
              nowDisplayed = true;
              showNow = true;
            }
            return(
              <div className="chat-item" style={styleChatItems.chatBubleItems} key={index}>
                {displayDate &&(
                    <div className="chat-date-container rounded-0 my-2 pb-1" style={styleChatItems.chatDateContainer}>
                      <span className="chat-date" style={styleChatItems.chatDate}>
                        {showNow ? "Today" : moment(v.date).format("DD MMMM YYYY")}
                      </span>
                    </div>
                )}
                <div className="chat text-white rounded-0 my-1 pb-1 px-3 mb-3" style={((v.from === itsme)?  styleChatItems.chatBubleSender : styleChatItems.chatBubleReceiver)}>
                    <span className="me-3" style={styleChatItems.chatText}>{v.message}</span>
                    <span className="chat-time" style={styleChatItems.chatTime}>
                      {moment(v.date).format("HH:mm")}
                    </span>
                </div>
              </div>
            );
          })}
      </div>
    );
}

export default ChatBody;