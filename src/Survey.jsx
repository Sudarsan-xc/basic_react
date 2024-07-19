import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-date-picker";
//import "react-date-picker/dist/DatePicker.css";

const Survey = () => {
  const [age, setAge] = useState(50);
  const [drinks, setDrinks] = useState([]);
  const [birthYear, setBirthYear] = useState(new Date());
  const [thankYouMessage, setThankYouMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    if (age && drinks.length && birthYear) {
      setThankYouMessage("Thank you for completing the survey!");
      setTimeout(() => {
        setThankYouMessage("");
      }, 3000);
    }
  };

  const resetForm = () => {
    setAge(50);
    setDrinks([]);
    setBirthYear(new Date());
    setThankYouMessage("");
  };

  const handleDrinkChange = (e) => {
    const value = e.target.value;
    setDrinks((prev) =>
      e.target.checked
        ? [...prev, value]
        : prev.filter((drink) => drink !== value)
    );
  };

  return (
    <div className="container mt-5">
      <h1>Survey Form</h1>
      <form
        id="surveyForm"
        onSubmit={submitForm}
        className="p-3 border rounded"
      >
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            How old are you?
          </label>
          <input
            type="range"
            id="age"
            className="form-range"
            min="0"
            max="100"
            step="1"
            value={age}
            required
            onChange={(e) => setAge(e.target.value)}
          />
          <span id="ageDisplay">{age}</span>
        </div>
        <div className="mb-3">
          <label className="form-label">What do you like to drink?</label>
          <div className="form-check">
            <input
              type="checkbox"
              id="tea"
              name="drink"
              value="tea"
              className="form-check-input"
              checked={drinks.includes("tea")}
              onChange={handleDrinkChange}
            />
            <label htmlFor="tea" className="form-check-label">
              Tea
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              id="coffee"
              name="drink"
              value="coffee"
              className="form-check-input"
              checked={drinks.includes("coffee")}
              onChange={handleDrinkChange}
            />
            <label htmlFor="coffee" className="form-check-label">
              Coffee
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              id="coldDrink"
              name="drink"
              value="coldDrink"
              className="form-check-input"
              checked={drinks.includes("coldDrink")}
              onChange={handleDrinkChange}
            />
            <label htmlFor="coldDrink" className="form-check-label">
              Cold Drink
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="birthYear" className="form-label">
            What year were you born?
          </label>
          <DatePicker
            id="birthYear"
            onChange={setBirthYear}
            value={birthYear}
            format="y"
          />
        </div>
        <button type="submit" className="btn btn-primary me-2">
          Submit
        </button>
        <button
          type="button"
          className="btn btn-primary me-2"
          onClick={resetForm}
        >
          Reset
        </button>
      </form>
      {thankYouMessage && (
        <div className="alert alert-success mt-3" role="alert">
          {thankYouMessage}
        </div>
      )}
    </div>
  );
};

export default Survey;

// import 'react-date-picker/dist/DatePicker.css';
// import 'react-calendar/dist/Calendar.css';

// import { useState } from "react";
// import DatePicker from "react-date-picker";

// const Survey=()=>{
//     const [value, onChange] = useState(new Date());
//   return (
//     <DatePicker onChange={onChange} value={value} format="y" />
//   );

// };

// export default Survey;
