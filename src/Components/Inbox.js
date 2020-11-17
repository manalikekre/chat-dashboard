import React, { useState } from "react";

function Inbox() {
  let [category, setCategory] = useState([
    {
      display: "All Messages",
      count: 21,
      id: "all_messages",
    },
    {
      display: "Unread",
      count: 89,
      id: "unread",
    },
    {
      display: "Important",
      count: 6,
      id: "important",
    },
    {
      display: "Drafts",
      count: 27,
      id: "drafts",
    },
  ]);
  let [groups, setGroups] = useState([
    {
      display: "Teams",
      count: 4,
      id: "teams",
    },
    {
      display: "Groups",
      count: 3,
      id: "groups",
    },
    {
      display: "Channels",
      count: 18,
      id: "channels",
    },
    {
      display: "Locations",
      count: 0,
      id: "locations",
    },
    {
      display: "Media",
      count: 120,
      id: "media",
    },
  ]);

  let [selected, setSelected] = useState("unread");

  function onInboxClick(event, id) {
    event.preventDefault();
    setSelected(id);
  }

  return (
    <div className="inbox">
      <div className="title">Inbox</div>
      <div className="add-contact"></div>
      <div className="menu">
        {category.map((item) => (
          <div
            key={item.id}
            className={`menu-item ${item.id === selected ? "selected" : ""}`}
            onClick={(event) => onInboxClick(event, item.id)}
          >
            <div className="menu-category">{item.display} </div>
            <div className="count">{item.count > 0 ? item.count : ""}</div>
          </div>
        ))}
      </div>
      <div className="divider"></div>
      <div className="menu">
        {groups.map((item, index) => (
          <div
            key={item.id}
            className={`menu-item ${item.id === selected ? "selected" : ""}`}
            onClick={(event) => onInboxClick(event, item.id)}
          >
            <div className="menu-category">{item.display} </div>
            <div className="count">{item.count > 0 ? item.count : ""}</div>
          </div>
        ))}
      </div>
      <div className="divider"></div>
      <div className="menu">
        <div className="menu-item">
          <div className="menu-category">Help </div>
        </div>
        <div className="menu-item">
          <div className="menu-category">Settings </div>
        </div>
      </div>
      {/* <div className="gradient-border"></div> */}
    </div>
  );
}

export default Inbox;
