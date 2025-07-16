// src/CheckInForm.jsx
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export default function CheckInForm() {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !size) return;

    await addDoc(collection(db, "checkins"), {
      name,
      size,
      timestamp: new Date()
    });

    setName("");
    setSize("");
    alert("Check-in complete!");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
      <h2>Parent Check-In</h2>
      <input
        type="text"
        placeholder="Child's Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Skate Size"
        value={size}
        onChange={(e) => setSize(e.target.value)}
        required
      />
      <button type="submit">Check In</button>
    </form>
  );
}
