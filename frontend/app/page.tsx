"use client";
import React, { useState } from "react";
import {
  AlertTriangle,
  CalendarDays,
  CalendarPlus,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  CreditCard,
  Download,
  FileCheck2,
  HelpCircle,
  Home,
  Lock,
  LogIn,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  RefreshCw,
  Search,
  ShieldCheck,
  Upload,
  UserPlus,
  X,
} from "lucide-react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const languages = ["English", "French", "Urdu", "Pashto", "Dari"];

const months = ["June 2026", "July 2026", "August 2026"];

const steps = [
  { key: "register", label: "Account Created" },
  { key: "verify", label: "Verified" },
  { key: "form", label: "Embassy Form" },
  { key: "payment", label: "Payment" },
  { key: "booking", label: "Book Appointment" },
];

const statusStages = [
  "Appointment Scheduled",
  "Interview Conducted",
  "Passport with Provider",
  "Passport Ready / Dispatched",
  "Passport Collected / Delivered",
];

const slots = [
  { id: "s1", date: "12 Jun", day: "Fri", time: "09:00", visa: "Short Stay", status: "available" },
  { id: "s2", date: "12 Jun", day: "Fri", time: "10:30", visa: "Long Stay", status: "available" },
  { id: "s3", date: "13 Jun", day: "Sat", time: "11:00", visa: "Student", status: "full" },
  { id: "s4", date: "15 Jun", day: "Mon", time: "09:30", visa: "Business", status: "available" },
  { id: "s5", date: "17 Jun", day: "Wed", time: "12:00", visa: "Family", status: "available" },
  { id: "s6", date: "19 Jun", day: "Fri", time: "08:30", visa: "Short Stay", status: "disabled" },
];

function Button({ children, variant = "primary", size = "md", className = "", disabled = false, icon: Icon, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all focus:outline-none focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed",
        size === "sm" && "px-3 py-2 text-sm",
        size === "md" && "px-4 py-3 text-sm",
        size === "lg" && "px-5 py-3.5 text-base",
        variant === "primary" && "bg-blue-700 text-white shadow-sm hover:bg-blue-800 disabled:bg-slate-300",
        variant === "secondary" && "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 disabled:text-slate-400",
        variant === "ghost" && "text-slate-700 hover:bg-slate-100 disabled:text-slate-400",
        variant === "danger" && "bg-red-600 text-white hover:bg-red-700 disabled:bg-slate-300",
        className
      )}
    >
      {Icon ? <Icon className="h-4 w-4" /> : null}
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={cn("rounded-2xl border border-slate-200 bg-white shadow-sm", className)}>{children}</div>;
}

function Input({ label, placeholder = "", error = "", type = "text", disabled = false }) {
  return (
    <label className="block space-y-1.5">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={cn(
          "w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100 disabled:bg-slate-100 disabled:text-slate-500",
          error ? "border-red-400" : "border-slate-200"
        )}
      />
      {error ? <span className="text-xs font-medium text-red-600">{error}</span> : null}
    </label>
  );
}

function UploadBox({ title, state = "default" }) {
  const uploaded = state === "uploaded";
  return (
    <div
      className={cn(
        "rounded-2xl border-2 border-dashed p-4 transition",
        uploaded ? "border-green-300 bg-green-50" : "border-slate-200 bg-slate-50 hover:border-blue-300 hover:bg-blue-50"
      )}
    >
      <div className="flex items-center gap-3">
        <div className={cn("rounded-xl p-2", uploaded ? "bg-green-100 text-green-700" : "bg-white text-blue-700")}>
          {uploaded ? <Check className="h-5 w-5" /> : <Upload className="h-5 w-5" />}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">{title}</p>
          <p className="text-xs text-slate-500">PDF/JPG/PNG up to 5MB</p>
        </div>
      </div>
    </div>
  );
}

