import React, { useState } from "react";

function Sidebar() {
  let [messengers, setMessenger] = useState([
    {
      id: "whatsapp",
    },
    {
      id: "facebook",
    },
    {
      id: "viber",
    },
    {
      id: "skype",
    },
    {
      id: "nimbuzz",
    },
  ]);
  let [selected, setSelected] = useState("facebook");

  function onMessgClick(event, id) {
    event.preventDefault();
    setSelected(id);
  }

  return (
    <div className="sidebar">
      <div className="hamburger"></div>
      <div className="messenger-list">
        {messengers.map((item) => {
          return (
            <div
              className={`messenger ${item.id === selected ? "selected" : ""}`}
              key={item.id}
              onClick={(event) => onMessgClick(event, item.id)}
            >
              <div className={`messenger-icon ${item.id}`}></div>
            </div>
          );
        })}
      </div>
      {/* <div className="gradient-border"></div> */}
    </div>
  );
}

export default Sidebar;
