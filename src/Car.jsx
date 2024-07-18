const Garage = () => {
  const cars = ["Audi", "BMW", "Swift"];
  return (
    <>
      {cars.length > 0 &&
        cars.map((car, index) => <Car key={index} brand={car} />)}
    </>
  );
};
const Car = ({ brand }) => {
  return <div>I an {brand}car</div>;
};
export default Garage;
