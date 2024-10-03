// MainContent.js
import React from "react";

function MainContent() {
  return (
    <div className="main-content">
      <div className="lead-info">
        <h2>LE-010071</h2>
        <p>Mamta Naik</p>
        <div className="status-buttons">
          <button>New</button>
          <button>Contacted</button>
          <button>Nurturing</button>
          <button>Qualified</button>
          <button>Unqualified</button>
        </div>
      </div>

      <div className="tabs-section">
        <ul>
          <li>Basic Details</li>
          <li>Account Details</li>
          <li>Lead Deals</li>
          <li>Team</li>
          <li>Other Contacts</li>
        </ul>
      </div>

      <div className="activity-layout">
        <div className="activity-section">
          <h3>Activity</h3>
          <div>
            <button>Log a Call</button>
            <button>Email</button>
            <button>Event</button>
          </div>
          <input type="text" placeholder="Subject" />
          <input type="date" placeholder="Due Date" />
          <input type="text" placeholder="Description" />
          <button>Submit</button>
        </div>

        <div className="side-sections">
          <div className="stage-history">
            <h3>Stage History</h3>
            <ul>
              <li>Created Jiya Gopal - 09:00 AM</li>
              <li>Assigned to Aniruddh Naidu - 10:00 AM</li>
              <li>Arranged a Call - 12:00 PM</li>
              <li>Marked as Contacted - 04:00 PM</li>
            </ul>
          </div>

          <div className="upcoming-overdue">
            <h3>Upcoming & Overdue</h3>
            <ul>
              <li>Arrange a Call - 12:00 PM</li>
              <li>Follow Up Email - 02:00 PM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
