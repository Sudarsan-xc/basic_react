import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const StateHook = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    gender: "",
    message: "",
    age: 0,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactForm);
    setSubmitted(true);
  };

  const handleReset = () => {
    setContactForm({
      name: "",
      gender: "",
      message: "",
      age: 0,
    });
    setSubmitted(false);
  };

  return (
    <div className="container mt-5">
      {submitted ? (
        <div className="alert alert-success" role="alert">
          Thank you for contacting us!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-3 border rounded">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={contactForm.name}
              onChange={(e) =>
                setContactForm((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
            />
          </div>

          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              id="gender"
              className="form-select"
              value={contactForm.gender}
              onChange={(e) =>
                setContactForm((prev) => ({
                  ...prev,
                  gender: e.target.value,
                }))
              }
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <input
              type="text"
              className="form-control"
              id="message"
              placeholder="Enter message"
              value={contactForm.message}
              onChange={(e) =>
                setContactForm((prev) => ({
                  ...prev,
                  message: e.target.value,
                }))
              }
            />
          </div>

          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              id="age"
              placeholder="Enter age"
              value={contactForm.age}
              onChange={(e) =>
                setContactForm((prev) => ({
                  ...prev,
                  age: parseInt(e.target.value, 10),
                }))
              }
            />
          </div>

          <button type="submit" className="btn btn-primary me-2">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-primary me-2"
            onClick={handleReset}
          >
            Reset
          </button>
        </form>
      )}
    </div>
  );
};

export default StateHook;
