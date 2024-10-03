// Header.js
import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="user-profile">
        <span>👤</span>
      </div>
    </div>
  );
}

export default Header;