function Header({ setScreen }) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button type="button" onClick={() => setScreen("home")} className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-sm">
            <CalendarDays className="h-5 w-5" />
          </div>
          <div className="text-left">
            <p className="text-sm font-bold text-slate-900">AMS</p>
            <p className="text-xs text-slate-500">French Embassy Pakistan</p>
          </div>
        </button>
        <nav className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" icon={Home} onClick={() => setScreen("home")}>Home</Button>
          <Button variant="ghost" size="sm" icon={Search} onClick={() => setScreen("statusSearch")}>Check Status</Button>
          <Button variant="ghost" size="sm" icon={HelpCircle} onClick={() => setScreen("help")}>Help</Button>
        </nav>
        <div className="flex items-center gap-2">
          <select className="hidden rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-blue-600 md:block" defaultValue="English">
            {languages.map((language) => <option key={language}>{language}</option>)}
          </select>
          <Button variant="secondary" size="sm" icon={LogIn} onClick={() => setScreen("login")}>Login</Button>
          <Button size="sm" icon={UserPlus} onClick={() => setScreen("register")}>Register</Button>
          <Button variant="ghost" size="sm" icon={Menu} onClick={() => setScreen("menu")} className="md:hidden" />
        </div>
      </div>
    </header>
  );
}

function Shell({ children, setScreen }) {
  return (
    <div className="min-h-screen bg-slate-50 pb-20 text-slate-900 md:pb-0">
      <Header setScreen={setScreen} />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">{children}</main>
      <div className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-3 border-t border-slate-200 bg-white md:hidden">
        <button type="button" onClick={() => setScreen("home")} className="flex flex-col items-center gap-1 py-3 text-xs text-slate-600"><Home className="h-5 w-5" />Home</button>
        <button type="button" onClick={() => setScreen("appointments")} className="flex flex-col items-center gap-1 py-3 text-xs text-slate-600"><CalendarDays className="h-5 w-5" />Appointment</button>
        <button type="button" onClick={() => setScreen("statusSearch")} className="flex flex-col items-center gap-1 py-3 text-xs text-slate-600"><Search className="h-5 w-5" />Status</button>
      </div>
    </div>
  );
}

