const students = ["Ali", "Aida", "Nurlan"];

function StudentList() {
  return React.createElement(
    'ul',
    null,
    students.map((name, index) =>
      React.createElement('li', { key: index }, name)
    )
  );
}

export default StudentList;
