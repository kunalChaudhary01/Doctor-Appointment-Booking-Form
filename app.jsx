import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    gender: '',
    date: '',
    doctor: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div style={{ maxWidth: 500, margin: "2rem auto", padding: "1rem", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>Book Doctor Appointment</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input type="text" name="name" placeholder="Patient Name" value={formData.name} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
        
        <div style={{ display: "flex", gap: "10px" }}>
          <label><input type="radio" name="gender" value="Male" onChange={handleChange} required /> Male</label>
          <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
          <label><input type="radio" name="gender" value="Other" onChange={handleChange} /> Other</label>
        </div>

        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <input type="text" name="doctor" placeholder="Doctor Name" value={formData.doctor} onChange={handleChange} required />

        <button type="submit" style={{ padding: "10px", backgroundColor: "#2563eb", color: "white", border: "none", borderRadius: "5px" }}>Submit</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "1rem", padding: "10px", backgroundColor: "#f3f4f6", borderRadius: "8px" }}>
          <h2 style={{ fontWeight: "bold" }}>Submitted Appointment Details:</h2>
          <ul>
            <li><strong>Name:</strong> {submittedData.name}</li>
            <li><strong>Phone:</strong> {submittedData.phone}</li>
            <li><strong>Age:</strong> {submittedData.age}</li>
            <li><strong>Gender:</strong> {submittedData.gender}</li>
            <li><strong>Appointment Date:</strong> {submittedData.date}</li>
            <li><strong>Doctor:</strong> {submittedData.doctor}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