function Progress({ current = 0 }) {
  return (
    <div className="grid gap-3 md:grid-cols-5">
      {steps.map((step, index) => {
        const done = index < current;
        const active = index === current;
        return (
          <div key={step.key} className={cn("rounded-2xl border p-4", done ? "border-green-200 bg-green-50" : active ? "border-blue-200 bg-blue-50" : "border-slate-200 bg-white")}>
            <div className="flex items-center gap-2">
              <span className={cn("flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold", done ? "bg-green-600 text-white" : active ? "bg-blue-700 text-white" : "bg-slate-200 text-slate-600")}>{done ? <Check className="h-4 w-4" /> : index + 1}</span>
              <span className="text-sm font-semibold text-slate-800">{step.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function HomeScreen({ setScreen }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-800 via-blue-700 to-slate-900 p-8 text-white shadow-xl lg:p-12">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
            <ShieldCheck className="h-4 w-4" /> Secure visa appointment portal
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Book your visa appointment securely.</h1>
          <p className="mt-5 text-lg leading-8 text-blue-50">Create a verified applicant profile, complete the required form step, make payment, and reserve an Embassy appointment through a controlled anti-fraud booking flow.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50" icon={UserPlus} onClick={() => setScreen("register")}>Start Application</Button>
            <Button size="lg" variant="secondary" className="border-white/20 bg-white/10 text-white hover:bg-white/20" icon={Search} onClick={() => setScreen("statusSearch")}>Check Passport Status</Button>
          </div>
        </div>
      </section>

      <div className="space-y-5">
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-500">Public availability</p>
              <h2 className="text-xl font-bold text-slate-900">Available Interview Months</h2>
            </div>
            <CalendarDays className="h-6 w-6 text-blue-700" />
          </div>
          <div className="mt-5 space-y-3">
            {months.map((month) => (
              <div key={month} className="flex items-center justify-between rounded-2xl border border-slate-200 p-4">
                <span className="font-semibold text-slate-800">{month}</span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">Open</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <h3 className="font-bold text-slate-900">Process overview</h3>
          <div className="mt-4 space-y-3">
            {["Verify identity", "Complete Embassy form", "Pay service fee", "Select appointment slot"].map((item, index) => (
              <div key={item} className="flex items-center gap-3 text-sm text-slate-700">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-700">{index + 1}</span>
                {item}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

function LoginScreen({ setScreen }) {
  return (
    <div className="mx-auto max-w-md">
      <Card className="p-6">
        <div className="mb-6 text-center">
          <Lock className="mx-auto h-10 w-10 rounded-2xl bg-blue-50 p-2 text-blue-700" />
          <h1 className="mt-3 text-2xl font-bold">Login to AMS</h1>
          <p className="mt-1 text-sm text-slate-500">Access your applicant dashboard.</p>
        </div>
        <div className="space-y-4">
          <Input label="Passport Number" placeholder="AB1234567" />
          <Input label="Password" placeholder="Enter password" type="password" />
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">CAPTCHA protection enabled</div>
          <Button className="w-full" icon={LogIn} onClick={() => setScreen("dashboard")}>Login</Button>
        </div>
      </Card>
    </div>
  );
}

function RegisterScreen({ setScreen }) {
  const [duplicate, setDuplicate] = useState(false);
  return (
    <div className="mx-auto max-w-3xl">
      <Card className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Create Applicant Account</h1>
          <p className="mt-1 text-sm text-slate-500">Identity verification is mandatory before accessing payment or booking.</p>
        </div>
        <Progress current={0} />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Input label="Full Name" placeholder="As printed on passport" />
          <Input label="CNIC Number" placeholder="XXXXX-XXXXXXX-X" error={duplicate ? "This CNIC already has an active appointment." : ""} />
          <Input label="Passport Number" placeholder="Passport number" />
          <Input label="Mobile Number" placeholder="+92 300 0000000" />
          <Input label="Email Address" placeholder="applicant@email.com" type="email" />
          <Input label="Residential Address" placeholder="House, street, city" />
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <UploadBox title="CNIC Front" />
          <UploadBox title="CNIC Back" />
          <UploadBox title="Passport Scan" />
        </div>
        <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
          By continuing, you acknowledge that CNIC and Passport Number will be locked after verification.
        </div>
        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
          <Button variant="secondary" icon={AlertTriangle} onClick={() => setDuplicate(true)}>Preview Duplicate CNIC Error</Button>
          <Button icon={ChevronRight} onClick={() => setScreen("otp")}>Submit & Send OTP</Button>
        </div>
      </Card>

      {duplicate ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-red-50 p-3 text-red-600"><AlertTriangle className="h-6 w-6" /></div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">CNIC already registered</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Only one active appointment is allowed for each CNIC. Please contact support if you believe this is incorrect.</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <Button variant="secondary" onClick={() => setDuplicate(false)}>Close</Button>
              <Button variant="danger" icon={Phone} onClick={() => setDuplicate(false)}>Contact Support</Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function OtpScreen({ setScreen }) {
  const [locked, setLocked] = useState(false);
  return (
    <div className="mx-auto max-w-md">
      <Card className="p-6">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700"><ShieldCheck className="h-6 w-6" /></div>
          <h1 className="mt-4 text-2xl font-bold">Verify Your Identity</h1>
          <p className="mt-2 text-sm text-slate-500">Enter the OTP sent to your registered mobile number. Email fallback is available if SMS fails.</p>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <input key={index} disabled={locked} maxLength={1} inputMode="numeric" className="h-12 w-11 rounded-xl border border-slate-200 text-center text-lg font-bold outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 disabled:bg-slate-100" />
          ))}
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500"><Clock className="h-4 w-4" /> 04:59 remaining</div>
        {locked ? <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">Too many failed attempts. Try again in 60 minutes.</div> : null}
        <div className="mt-6 space-y-3">
          <Button className="w-full" disabled={locked} icon={Check} onClick={() => setScreen("dashboard")}>Verify OTP</Button>
          <Button className="w-full" variant="secondary" disabled={!locked} icon={RefreshCw} onClick={() => setLocked(false)}>Resend OTP</Button>
          <button type="button" onClick={() => setLocked(true)} className="w-full text-center text-xs font-semibold text-red-600">Preview lockout state</button>
        </div>
      </Card>
    </div>
  );
}

function DashboardScreen({ setScreen }) {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-2xl font-bold">Applicant Dashboard</h1>
            <p className="mt-1 text-sm text-slate-500">Complete all mandatory steps to book your appointment.</p>
          </div>
          <Button icon={ChevronRight} onClick={() => setScreen("formGate")}>Continue Application</Button>
        </div>
        <div className="mt-6"><Progress current={2} /></div>
      </Card>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="p-5 lg:col-span-2">
          <h2 className="text-lg font-bold">Profile Summary</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Input label="Full Name" placeholder="Ahmed Khan" disabled />
            <Input label="CNIC" placeholder="35202-1234567-1" disabled />
            <Input label="Passport" placeholder="AB1234567" disabled />
            <Input label="Collection Preference" placeholder="Not selected yet" disabled />
          </div>
          <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">CNIC and Passport Number are locked after verification.</div>
        </Card>
        <Card className="p-5">
          <h2 className="text-lg font-bold">Security</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <div className="flex gap-2"><ShieldCheck className="h-5 w-5 text-green-600" /> Identity verified</div>
            <div className="flex gap-2"><Lock className="h-5 w-5 text-blue-700" /> Secure session active</div>
            <div className="flex gap-2"><MessageCircle className="h-5 w-5 text-green-600" /> WhatsApp notifications enabled</div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function FormGateScreen({ setScreen }) {
  const [checked, setChecked] = useState(false);
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <Card className="p-6"><Progress current={2} /></Card>
      <Card className="overflow-hidden">
        <div className="border-b border-slate-200 p-6">
          <h1 className="text-2xl font-bold">Complete Embassy Visa Form</h1>
          <p className="mt-2 text-sm text-slate-500">You must complete the official Embassy form before accessing payment and appointment booking.</p>
        </div>
        <div className="grid gap-0 lg:grid-cols-[1fr_0.8fr]">
          <div className="min-h-[360px] bg-slate-100 p-6">
            <div className="flex h-full min-h-[320px] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white text-center">
              <div>
                <FileCheck2 className="mx-auto h-10 w-10 text-blue-700" />
                <p className="mt-3 font-bold">France-Visas Form Embed / Redirect</p>
                <p className="mt-1 text-sm text-slate-500">Provider does not store form contents.</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h2 className="font-bold">Before you continue</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex gap-2"><Check className="h-5 w-5 text-green-600" /> Complete the official form.</li>
              <li className="flex gap-2"><Check className="h-5 w-5 text-green-600" /> Keep your form reference available.</li>
              <li className="flex gap-2"><X className="h-5 w-5 text-red-600" /> Calendar remains locked until payment.</li>
            </ul>
            <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 p-4">
              <input type="checkbox" checked={checked} onChange={(event) => setChecked(event.target.checked)} className="mt-1" />
              <span className="text-sm text-slate-700">I confirm that I have completed the Embassy form and understand that this portal stores only completion status.</span>
            </label>
            <Button className="mt-6 w-full" disabled={!checked} icon={ChevronRight} onClick={() => setScreen("payment")}>Continue to Payment</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

function PaymentScreen({ setScreen }) {
  const [collection, setCollection] = useState("Islamabad");
  const courier = collection === "Courier";
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <Card className="p-6"><Progress current={3} /></Card>
      <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr]">
        <Card className="p-6">
          <h1 className="text-2xl font-bold">Payment & Collection Preference</h1>
          <p className="mt-2 text-sm text-slate-500">Payment is required before appointment slots are displayed.</p>
          <div className="mt-6 space-y-3">
            {["Islamabad", "Karachi", "Courier"].map((item) => (
              <label key={item} className={cn("flex cursor-pointer items-center justify-between rounded-2xl border p-4", collection === item ? "border-blue-600 bg-blue-50" : "border-slate-200 bg-white")}>
                <div>
                  <p className="font-semibold text-slate-900">{item}</p>
                  <p className="text-sm text-slate-500">{item === "Courier" ? "Secure courier dispatch to registered address" : `In-person collection at ${item} office`}</p>
                </div>
                <input type="radio" name="collection" checked={collection === item} onChange={() => setCollection(item)} />
              </label>
            ))}
          </div>
        </Card>
        <Card className="p-6">
          <h2 className="text-lg font-bold">Payment Summary</h2>
          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between"><span className="text-slate-500">Booking fee</span><span className="font-semibold">PKR 8,000</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Taxes</span><span className="font-semibold">Included</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Courier fee</span><span className="font-semibold">{courier ? "PKR 1,200" : "PKR 0"}</span></div>
            <div className="border-t border-slate-200 pt-3 flex justify-between text-base"><span className="font-bold">Total</span><span className="font-bold">PKR {courier ? "9,200" : "8,000"}</span></div>
          </div>
          <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-xs text-slate-600">Accepted methods: debit card, credit card, JazzCash, EasyPaisa, and bank transfer. No cash accepted.</div>
          <Button className="mt-6 w-full" icon={CreditCard} onClick={() => setScreen("paymentProcessing")}>Proceed to Payment</Button>
        </Card>
      </div>
    </div>
  );
}

function PaymentProcessingScreen({ setScreen }) {
  const [paymentState, setPaymentState] = useState("processing");
  return (
    <div className="mx-auto max-w-md">
      <Card className="p-6 text-center">
        {paymentState === "processing" ? <RefreshCw className="mx-auto h-12 w-12 animate-spin text-blue-700" /> : null}
        {paymentState === "success" ? <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" /> : null}
        {paymentState === "failed" ? <AlertTriangle className="mx-auto h-12 w-12 text-red-600" /> : null}
        <h1 className="mt-4 text-2xl font-bold">{paymentState === "processing" ? "Processing Payment" : paymentState === "success" ? "Payment Successful" : "Payment Failed"}</h1>
        <p className="mt-2 text-sm text-slate-500">{paymentState === "processing" ? "Do not close this window. Payment timeout is 30 seconds." : paymentState === "success" ? "Calendar access has been unlocked." : "Please retry or use another payment method."}</p>
        <div className="mt-6 space-y-3">
          {paymentState === "processing" ? <Button className="w-full" onClick={() => setPaymentState("success")}>Simulate Success</Button> : null}
          {paymentState === "processing" ? <Button className="w-full" variant="secondary" onClick={() => setPaymentState("failed")}>Simulate Failure</Button> : null}
          {paymentState === "success" ? <Button className="w-full" icon={CalendarDays} onClick={() => setScreen("calendar")}>Open Calendar</Button> : null}
          {paymentState === "failed" ? <Button className="w-full" icon={RefreshCw} onClick={() => setPaymentState("processing")}>Retry Payment</Button> : null}
        </div>
      </Card>
    </div>
  );
}

function CalendarScreen({ setScreen }) {
  const [selected, setSelected] = useState("");
  const [race, setRace] = useState(false);
  const selectedSlot = slots.find((slot) => slot.id === selected);
  return (
    <div className="space-y-6">
      <Card className="p-6"><Progress current={4} /></Card>
      <div className="grid gap-6 lg:grid-cols-[1fr_0.42fr]">
        <Card className="p-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-2xl font-bold">Select Appointment Slot</h1>
              <p className="mt-1 text-sm text-slate-500">Rolling calendar automatically updates as new days are released.</p>
            </div>
            <select className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm" defaultValue="June 2026">
              <option>June 2026</option>
              <option>July 2026</option>
            </select>
          </div>
          {race ? <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium text-amber-800">The selected slot was taken before confirmation. Your payment is retained as credit. Please select another slot.</div> : null}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {slots.map((slot) => {
              const isDisabled = slot.status !== "available";
              const isSelected = selected === slot.id;
              return (
                <button
                  type="button"
                  key={slot.id}
                  disabled={isDisabled}
                  onClick={() => {
                    setSelected(slot.id);
                    setRace(false);
                  }}
                  className={cn("rounded-2xl border p-4 text-left transition", isSelected ? "border-blue-700 bg-blue-50 shadow-sm" : "border-slate-200 bg-white hover:border-blue-300", isDisabled && "cursor-not-allowed bg-slate-100 opacity-60 hover:border-slate-200")}
                >
                  <div className="flex items-center justify-between">
                    <div><p className="font-bold text-slate-900">{slot.date}</p><p className="text-sm text-slate-500">{slot.day}</p></div>
                    <span className={cn("rounded-full px-3 py-1 text-xs font-bold", slot.status === "available" ? "bg-green-100 text-green-700" : slot.status === "full" ? "bg-slate-200 text-slate-600" : "bg-red-100 text-red-700")}>{slot.status}</span>
                  </div>
                  <p className="mt-4 text-xl font-bold text-slate-900">{slot.time}</p>
                  <p className="mt-1 text-sm text-slate-500">{slot.visa}</p>
                </button>
              );
            })}
          </div>
        </Card>
        <Card className="p-6">
          <h2 className="text-lg font-bold">Slot Details</h2>
          {selectedSlot ? (
            <div className="mt-5 space-y-4">
              <div className="rounded-2xl bg-blue-50 p-4"><p className="text-sm text-blue-700">Selected</p><p className="mt-1 text-xl font-bold text-slate-900">{selectedSlot.date}, {selectedSlot.time}</p></div>
              <div className="text-sm text-slate-600">Location: French Embassy Islamabad</div>
              <div className="text-sm text-slate-600">Visa Type: {selectedSlot.visa}</div>
              <Button className="w-full" icon={ChevronRight} onClick={() => setScreen("confirm")}>Continue</Button>
              <Button className="w-full" variant="secondary" icon={AlertTriangle} onClick={() => setRace(true)}>Preview Race Condition</Button>
            </div>
          ) : (
            <div className="mt-5 rounded-2xl bg-slate-50 p-5 text-sm text-slate-500">Select an available slot to continue.</div>
          )}
        </Card>
      </div>
    </div>
  );
}

function ConfirmScreen({ setScreen }) {
  return (
    <div className="mx-auto max-w-2xl">
      <Card className="p-6">
        <h1 className="text-2xl font-bold">Confirm Appointment</h1>
        <p className="mt-2 text-sm text-slate-500">Review your appointment details before final confirmation.</p>
        <div className="mt-6 space-y-4 rounded-2xl bg-slate-50 p-5">
          <div className="flex justify-between"><span className="text-slate-500">Date</span><span className="font-semibold">12 June 2026</span></div>
          <div className="flex justify-between"><span className="text-slate-500">Time</span><span className="font-semibold">09:00 AM</span></div>
          <div className="flex justify-between"><span className="text-slate-500">Location</span><span className="font-semibold">French Embassy Islamabad</span></div>
          <div className="flex justify-between"><span className="text-slate-500">Collection</span><span className="font-semibold">Islamabad</span></div>
        </div>
        <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800">A unique Booking Reference Number will be generated after confirmation. WhatsApp and email confirmation will be sent immediately.</div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Button variant="secondary" onClick={() => setScreen("calendar")}>Back</Button>
          <Button icon={Check} onClick={() => setScreen("success")}>Confirm Appointment</Button>
        </div>
      </Card>
    </div>
  );
}

function SuccessScreen({ setScreen }) {
  return (
    <div className="mx-auto max-w-3xl">
      <Card className="overflow-hidden">
        <div className="bg-green-600 p-8 text-center text-white">
          <CheckCircle2 className="mx-auto h-14 w-14" />
          <h1 className="mt-4 text-3xl font-bold">Appointment Confirmed</h1>
          <p className="mt-2 text-green-50">Your booking confirmation has been sent via WhatsApp and email.</p>
        </div>
        <div className="p-6">
          <div className="rounded-2xl border border-slate-200 p-5 text-center">
            <p className="text-sm text-slate-500">Booking Reference Number</p>
            <p className="mt-1 text-3xl font-extrabold tracking-wide text-slate-900">BRN-FR-2026-10482</p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Button variant="secondary" icon={Download}>Download PDF</Button>
            <Button variant="secondary" icon={CalendarPlus}>Add to Calendar</Button>
            <Button variant="secondary" icon={MessageCircle}>View Notifications</Button>
            <Button icon={Home} onClick={() => setScreen("dashboard")}>Go to Dashboard</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

function StatusSearchScreen({ setScreen }) {
  return (
    <div className="mx-auto max-w-xl">
      <Card className="p-6">
        <div className="text-center">
          <Search className="mx-auto h-10 w-10 rounded-2xl bg-blue-50 p-2 text-blue-700" />
          <h1 className="mt-3 text-2xl font-bold">Check Passport Status</h1>
          <p className="mt-1 text-sm text-slate-500">No account login required. Use Passport Number and Date of Birth.</p>
        </div>
        <div className="mt-6 space-y-4">
          <Input label="Passport Number" placeholder="AB1234567" />
          <Input label="Date of Birth" type="date" />
          <Button className="w-full" icon={Search} onClick={() => setScreen("statusTimeline")}>Search Status</Button>
        </div>
      </Card>
    </div>
  );
}

function StatusTimelineScreen() {
  return (
    <div className="mx-auto max-w-3xl">
      <Card className="p-6">
        <h1 className="text-2xl font-bold">Application Status</h1>
        <p className="mt-1 text-sm text-slate-500">Passport: AB1234567</p>
        <div className="mt-8 space-y-5">
          {statusStages.map((stage, index) => {
            const done = index < 2;
            const active = index === 2;
            return (
              <div key={stage} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={cn("flex h-10 w-10 items-center justify-center rounded-full", done ? "bg-green-600 text-white" : active ? "bg-blue-700 text-white" : "bg-slate-200 text-slate-500")}>{done ? <Check className="h-5 w-5" /> : index + 1}</div>
                  {index < statusStages.length - 1 ? <div className="h-12 w-px bg-slate-200" /> : null}
                </div>
                <div className="pb-6">
                  <p className="font-bold text-slate-900">{stage}</p>
                  <p className="mt-1 text-sm text-slate-500">{done ? "Completed with timestamp" : active ? "Current stage — updated by Embassy/provider workflow" : "Pending"}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

function AppointmentsScreen() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h1 className="text-2xl font-bold">My Appointments</h1>
        <p className="mt-1 text-sm text-slate-500">Manage confirmed bookings, reschedule eligibility, and notifications.</p>
      </Card>
      <Card className="p-6">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-green-700">Confirmed</p>
            <h2 className="mt-1 text-xl font-bold">BRN-FR-2026-10482</h2>
            <p className="mt-2 text-sm text-slate-500">12 June 2026 · 09:00 AM · French Embassy Islamabad</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="secondary" icon={Download}>Download</Button>
            <Button variant="secondary" icon={RefreshCw}>Request Reschedule</Button>
            <Button variant="danger" icon={X}>Cancel</Button>
          </div>
        </div>
      </Card>
      <Card className="p-6">
        <h2 className="text-lg font-bold">Notification Log</h2>
        <div className="mt-4 space-y-3">
          {[{ icon: MessageCircle, text: "WhatsApp confirmation delivered" }, { icon: Mail, text: "Email receipt delivered" }, { icon: Clock, text: "48-hour reminder scheduled" }].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700"><Icon className="h-5 w-5 text-blue-700" />{text}</div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function MaintenanceScreen({ setScreen }) {
  return (
    <div className="mx-auto max-w-xl">
      <Card className="p-8 text-center">
        <AlertTriangle className="mx-auto h-12 w-12 text-amber-600" />
        <h1 className="mt-4 text-2xl font-bold">System Maintenance</h1>
        <p className="mt-2 text-sm leading-6 text-slate-500">Booking is temporarily unavailable. No payment will be charged and no slot is being held during maintenance.</p>
        <Button className="mt-6" icon={Home} onClick={() => setScreen("home")}>Return Home</Button>
      </Card>
    </div>
  );
}

function HelpScreen() {
  return (
    <div className="mx-auto max-w-3xl">
      <Card className="p-6">
        <h1 className="text-2xl font-bold">Help & Support</h1>
        <p className="mt-2 text-sm text-slate-500">Find guidance for registration, OTP verification, payment, booking, and passport status tracking.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {["Registration", "OTP Verification", "Payment", "Appointment Booking"].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 p-4">
              <p className="font-semibold text-slate-900">{item}</p>
              <p className="mt-1 text-sm text-slate-500">Support guidance placeholder.</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function MenuScreen({ setScreen }) {
  return (
    <div className="mx-auto max-w-md">
      <Card className="p-6">
        <h1 className="text-2xl font-bold">Menu</h1>
        <div className="mt-6 space-y-3">
          <Button className="w-full" variant="secondary" icon={Home} onClick={() => setScreen("home")}>Home</Button>
          <Button className="w-full" variant="secondary" icon={Search} onClick={() => setScreen("statusSearch")}>Check Status</Button>
          <Button className="w-full" variant="secondary" icon={HelpCircle} onClick={() => setScreen("help")}>Help</Button>
        </div>
      </Card>
    </div>
  );
}

export default function AMSApplicantPortal() {
  const [screen, setScreen] = useState("home");

  const screens = {
    home: <HomeScreen setScreen={setScreen} />,
    login: <LoginScreen setScreen={setScreen} />,
    register: <RegisterScreen setScreen={setScreen} />,
    otp: <OtpScreen setScreen={setScreen} />,
    dashboard: <DashboardScreen setScreen={setScreen} />,
    formGate: <FormGateScreen setScreen={setScreen} />,
    payment: <PaymentScreen setScreen={setScreen} />,
    paymentProcessing: <PaymentProcessingScreen setScreen={setScreen} />,
    calendar: <CalendarScreen setScreen={setScreen} />,
    confirm: <ConfirmScreen setScreen={setScreen} />,
    success: <SuccessScreen setScreen={setScreen} />,
    statusSearch: <StatusSearchScreen setScreen={setScreen} />,
    statusTimeline: <StatusTimelineScreen />,
    appointments: <AppointmentsScreen />,
    maintenance: <MaintenanceScreen setScreen={setScreen} />,
    help: <HelpScreen />,
    menu: <MenuScreen setScreen={setScreen} />,
  };

  const previewScreens = ["home", "register", "otp", "dashboard", "formGate", "payment", "calendar", "success", "appointments", "statusSearch", "maintenance"];

  return (
    <Shell setScreen={setScreen}>
      <div className="mb-6 flex flex-wrap items-center gap-2">
        {previewScreens.map((item) => (
          <button key={item} type="button" onClick={() => setScreen(item)} className={cn("rounded-full px-3 py-1.5 text-xs font-semibold capitalize", screen === item ? "bg-blue-700 text-white" : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50")}>{item.replace(/([A-Z])/g, " $1")}</button>
        ))}
      </div>
      {screens[screen] || screens.home}
    </Shell>
  );
}
