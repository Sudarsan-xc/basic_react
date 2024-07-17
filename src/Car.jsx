const Car = ({ num1, num2 }) => {
  //js logic
  const sum = num1 + num1;
  const shoot = (msg) => {
    alert(msg);
  };
  //html inside return tag
  return (
    <>
      <h2>i am sudarsan {sum} </h2>
      <input placeholder="Enter Scorer" />
      <button onClick={() => shoot("Goal.....")}>Shoot the ball</button>
    </>
  );
};
export default Car;
