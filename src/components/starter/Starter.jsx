import PropTypes from "prop-types";
import "./starter.css";

export default function Starter({ notifications, setNotifications }) {
  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => {
      return { ...notification, isRead: true };
    });

    setNotifications(updatedNotifications);
  };

  // Derived State
  const counter = notifications.filter(
    (notification) => !notification.isRead
  ).length;

  return (
    <div className="starter-container">
      <div className="starter-header">
        <h1 className="starter-title">
          Notifications
          {counter > 0 && <span className="unread-badge">{counter}</span>}
        </h1>
        <p className="mark-all-read" onClick={markAllAsRead}>
          Mark all as read
        </p>
      </div>
    </div>
  );
}

Starter.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profilePic: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      action: PropTypes.string.isRequired,
      post: PropTypes.string,
      groupName: PropTypes.string,
      time: PropTypes.string.isRequired,
      text: PropTypes.string,
      userPicture: PropTypes.string,
      isRead: PropTypes.bool.isRequired,
    })
  ).isRequired,
  setNotifications: PropTypes.func.isRequired,
};
