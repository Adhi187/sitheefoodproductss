import React, { useState } from "react";

function Signup({ onSignup, onShowLogin }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setError("");
    // Store user data in localStorage
    const userData = {
      firstName,
      lastName,
      email,
      password,
      phone,
      address,
      city,
      state,
      pincode
    };
    
    localStorage.setItem('userData', JSON.stringify(userData));
    alert("Registration successful! Please login.");
    onShowLogin(); // Switch to login page
  };

  return (
    <div style={styles.bg}>
      <div style={styles.card}>
        <div style={styles.logoArea}>
          <span style={styles.logo}>🍲</span>
          <h1 style={styles.title}>Sithee Food Products</h1>
          <h2 style={styles.subtitle}>Create your account</h2>
        </div>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.row}>
            <div style={styles.column}>
              <label style={styles.label} htmlFor="signup-firstname">First Name *</label>
              <input
                id="signup-firstname"
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                style={styles.input}
                autoComplete="given-name"
                required
              />
            </div>
            <div style={styles.column}>
              <label style={styles.label} htmlFor="signup-lastname">Last Name *</label>
              <input
                id="signup-lastname"
                type="text"
                placeholder="Enter your last name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                style={styles.input}
                autoComplete="family-name"
                required
              />
            </div>
          </div>
          
          <label style={styles.label} htmlFor="signup-email">Email *</label>
          <input
            id="signup-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={styles.input}
            autoComplete="email"
            required
          />
          
          <div style={styles.row}>
            <div style={styles.column}>
              <label style={styles.label} htmlFor="signup-password">Password *</label>
              <input
                id="signup-password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={styles.input}
                autoComplete="new-password"
                required
              />
            </div>
            <div style={styles.column}>
              <label style={styles.label} htmlFor="signup-confirm-password">Confirm Password *</label>
              <input
                id="signup-confirm-password"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                style={styles.input}
                autoComplete="new-password"
                required
              />
            </div>
          </div>

          <label style={styles.label} htmlFor="signup-phone">Phone Number</label>
          <input
            id="signup-phone"
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            style={styles.input}
            autoComplete="tel"
          />

          <label style={styles.label} htmlFor="signup-address">Address</label>
          <input
            id="signup-address"
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={e => setAddress(e.target.value)}
            style={styles.input}
            autoComplete="street-address"
          />

          <div style={styles.row}>
            <div style={styles.column}>
              <label style={styles.label} htmlFor="signup-city">City</label>
              <input
                id="signup-city"
                type="text"
                placeholder="Enter your city"
                value={city}
                onChange={e => setCity(e.target.value)}
                style={styles.input}
                autoComplete="address-level2"
              />
            </div>
            <div style={styles.column}>
              <label style={styles.label} htmlFor="signup-state">State</label>
              <input
                id="signup-state"
                type="text"
                placeholder="Enter your state"
                value={state}
                onChange={e => setState(e.target.value)}
                style={styles.input}
                autoComplete="address-level1"
              />
            </div>
          </div>

          <label style={styles.label} htmlFor="signup-pincode">Pincode</label>
          <input
            id="signup-pincode"
            type="text"
            placeholder="Enter your pincode"
            value={pincode}
            onChange={e => setPincode(e.target.value)}
            style={styles.input}
            autoComplete="postal-code"
          />

          {error && <div style={styles.error}>{error}</div>}
          <button 
            type="submit" 
            style={styles.button}
          >
            Sign Up
          </button>
        </form>
        <div style={styles.footerText}>
          Already have an account?{' '}
          <span style={styles.link} onClick={onShowLogin} tabIndex={0} role="button">Login</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  bg: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #e0f7fa 0%, #b2d8f7 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  card: {
    background: "#fff",
    borderRadius: 16,
    boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
    padding: 20,
    maxWidth: 500,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logoArea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 16,
  },
  logo: {
    fontSize: 40,
    marginBottom: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    margin: 0,
    color: "#1a3c34",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 400,
    color: "#3a6b5a",
    margin: "6px 0 0 0",
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 8,
    marginBottom: 8,
  },
  row: {
    display: "flex",
    gap: 12,
  },
  column: {
    flex: 1,
  },
  label: {
    fontWeight: 500,
    color: "#1a3c34",
    marginBottom: 2,
    fontSize: 13,
  },
  input: {
    padding: "8px 10px",
    fontSize: 15,
    border: "1px solid #b2d8f7",
    borderRadius: 6,
    outline: "none",
    transition: "border 0.2s",
    marginBottom: 2,
    width: "100%",
    boxSizing: "border-box",
  },
  button: {
    padding: "10px 0",
    fontSize: 15,
    background: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    fontWeight: 600,
    cursor: "pointer",
    marginTop: 6,
    boxShadow: "0 2px 8px rgba(40,167,69,0.08)",
    transition: "background 0.2s",
  },
  error: {
    color: "#d32f2f",
    background: "#fff0f0",
    borderRadius: 4,
    padding: "5px 8px",
    fontSize: 13,
    marginBottom: 2,
    textAlign: "center",
  },
  footerText: {
    marginTop: 6,
    fontSize: 13,
    color: "#3a6b5a",
    textAlign: "center",
  },
  link: {
    color: "#28a745",
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "underline",
    marginLeft: 4,
  },
};

export default Signup; 