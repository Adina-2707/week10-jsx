function StudentSelector() {
  function handleSelect(id) {
    console.log("Selected id:", id);
  }

  return (
    <button onClick={() => handleSelect(5)}>
      Select student
    </button>
  );
}

export default StudentSelector;
