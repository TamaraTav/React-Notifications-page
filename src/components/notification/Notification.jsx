import "./notification.css";
import PropTypes from "prop-types";

export default function Notification({
  notification,
  notifications,
  setNotifications,
}) {
  const markAsRead = () => {
    const newNotifications = notifications.map((currentMessage) => {
      if (notification.id === currentMessage.id) {
        return {
          ...currentMessage,
          isRead: true,
        };
      }
      return currentMessage;
    });

    setNotifications(newNotifications);
  };

  return (
    <div
      className={`notification ${!notification.isRead ? "unread" : ""}`}
      onClick={markAsRead}
    >
      <img
        src={notification.profilePic}
        alt={`${notification.username} profile`}
        className="profile-pic"
      />

      <div className="notification-content">
        <p className="notification-text">
          <span className="username">{notification.username}</span>
          {notification.action}
          {notification.post && (
            <span className="post-title"> {notification.post}</span>
          )}
          {notification.groupName && (
            <span className="group-name"> {notification.groupName}</span>
          )}
        </p>

        <p className="timestamp">{notification.time}</p>

        {notification.text && (
          <div className="message-content">{notification.text}</div>
        )}
      </div>

      {notification.userPicture && (
        <img
          src={notification.userPicture}
          alt="User content"
          className="user-picture"
        />
      )}

      {!notification.isRead && <div className="unread-dot"></div>}
    </div>
  );
}

Notification.propTypes = {
  notification: PropTypes.shape({
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
  }).isRequired,
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
