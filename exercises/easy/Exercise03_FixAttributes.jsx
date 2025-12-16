function Header() {
  function handleClick() {
    alert('Hi');
  }

  return (
    <div className="header">
      <h1 onClick={handleClick}>Click me</h1>
    </div>
  );
}

export default Header;
