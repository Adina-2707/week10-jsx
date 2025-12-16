function Access({ isAdmin }) {
  return (
    <div>
      {isAdmin ? <p>Welcome, admin!</p> : <p>Access denied</p>}
    </div>
  );
}

export default Access;
