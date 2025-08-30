import React from 'react';

const Login = () => {
    return (
        <form style={styles.glassCard}>
            <div style={styles.iconTop}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" style={styles.svgIcon}>
                    <circle cx="29" cy="29" r="20" fill="none" stroke="#ea2a33" strokeWidth="2" />
                    <rect x="18" y="25" width="22" height="14" rx="5" fill="none" stroke="#ea2a33" strokeWidth="2" />
                    <circle cx="29" cy="32" r="4" fill="none" stroke="#ea2a33" strokeWidth="2" />
                    <rect x="25" y="22" width="8" height="3" fill="none" stroke="#ea2a33" strokeWidth="2" />
                </svg>
            </div>
            <div style={styles.formGroup}>
                <span style={styles.formIcon} role="img" aria-label="user">&#128100;</span>
                <input type="text" placeholder="Username" autoComplete="username" required style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <span style={styles.formIcon} role="img" aria-label="lock">&#128274;</span>
                <input type="password" placeholder="Password" autoComplete="current-password" required style={styles.input} />
            </div>
            <div style={styles.actionsRow}>
                <label style={styles.label}>
                    <input type="checkbox" style={styles.checkbox} /> Remember me
                </label>
                <a href="#" style={styles.forgotLink}>Forgot Password?</a>
            </div>
            <button type="submit" style={styles.loginBtn}>LOGIN</button>
            <div style={styles.signupText}>
                Don't have an account?
                <a href="signup.html" style={styles.signupLink}> Sign Up</a>
            </div>
        </form>
    );
};

const styles = {
    glassCard: {
        width: '90vw',
        maxWidth: 370,
        background: 'rgba(31, 41, 55, 0.85)',
        borderRadius: '8vw',
        boxShadow: '0 0 24px 3vw #ea2a3360',
        padding: '9vw 6vw 7vw 6vw',
        backdropFilter: 'blur(9px)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        color: 'white',
    },
    iconTop: {
        width: '18vw',
        height: '18vw',
        minWidth: 68,
        minHeight: 68,
        marginBottom: '8vw',
        border: '1.2vw solid #ea2a33',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 40px #ea2a3355, 0 0 9vw #ea2a3388 inset',
        background: 'transparent',
    },
    svgIcon: {
        width: '8vw',
        height: '8vw',
        fill: '#ea2a33',
    },
    formGroup: {
        width: '100%',
        marginBottom: '4vw',
        position: 'relative',
    },
    formIcon: {
        position: 'absolute',
        top: '50%',
        left: 19,
        transform: 'translateY(-50%)',
        fontSize: '5vw',
        color: '#bf1a24',
        opacity: 0.88,
        pointerEvents: 'none',
    },
    input: {
        width: '100%',
        background: 'rgba(255, 255, 255, 0.01)',
        borderRadius: '3vw',
        border: '0.6vw solid #ea2a33',
        outline: 'none',
        fontSize: '4vw',
        color: 'white',
        padding: '14px 16px 14px 48px',
        boxSizing: 'border-box',
        boxShadow: '0 0 8px #ea2a33, 0 0 0px #ea2a33 inset',
        fontFamily: 'inherit',
        transition: 'box-shadow .12s, border-color .12s',
    },
    actionsRow: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '0 0 3vw 0',
        fontSize: '3.6vw',
    },
    label: {
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        fontSize: '3.6vw',
        letterSpacing: '0.02em',
    },
    checkbox: {
        accentColor: '#ea2a33',
        marginRight: 9,
        width: '4vw',
        height: '4vw',
    },
    forgotLink: {
        color: '#ea2a33',
        fontWeight: 'bold',
        fontSize: '3.4vw',
        textDecoration: 'none',
        marginLeft: 6,
        transition: 'color 0.18s',
    },
    loginBtn: {
        width: '100%',
        padding: '3vw 0',
        margin: '3vw 0 2vw 0',
        borderRadius: '8vw',
        background: 'linear-gradient(90deg, #ea2a33 40%, #fff0 100%)',
        color: 'white',
        border: 'none',
        fontSize: '5vw',
        fontWeight: 'bold',
        letterSpacing: '3px',
        boxShadow: '0 0.8vw 2vw #ea2a3344',
        cursor: 'pointer',
        textShadow: '0 0 1vw #ea2a3388',
        transition: 'background 0.18s',
    },
    signupText: {
        marginTop: '6vw',
        fontSize: '3.8vw',
        color: '#ea2a33',
        textAlign: 'center',
        width: '100%',
        userSelect: 'none',
    },
    signupLink: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 10,
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'color 0.13s',
    },
};

export default Login;
