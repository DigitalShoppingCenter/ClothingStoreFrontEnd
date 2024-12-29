import React, { useState } from "react";
import Notification from '../Styling/notificationdropdown.css';
import { MdOutlineNotificationsActive } from "react-icons/md";

const NotificationDropdown = ({ isLoggedIn }) => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New user signed up", isRead: false, time: "2 mins ago" },
    { id: 2, message: "Order #123 approved", isRead: true, time: "10 mins ago" },
    { id: 3, message: "Price change proposal submitted", isRead: false, time: "1 hour ago" },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, isRead: true }))
    );
  };

  if (isLoggedIn) {
    return null; // Don't render anything if the user is not logged in
  }

  return (
    <div className="notification-container">
  <MdOutlineNotificationsActive
    id="notification-icon"
    onClick={toggleDropdown} // Add click event directly to the icon
  />
  {notifications.some((n) => !n.isRead) && (
    <span className="notification-badge">
      {notifications.filter((n) => !n.isRead).length}
    </span>
  )}

  {isOpen && (
    <div className="notification-dropdown">
      <div className="notification-header">
        <span>Notifications</span>
        <button onClick={markAllAsRead} className="mark-all-read">
          Mark all as read
        </button>
      </div>
      <div className="notification-list">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`notification-item ${
                notification.isRead ? "read" : "unread"
              }`}
            >
              <p>{notification.message}</p>
              <span className="notification-time">{notification.time}</span>
            </div>
          ))
        ) : (
          <div className="no-notifications">No notifications</div>
        )}
      </div>
    </div>
  )}
</div>
  )
}

export default NotificationDropdown;
