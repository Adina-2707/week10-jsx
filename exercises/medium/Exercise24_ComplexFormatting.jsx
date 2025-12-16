function Dashboard({ user, notifications }) {
  return (
    <div>
      <h1>{user.name}'s Dashboard</h1>
      {notifications.length > 0 && (
        <p>You have {notifications.length} new notifications.</p>
      )}
    </div>
  );
}

export default Dashboard;
