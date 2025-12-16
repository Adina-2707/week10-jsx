function Clicker() {
  function handleClick() {
    console.log("Clicked!");
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

export default Clicker;
