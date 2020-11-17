import React, { useState } from "react";

function FriendsList() {
  let [selected, setSelected] = useState(3);
  let [list, setList] = useState([
    {
      isOnline: true,
      name: "Matt Thompson",
      preview: "Thanks again you have been...",
      time: "5 min",
      id: 1,
    },
    {
      isOnline: false,
      name: "Claire Sharwood",
      preview: "My selfie game is lacking can...",
      time: "10 min",
      id: 2,
    },
    {
      isOnline: false,
      name: "Kristen Mckellar",
      preview: "Where is the nearest place to...",
      time: "2 min",
      id: 3,
    },
    {
      isOnline: true,
      name: "Shaun Gardner",
      preview: "Ok that sounds perfect...",
      time: "30 min",
      id: 4,
    },
    {
      isOnline: true,
      name: "Mace Windu",
      preview: "Protect tge senator at...",
      time: "38 min",
      id: 5,
    },
    {
      isOnline: false,
      name: "Kayne West",
      preview: "So tell the voice inside your...",
      time: "49 min",
      id: 6,
    },
  ]);

  function onSelect(event, id) {
    event.preventDefault();
    setSelected(id);
  }
  return (
    <div className="friends-list">
      <div className="search-box">
        <div className="search-icon"></div>
        <div class="search-text-box">
          <input
            className="search-field"
            type="text"
            placeholder="Search"
          ></input>
        </div>
      </div>
      <div className="divider"></div>
      <div className="friends-chat-list">
        {list.map((item) => {
          return (
            <div
              className="friend-area"
              key={item.id}
              onClick={(event) => onSelect(event, item.id)}
            >
              {item.id == selected ? <div className="selected"></div> : ""}
              <div className="content">
                <div className={`${item.isOnline ? "online" : ""}`}></div>
                <div className={`${item.id} friend-dp`}></div>
                <div className="friend-preview">
                  <div className="line-one">
                    <div className="name">{item.name}</div>
                    <div className="more"></div>
                  </div>
                  <div className="line-one">
                    <div className="message">{item.preview}</div>{" "}
                    <div className="time">{item.time}</div>
                  </div>
                </div>
              </div>
              <div className="divider"></div>
            </div>
          );
        })}
      </div>

      {/* <div className="gradient-border"></div> */}
    </div>
  );
}

export default FriendsList;
