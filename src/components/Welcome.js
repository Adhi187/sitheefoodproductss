import React from "react";

function Welcome({ username }) {
  return (
    <div style={styles.container}>
      <h2>Welcome, {username}!</h2>
      <p>You have successfully logged in to Sithee Food Products.</p>
    </div>
  );
}

const styles = {
  container: { maxWidth: 400, margin: "100px auto", padding: 20, border: "1px solid #ccc", borderRadius: 8, textAlign: "center" }
};

export default Welcome; 