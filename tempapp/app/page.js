"use client";

import { useState } from "react";
import { CalendarDays, ShieldCheck, UserPlus, Search } from "lucide-react";

export default function Page() {
  const [screen, setScreen] = useState("home");

  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "Arial, sans-serif" }}>
      <div style={{ padding: "24px 64px", background: "white", borderBottom: "1px solid #e5e7eb" }}>
        <strong style={{ fontSize: 20 }}>AMS — French Embassy Pakistan</strong>
      </div>

      <div style={{ padding: 64 }}>
        <div style={{ marginBottom: 24 }}>
          {["home", "register", "dashboard"].map((s) => (
            <button
              key={s}
              onClick={() => setScreen(s)}
              style={{
                marginRight: 12,
                padding: "12px 18px",
                background: screen === s ? "#1D4ED8" : "#e5e7eb",
                color: screen === s ? "#fff" : "#111827",
                border: "none",
                borderRadius: 10,
                cursor: "pointer",
                fontSize: 16,
              }}
            >
              {s}
            </button>
          ))}
        </div>

        {screen === "home" && (
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "1.5fr 0.8fr",
              gap: 32,
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                background: "linear-gradient(135deg, #1E40AF, #111827)",
                color: "white",
                borderRadius: 24,
                padding: 48,
              }}
            >
              <div style={{ marginBottom: 24, display: "flex", gap: 8, alignItems: "center" }}>
                <ShieldCheck size={20} />
                <span>Secure visa appointment portal</span>
              </div>

              <h1 style={{ fontSize: 48, lineHeight: 1.1, margin: 0 }}>
                Book your visa appointment securely.
              </h1>

              <p style={{ fontSize: 18, lineHeight: 1.7, color: "#dbeafe", marginTop: 24 }}>
                Create a verified applicant profile, complete the Embassy form step,
                make payment, and reserve an appointment through a controlled booking flow.
              </p>

              <div style={{ marginTop: 32 }}>
                <button
                  onClick={() => setScreen("register")}
                  style={{
                    padding: "14px 22px",
                    background: "white",
                    color: "#1D4ED8",
                    border: "none",
                    borderRadius: 12,
                    fontSize: 16,
                    fontWeight: 700,
                    cursor: "pointer",
                    marginRight: 12,
                  }}
                >
                  <UserPlus size={18} style={{ verticalAlign: "middle", marginRight: 8 }} />
                  Start Application
                </button>

                <button
                  style={{
                    padding: "14px 22px",
                    background: "rgba(255,255,255,0.12)",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.25)",
                    borderRadius: 12,
                    fontSize: 16,
                    cursor: "pointer",
                  }}
                >
                  <Search size={18} style={{ verticalAlign: "middle", marginRight: 8 }} />
                  Check Status
                </button>
              </div>
            </div>

            <div style={{ background: "white", borderRadius: 24, padding: 28, border: "1px solid #e5e7eb" }}>
              <CalendarDays color="#1D4ED8" />
              <h2>Available Interview Months</h2>

              {["June 2026", "July 2026", "August 2026"].map((month) => (
                <div
                  key={month}
                  style={{
                    padding: 16,
                    border: "1px solid #e5e7eb",
                    borderRadius: 14,
                    marginTop: 12,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <strong>{month}</strong>
                  <span style={{ color: "#16A34A", fontWeight: 700 }}>Open</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {screen === "register" && (
          <div>
            <h2>Register</h2>
            <input placeholder="Full Name" />
            <br />
            <br />
            <input placeholder="CNIC" />
            <br />
            <br />
            <button onClick={() => setScreen("dashboard")}>Submit</button>
          </div>
        )}

        {screen === "dashboard" && (
          <div>
            <h2>Dashboard</h2>
            <p>Application Started</p>
          </div>
        )}
      </div>
    </main>
  );
}