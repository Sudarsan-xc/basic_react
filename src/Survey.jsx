//qns
//how old are you? range slider
//what would you like to drink?tea,coffee,cold drink
//All of them check box
//what ayear were you born?//date

import React, { useState } from "react";
import DatePicker from "react-datepicker";

const Survey = () => {
  const [age, setAge] = useState(25);
  const [drinks, setDrinks] = useState({
    tea: false,
    coffee: false,
    coldDrink: false,
  });
  const [birthYear, setBirthYear] = useState("");

  const handleDrinkChange = (event) => {
    setDrinks({
      ...drinks,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedDrinks = Object.keys(drinks).filter((drink) => drinks[drink]);
    console.log("Age:", age);
    console.log("Drinks:", selectedDrinks);
    console.log("Birth Year:", birthYear);
  };

  return (
    <div>
      <h1>Survey Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Question 1: Age Range Slider */}
        <label htmlFor="ageRange">How old are you?</label>
        <input
          type="range"
          id="ageRange"
          name="ageRange"
          min="0"
          max="100"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <span>{age}</span>
        <br />
        <br />

        {/* Question 2: Preferred Drink */}
        <label>What would you like to drink?</label>
        <br />
        <input
          type="checkbox"
          id="tea"
          name="tea"
          checked={drinks.tea}
          onChange={handleDrinkChange}
        />
        <label htmlFor="tea">Tea</label>
        <br />
        <input
          type="checkbox"
          id="coffee"
          name="coffee"
          checked={drinks.coffee}
          onChange={handleDrinkChange}
        />
        <label htmlFor="coffee">Coffee</label>
        <br />
        <input
          type="checkbox"
          id="coldDrink"
          name="coldDrink"
          checked={drinks.coldDrink}
          onChange={handleDrinkChange}
        />
        <label htmlFor="coldDrink">Cold Drink</label>
        <br />
        <br />

        {/* Question 3: Birth Year */}
        <label htmlFor="birthYear">What year were you born?</label>
        <input
          type="date"
          id="birthYear"
          name="birthYear"
          value={birthYear}
          onChange={(e) => setBirthYear(e.target.value)}
        />
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Survey;
