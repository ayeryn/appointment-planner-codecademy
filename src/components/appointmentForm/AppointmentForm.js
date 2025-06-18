import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label for="name">Name: </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <ContactPicker
        contacts={contacts}
        handleChange={(e) => {
          setContact(e.target.value);
        }}
        value=""
        name=" contact"
      />
      <label for="date">Date: </label>
      <input
        id="date"
        type="date"
        value={date}
        min={getTodayString()}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <label for="time">Time: </label>
      <input
        id="time"
        type="time"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
        }}
      />
      <button type="submit">Add Appointment</button>
    </form>
  );
};
