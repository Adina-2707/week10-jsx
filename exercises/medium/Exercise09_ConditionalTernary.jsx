function Status({ isOnline }) {
  return (
    <div>
      {isOnline ? <p>Online</p> : <p>Offline</p>}
    </div>
  );
}

export default Status;
