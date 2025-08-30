import React from 'react';

const CreateAccount = () => {
  return (
    <form style={styles.glassCard}>
      <h2 style={styles.heading}>Create Account</h2>

      <div style={styles.formGroup}>
        <label htmlFor="email" style={styles.label}>Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          autoComplete="email"
          required
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label htmlFor="pass" style={styles.label}>Pass</label>
        <input
          type="password"
          id="pass"
          placeholder="Enter a password"
          autoComplete="new-password"
          required
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label htmlFor="confpass" style={styles.label}>Confirm</label>
        <input
          type="password"
          id="confpass"
          placeholder="Confirm password"
          autoComplete="new-password"
          required
          style={styles.input}
        />
      </div>

      <button type="submit" style={styles.signupBtn}>Sign Up</button>
    </form>
  );
};

const styles = {
  glassCard: {
    width: '90vw',
    maxWidth: 380,
    backgroundColor: 'rgba(31, 41, 55, 0.65)',
    boxShadow: '0 8px 40px rgba(234, 42, 53, 0.33)',
    borderRadius: '6vw',
    padding: '10vw 8vw 14vw 8vw',
    backdropFilter: 'blur(8px)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontFamily: 'cursive, Arial, sans-serif',
    fontSize: '6vw',
    color: '#ea2a33',
    marginBottom: '8vw',
    letterSpacing: '3px',
    textAlign: 'center',
  },
  formGroup: {
    width: '100%',
    marginBottom: '6vw',
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    color: '#ea2a33',
    fontSize: '4vw',
    marginRight: '3vw',
    width: '30%',
    minWidth: 90,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.14)',
    border: '0.4vw solid #ea2a33',
    color: 'white',
    padding: '4vw',
    borderRadius: '4vw',
    fontSize: '4vw',
    fontFamily: 'inherit',
    outline: 'none',
    boxShadow: '0 0 0.8vw #ea2a3333',
    transition: 'border 0.2s',
  },
  signupBtn: {
    width: '100%',
    marginTop: '9vw',
    padding: '5vw 0',
    backgroundImage: 'linear-gradient(90deg, #ea2a33 40%, rgba(255,255,255,0) 100%)',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '5vw',
    borderRadius: '6vw',
    border: 'none',
    letterSpacing: '3px',
    boxShadow: '0 1vw 3vw rgba(234, 42, 53, 0.33)',
    cursor: 'pointer',
    transition: 'background 0.2s',
    textShadow: '0 0 1vw rgba(234, 42, 53, 0.47)',
  },
  // Responsive styles can be added through CSS or CSS-in-JS libraries if needed
};

export default CreateAccount;
