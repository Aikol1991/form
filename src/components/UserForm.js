import React, { useState } from 'react';

const UserForm = ({ addUser, updateUser, editingUser, setEditingUser }) => {
const [name, setName] = useState(editingUser ? editingUser.name : '');
const [lastname, setLastname] = useState(editingUser ? editingUser.lastname : '');
const [phone, setPhone] = useState(editingUser ? editingUser.phone : '');
const [year, setYear] = useState(editingUser ? editingUser.year : '');
const [gender, setGender] = useState(editingUser ? editingUser.gender : '');
  const [phoneError, setPhoneError] = useState('');
  const [yearError, setYearError] = useState('');




  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    }
    if (id === "lastname") {
      setLastname(value);
    }
    if (id === "phone") {
      setPhone(value);
      validatePhone(value);
    }
    if (id === "year") {
      setYear(value);
      validateYear(value);
    }
    if (id === "gender") {
      setGender(value);
    }
  }

  const validatePhone = (phoneValue) => {
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneValue)) {
      setPhoneError("Please enter a valid 10-digit phone number.");
    } else {
      setPhoneError("");
    }
  }

  const validateYear = (yearValue) => {
    const currentYear = new Date().getFullYear();
    if (yearValue < 1900 || yearValue > currentYear) {
      setYearError(`Please enter a valid year between 1900 and ${currentYear}.`);
    } else {
      setYearError("");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phoneError || yearError) {
      alert("Please fill in the form!")
    } else {
      if (editingUser) {
        updateUser(editingUser.index, { name, lastname, phone, year, gender });
        setEditingUser(null);
      } else {
        addUser({ name, lastname, phone, year, gender });
      }

      setName('');
      setLastname('');
      setPhone('');
      setYear('');
      setGender('');
      setPhoneError('');
      setYearError('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
        <label> Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleChange}
          placeholder="Name"
        />
        <label> Lastname: </label>
        <input
          type="text"
          id="lastname"
          value={lastname}
          onChange={handleChange}
          placeholder="lastname"
        />
        <label> Phone number: </label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        {phoneError && <p className="error">{phoneError}</p>}
        <label> Year of birth: </label>
        <input
          type="number"
          id="year"
          value={year}
          onChange={handleChange}
          placeholder="Year of birth"
        />
        {yearError && <p className="error">{yearError}</p>}
        <label> Gender: </label>
        <input
          type="text"
          id="gender"
          value={gender}
          onChange={handleChange}
          placeholder="Gender"
        />
        <button type="submit">Send</button>
    </form>
  );
}

export default UserForm;
