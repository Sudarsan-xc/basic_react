//import { Button, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Contact = () => {
  const submitForm = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const message = document.getElementById("message").value;
    if (name && gender && message) {
      document.getElementById("thankYou").innerHTML =
        "Thanking you for Contacting us";
      setTimeout(() => {
        document.getElementById("thankYou").innerHTML = "";
      }, 3000);
    }
  };

  const resetForm = () => {
    document.getElementById("contactForm").reset();
  };

  return (
    <div className="container">
      <h1>Contact form</h1>
      <Form id="contactForm" onSubmit={(e) => submitForm(e)}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Name"
            id="name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Gender</Form.Label>
          <Form.select required id="gender">
            <option value="">Select one</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.select>

          {/* <Form.Control type="option" id="gender" required /> */}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <textarea rows={6} required id="message"></textarea>
        </Form.Group>
        <textarea
          rows={3}
          required
          placeholder="Enter your message"
          id="message"
        ></textarea>
        <div className="row">
          <div className="col-md-3">
            <div className="d-flex justify-content-around align-item-start"></div>
          </div>
        </div>
        <button type="submit">Submit</button>
        <button onClick={resetForm}>Reset</button>
      </Form>
      <div id="thankYou"></div>
    </div>
  );
};

export default Contact;
