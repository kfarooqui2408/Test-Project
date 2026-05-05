"use client";

import { useState } from "react";
import { Home, UserPlus, Search } from "lucide-react";

export default function Page() {
  const [screen, setScreen] = useState("home");

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      
      {/* Navigation Buttons */}
      <div style={{ marginBottom: 20 }}>
        {["home", "register", "dashboard"].map((s) => (
          <button
            key={s}
            onClick={() => setScreen(s)}
            style={{
              marginRight: 10,
              padding: "8px 12px",
              background: screen === s ? "#1D4ED8" : "#eee",
              color: screen === s ? "#fff" : "#000",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Screens */}
      {screen === "home" && (
        <div>
          <h1>AMS Portal</h1>
          <p>Book your visa appointment securely</p>
          <button onClick={() => setScreen("register")}>
            Start Application
          </button>
        </div>
      )}

      {screen === "register" && (
        <div>
          <h2>Register</h2>
          <input placeholder="Full Name" /><br /><br />
          <input placeholder="CNIC" /><br /><br />
          <button onClick={() => setScreen("dashboard")}>
            Submit
          </button>
        </div>
      )}

      {screen === "dashboard" && (
        <div>
          <h2>Dashboard</h2>
          <p>Application Started</p>
        </div>
      )}
    </div>
  );
}