import React, { useState } from "react";

function Login({ onLogin, onShowSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");

    // Check if user exists in localStorage
    const savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
      const userData = JSON.parse(savedUserData);
      if (userData.email === email && userData.password === password) {
        onLogin(userData);
      } else {
        setError("Invalid email or password.");
      }
    } else {
      setError("No user found. Please sign up first.");
    }
  };

  return (
    <div style={styles.bg}>
      <div style={styles.card}>
        <div style={styles.logoArea}>
          <span style={styles.logo}>🍲</span>
          <h1 style={styles.title}>Sithee Food Products</h1>
          <h2 style={styles.subtitle}>Welcome back</h2>
        </div>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label} htmlFor="login-email">Email</label>
          <input
            id="login-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={styles.input}
            autoComplete="email"
            required
          />
          <label style={styles.label} htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={styles.input}
            autoComplete="current-password"
            required
          />
          {error && <div style={styles.error}>{error}</div>}
          <button 
            type="submit" 
            style={styles.button}
          >
            Login
          </button>
        </form>
        <div style={styles.footerText}>
          Don't have an account?{' '}
          <span style={styles.link} onClick={onShowSignup} tabIndex={0} role="button">Sign Up</span>
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
    maxWidth: 370,
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
  },
  button: {
    padding: "10px 0",
    fontSize: 15,
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    fontWeight: 600,
    cursor: "pointer",
    marginTop: 6,
    boxShadow: "0 2px 8px rgba(0,123,255,0.08)",
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
    color: "#007bff",
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "underline",
    marginLeft: 4,
  },
};

export default Login; 