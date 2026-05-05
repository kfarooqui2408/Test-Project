"use client";

import { useState } from "react";
import {
  CalendarDays,
  ShieldCheck,
  UserPlus,
  Search,
  Check,
  Lock,
  CreditCard,
  FileCheck2,
  Upload,
  AlertTriangle,
  CheckCircle2,
  RefreshCw,
  Download,
  CalendarPlus,
  Home,
} from "lucide-react";

export default function Page() {
  const [screen, setScreen] = useState("home");
  const [formConfirmed, setFormConfirmed] = useState(false);
  const [paymentState, setPaymentState] = useState("idle");
  const [selectedSlot, setSelectedSlot] = useState(null);

  const button = {
    padding: "14px 22px",
    borderRadius: 12,
    border: "none",
    fontSize: 16,
    fontWeight: 700,
    cursor: "pointer",
  };

  const input = {
    width: "100%",
    padding: 14,
    borderRadius: 12,
    border: "1px solid #d1d5db",
    fontSize: 15,
    boxSizing: "border-box",
  };

  const card = {
    background: "white",
    borderRadius: 24,
    padding: 32,
    border: "1px solid #e5e7eb",
    boxShadow: "0 10px 30px rgba(15,23,42,0.06)",
  };

  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "Arial, sans-serif", color: "#111827" }}>
      <div style={{ padding: "22px 64px", background: "white", borderBottom: "1px solid #e5e7eb", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <strong style={{ fontSize: 20 }}>AMS — French Embassy Pakistan</strong>
        <div>
          {["home", "register", "status"].map((s) => (
            <button key={s} onClick={() => setScreen(s)} style={{ marginLeft: 10, padding: "10px 14px", borderRadius: 10, border: "none", background: screen === s ? "#1D4ED8" : "#e5e7eb", color: screen === s ? "white" : "#111827", cursor: "pointer" }}>
              {s}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: 64 }}>
        {screen === "home" && (
          <section style={{ display: "grid", gridTemplateColumns: "1.5fr 0.8fr", gap: 32 }}>
            <div style={{ background: "linear-gradient(135deg, #1E40AF, #111827)", color: "white", borderRadius: 24, padding: 48 }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 24 }}>
                <ShieldCheck size={20} /> Secure visa appointment portal
              </div>
              <h1 style={{ fontSize: 48, lineHeight: 1.1, margin: 0 }}>Book your visa appointment securely.</h1>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: "#dbeafe", marginTop: 24 }}>
                Create a verified applicant profile, complete the Embassy form, make payment, and reserve an appointment through a controlled booking flow.
              </p>
              <div style={{ marginTop: 32 }}>
                <button onClick={() => setScreen("register")} style={{ ...button, background: "white", color: "#1D4ED8", marginRight: 12 }}>
                  <UserPlus size={18} style={{ verticalAlign: "middle", marginRight: 8 }} />
                  Start Application
                </button>
                <button onClick={() => setScreen("status")} style={{ ...button, background: "rgba(255,255,255,0.12)", color: "white", border: "1px solid rgba(255,255,255,0.25)" }}>
                  <Search size={18} style={{ verticalAlign: "middle", marginRight: 8 }} />
                  Check Status
                </button>
              </div>
            </div>

            <div style={card}>
              <CalendarDays color="#1D4ED8" />
              <h2>Available Interview Months</h2>
              {["June 2026", "July 2026", "August 2026"].map((month) => (
                <div key={month} style={{ padding: 16, border: "1px solid #e5e7eb", borderRadius: 14, marginTop: 12, display: "flex", justifyContent: "space-between" }}>
                  <strong>{month}</strong>
                  <span style={{ color: "#16A34A", fontWeight: 700 }}>Open</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {screen === "register" && (
          <div style={{ ...card, maxWidth: 920, margin: "0 auto" }}>
            <h2 style={{ fontSize: 30, margin: 0 }}>Create Applicant Account</h2>
            <p style={{ color: "#6b7280" }}>Identity verification is mandatory before payment and appointment booking.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginTop: 24, marginBottom: 32 }}>
              {["Account", "Verification", "Complete"].map((step, i) => (
                <div key={step} style={{ padding: 14, borderRadius: 14, background: i === 0 ? "#dbeafe" : "#f3f4f6", color: i === 0 ? "#1d4ed8" : "#6b7280", fontWeight: 700, textAlign: "center" }}>
                  {i + 1}. {step}
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {[
                ["Full Name", "As printed on passport"],
                ["CNIC Number", "XXXXX-XXXXXXX-X"],
                ["Passport Number", "Passport number"],
                ["Mobile Number", "+92 300 0000000"],
                ["Email Address", "applicant@email.com"],
                ["Residential Address", "House, street, city"],
              ].map(([label, placeholder]) => (
                <label key={label}>
                  <strong>{label}</strong>
                  <input placeholder={placeholder} style={{ ...input, marginTop: 8 }} />
                </label>
              ))}
            </div>

            <h3 style={{ marginTop: 32 }}>Required Documents</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 16 }}>
              {["CNIC Front", "CNIC Back", "Passport Scan"].map((doc) => (
                <div key={doc} style={{ border: "2px dashed #bfdbfe", background: "#eff6ff", borderRadius: 18, padding: 22, textAlign: "center", color: "#1d4ed8", fontWeight: 700 }}>
                  <Upload size={24} />
                  <div>Upload {doc}</div>
                  <small style={{ color: "#6b7280" }}>PDF / JPG / PNG up to 5MB</small>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 28, background: "#fffbeb", border: "1px solid #fde68a", color: "#92400e", padding: 16, borderRadius: 14 }}>
              CNIC and Passport Number will be locked after OTP verification.
            </div>

            <div style={{ marginTop: 28, textAlign: "right" }}>
              <button onClick={() => setScreen("otp")} style={{ ...button, background: "#1D4ED8", color: "white" }}>Submit & Send OTP</button>
            </div>
          </div>
        )}

        {screen === "otp" && (
          <div style={{ ...card, maxWidth: 460, margin: "0 auto", textAlign: "center" }}>
            <ShieldCheck size={42} color="#1D4ED8" />
            <h2>Verify Your Identity</h2>
            <p style={{ color: "#6b7280" }}>Enter the OTP sent to your registered mobile number.</p>
            <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 24 }}>
              {[1, 2, 3, 4, 5, 6].map((n) => <input key={n} maxLength={1} style={{ width: 44, height: 48, textAlign: "center", borderRadius: 10, border: "1px solid #d1d5db", fontSize: 20 }} />)}
            </div>
            <p style={{ color: "#6b7280" }}>04:59 remaining</p>
            <button onClick={() => setScreen("dashboard")} style={{ ...button, width: "100%", background: "#1D4ED8", color: "white", marginTop: 18 }}>Verify OTP</button>
          </div>
        )}

        {screen === "dashboard" && (
          <div>
            <div style={card}>
              <h2>Applicant Dashboard</h2>
              <p style={{ color: "#6b7280" }}>Complete all steps to book your appointment.</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12, marginTop: 24 }}>
                {["Account", "Verified", "Embassy Form", "Payment", "Booking"].map((step, i) => (
                  <div key={step} style={{ padding: 16, borderRadius: 14, background: i < 2 ? "#dcfce7" : i === 2 ? "#dbeafe" : "#f3f4f6", fontWeight: 700 }}>
                    {i < 2 ? "✓" : i + 1} {step}
                  </div>
                ))}
              </div>
              <button onClick={() => setScreen("form")} style={{ ...button, background: "#1D4ED8", color: "white", marginTop: 28 }}>Continue Application</button>
            </div>
          </div>
        )}

        {screen === "form" && (
          <div style={{ ...card, maxWidth: 900, margin: "0 auto" }}>
            <FileCheck2 size={36} color="#1D4ED8" />
            <h2>Complete Embassy Visa Form</h2>
            <p style={{ color: "#6b7280" }}>You must complete the official Embassy form before payment and booking.</p>
            <div style={{ background: "#f3f4f6", border: "1px dashed #cbd5e1", borderRadius: 18, padding: 50, textAlign: "center", marginTop: 24 }}>
              France-Visas Form Embed / Redirect Placeholder
            </div>
            <label style={{ display: "block", marginTop: 24 }}>
              <input type="checkbox" checked={formConfirmed} onChange={(e) => setFormConfirmed(e.target.checked)} /> I confirm I have completed the Embassy form.
            </label>
            <button disabled={!formConfirmed} onClick={() => setScreen("payment")} style={{ ...button, background: formConfirmed ? "#1D4ED8" : "#cbd5e1", color: "white", marginTop: 24 }}>Continue to Payment</button>
          </div>
        )}

        {screen === "payment" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 0.6fr", gap: 32 }}>
            <div style={card}>
              <CreditCard size={36} color="#1D4ED8" />
              <h2>Payment & Collection Preference</h2>
              {["Islamabad", "Karachi", "Courier"].map((item) => (
                <div key={item} style={{ border: "1px solid #e5e7eb", borderRadius: 16, padding: 18, marginTop: 14 }}>
                  <input type="radio" name="collection" defaultChecked={item === "Islamabad"} /> <strong>{item}</strong>
                  <p style={{ marginLeft: 24, color: "#6b7280" }}>{item === "Courier" ? "Secure courier dispatch to registered address" : `In-person collection at ${item} office`}</p>
                </div>
              ))}
            </div>
            <div style={card}>
              <h3>Payment Summary</h3>
              <p>Booking Fee: <strong>PKR 8,000</strong></p>
              <p>Taxes: <strong>Included</strong></p>
              <hr />
              <h2>Total: PKR 8,000</h2>
              {paymentState === "failed" && <p style={{ color: "#dc2626" }}><AlertTriangle size={16} /> Payment failed. Please retry.</p>}
              <button onClick={() => setPaymentState("success")} style={{ ...button, width: "100%", background: "#1D4ED8", color: "white" }}>Simulate Payment Success</button>
              {paymentState === "success" && (
                <button onClick={() => setScreen("calendar")} style={{ ...button, width: "100%", background: "#16A34A", color: "white", marginTop: 12 }}>
                  Open Calendar
                </button>
              )}
            </div>
          </div>
        )}

        {screen === "calendar" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 0.45fr", gap: 32 }}>
            <div style={card}>
              <h2>Select Appointment Slot</h2>
              <p style={{ color: "#6b7280" }}>Choose an available slot from the rolling calendar.</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 24 }}>
                {["12 Jun, 09:00", "12 Jun, 10:30", "15 Jun, 09:30", "17 Jun, 12:00"].map((slot) => (
                  <button key={slot} onClick={() => setSelectedSlot(slot)} style={{ padding: 22, borderRadius: 18, border: selectedSlot === slot ? "2px solid #1D4ED8" : "1px solid #e5e7eb", background: selectedSlot === slot ? "#dbeafe" : "white", textAlign: "left", cursor: "pointer" }}>
                    <strong>{slot}</strong>
                    <p style={{ color: "#16A34A" }}>Available</p>
                  </button>
                ))}
              </div>
            </div>
            <div style={card}>
              <h3>Slot Details</h3>
              {selectedSlot ? (
                <>
                  <p>Selected: <strong>{selectedSlot}</strong></p>
                  <p>Location: French Embassy Islamabad</p>
                  <button onClick={() => setScreen("confirm")} style={{ ...button, width: "100%", background: "#1D4ED8", color: "white" }}>Continue</button>
                </>
              ) : (
                <p style={{ color: "#6b7280" }}>Select a slot to continue.</p>
              )}
            </div>
          </div>
        )}

        {screen === "confirm" && (
          <div style={{ ...card, maxWidth: 650, margin: "0 auto" }}>
            <h2>Confirm Appointment</h2>
            <p>Date & Time: <strong>{selectedSlot}</strong></p>
            <p>Location: <strong>French Embassy Islamabad</strong></p>
            <p>Collection: <strong>Islamabad</strong></p>
            <button onClick={() => setScreen("success")} style={{ ...button, background: "#1D4ED8", color: "white" }}>Confirm Appointment</button>
          </div>
        )}

        {screen === "success" && (
          <div style={{ ...card, maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
            <CheckCircle2 size={60} color="#16A34A" />
            <h1>Appointment Confirmed</h1>
            <p>Your confirmation has been sent via WhatsApp and email.</p>
            <div style={{ border: "1px solid #e5e7eb", borderRadius: 18, padding: 24, marginTop: 24 }}>
              <p>Booking Reference Number</p>
              <h2>BRN-FR-2026-10482</h2>
            </div>
            <button style={{ ...button, background: "#e5e7eb", marginTop: 20, marginRight: 10 }}><Download size={16} /> Download PDF</button>
            <button style={{ ...button, background: "#e5e7eb", marginTop: 20 }}><CalendarPlus size={16} /> Add to Calendar</button>
          </div>
        )}

        {screen === "status" && (
          <div style={{ ...card, maxWidth: 650, margin: "0 auto" }}>
            <h2>Check Passport Status</h2>
            <input placeholder="Passport Number" style={{ ...input, marginTop: 16 }} />
            <input type="date" style={{ ...input, marginTop: 16 }} />
            <button onClick={() => setScreen("statusResult")} style={{ ...button, background: "#1D4ED8", color: "white", marginTop: 20 }}>Search Status</button>
          </div>
        )}

        {screen === "statusResult" && (
          <div style={{ ...card, maxWidth: 700, margin: "0 auto" }}>
            <h2>Application Status</h2>
            {["Appointment Scheduled", "Interview Conducted", "Passport with Provider", "Passport Ready / Dispatched", "Passport Collected / Delivered"].map((stage, i) => (
              <div key={stage} style={{ display: "flex", gap: 14, marginTop: 20 }}>
                <div style={{ width: 34, height: 34, borderRadius: "50%", background: i < 2 ? "#16A34A" : i === 2 ? "#1D4ED8" : "#e5e7eb", color: i <= 2 ? "white" : "#6b7280", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
                  {i < 2 ? "✓" : i + 1}
                </div>
                <div>
                  <strong>{stage}</strong>
                  <p style={{ margin: 0, color: "#6b7280" }}>{i < 2 ? "Completed" : i === 2 ? "Current stage" : "Pending"}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}