const a = 2;
const b = 3;

function Example() {
  return (
    <div>
      <p>{a + b}</p>
      <p>{a > b ? "a is bigger" : "b is bigger or equal"}</p>
      <p>{false && "This text"}</p>
    </div>
  );
}

export default Example;
