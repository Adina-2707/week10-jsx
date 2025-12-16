function StudentCard(props) {
  return (
    <div className="student-card">
      <h3>{props.name}</h3>
      <p>Group: {props.group}</p>
    </div>
  );
}

export default StudentCard;
