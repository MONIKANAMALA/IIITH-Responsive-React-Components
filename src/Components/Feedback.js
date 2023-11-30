import React, { useState } from 'react';
import '../Styles/Feedback.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const RegistrationForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <section className="custom-registration-form" style={{ backgroundColor: "#f0f0f0", padding: "20px" }}>
      <center>
        <h1 style={{ marginTop: "10px", padding: "20px", color: "rgb(44, 82, 85)" }}>Feedback 🗯️</h1>
      </center>
      <form action="#" className="custom-form">
        {/* Existing fields */}
        <div className="custom-input-box">
          <h5><label>Full Name</label></h5>
          <input type="text" placeholder="Enter full name" required />
        </div>

        <div className="custom-input-box">
          <h5><label>Email Address</label></h5>
          <input type="text" placeholder="Enter email address" required />
        </div>

        <div className="custom-column">
          <div className="custom-input-box">
            <h5><label>Phone Number</label></h5>
            <input type="text" placeholder="Enter phone number" required />
          </div>
          <div className="custom-input-box">
            <h5><label>Date of Birth</label></h5>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              placeholderText="Select date"
              dateFormat="dd/MM/yyyy"
              showYearDropdown
              scrollableYearDropdown
            />
          </div>
        </div>

        <div className="custom-gender-box">
          <h5>Gender</h5>
          <div className="custom-gender-option">
            <div className="custom-gender">
              <input type="radio" id="custom-check-male" name="custom-gender" defaultChecked />{' '}
              <label htmlFor="custom-check-male">Male</label>
            </div>
            <div className="custom-gender">
              <input type="radio" id="custom-check-female" name="custom-gender" />{' '}
              <label htmlFor="custom-check-female">Female</label>
            </div>
            <div className="custom-gender">
              <input type="radio" id="custom-check-other" name="custom-gender" />{' '}
              <label htmlFor="custom-check-other">Prefer not to say</label>
            </div>
          </div>
        </div>
        <div className="custom-feedback-fields">
          <h5>What kind of genres do you prefer?</h5>

          <div className="custom-checkboxes">
            <label>
              <input type="checkbox" />
              {' '}
              Rock
            </label>
            <label>
              <input type="checkbox" />
              {' '}
              Pop
            </label>
            <label>
              <input type="checkbox" />
              {' '}
              Melody
            </label>
            <label>
              <input type="checkbox" />
              {' '}
              Folk
            </label>
            <label>
              <input type="checkbox" />
              {' '}
              Hip-Hop / Rap
            </label>
          </div>

          <div className="custom-dropdown-box">
            <h5><label>Rate the App</label></h5>
            <select>
              <option hidden>Select rating</option>
              <option>⭐</option>
              <option>⭐⭐</option>
              <option>⭐⭐⭐</option>
              <option>⭐⭐⭐⭐</option>
              <option>⭐⭐⭐⭐⭐</option>
            </select>
          </div>

          <div className="custom-radio-buttons">
            <h5>Satisfaction Level</h5>
            <label>
              <input type="radio" name="custom-satisfaction" />
              {' '}
              Highly Satisfied
            </label>
            <label>
              <input type="radio" name="custom-satisfaction" />
              {' '}
              Satisfied
            </label>
            <label>
              <input type="radio" name="custom-satisfaction" />
              {' '}
              Neutral
            </label>
            <label>
              <input type="radio" name="custom-satisfaction" />
              {' '}
              Unsatisfied
            </label>
            <label>
              <input type="radio" name="custom-satisfaction" />
              {' '}
              Highly Unsatisfied
            </label>
          </div>

          {/* Comment Box */}
          <div className="custom-comment-box">
            <h5>Additional Comments</h5>
            <textarea placeholder="Type your comments here"></textarea>
          </div>
        </div>

        <button className="custom-submit-button" type="submit">Submit</button>
      </form>
    </section>
  );
};
export default RegistrationForm;
