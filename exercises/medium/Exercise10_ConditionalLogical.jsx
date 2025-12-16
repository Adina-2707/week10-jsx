function Notification({ count }) {
  return (
    <div>
      <h2>Notifications</h2>
      {count > 0 && <p>You have {count} new notifications</p>}
    </div>
  );
}

export default Notification;
