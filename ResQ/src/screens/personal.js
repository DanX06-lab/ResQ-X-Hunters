import React from 'react';

const PersonalInfo = () => {
    return (
        <form style={styles.glassCard}>
            <h2 style={styles.heading}>Personal info</h2>
            <div style={styles.ownInfoLabel}>Own info</div>

            <div style={styles.formGroup}>
                <label htmlFor="name" style={styles.label}>Name</label>
                <input id="name" type="text" placeholder="Your Name" required style={styles.input} />
            </div>

            <div style={styles.formGroup}>
                <label htmlFor="bod" style={styles.label}>BOD</label>
                <input id="bod" type="date" required style={styles.input} />
            </div>

            <div style={styles.formGroup}>
                <label htmlFor="gender" style={styles.label}>Gender</label>
                <input id="gender" type="text" placeholder="Gender" required style={styles.input} />
            </div>

            <div style={styles.formGroup}>
                <label htmlFor="email" style={styles.label}>Email</label>
                <input id="email" type="email" placeholder="Your Email" required style={styles.input} />
            </div>

            <div style={styles.formGroup}>
                <label htmlFor="phone" style={styles.label}>Ph No.</label>
                <input id="phone" type="tel" placeholder="Your Phone Number" required style={styles.input} />
            </div>

            <div style={styles.formGroup}>
                <label htmlFor="address" style={styles.label}>Main address</label>
                <textarea id="address" placeholder="Your Address" required style={styles.textarea} />
            </div>

            <div style={styles.formGroup}>
                <label htmlFor="blood" style={styles.label}>Blood grp</label>
                <input id="blood" type="text" placeholder="Your Blood Group" required style={styles.input} />
            </div>

            <button type="submit" style={styles.submitButton}>Submit</button>
            <button type="button" style={styles.addButton}>+ Add other member’s detail</button>
        </form>
    );
};

const styles = {
    glassCard: {
        width: '94vw',
        maxWidth: 420,
        backgroundColor: 'rgba(31, 41, 55, 0.68)',
        boxShadow: '0 0 40px rgba(234, 42, 53, 0.33)',
        borderRadius: '6vw',
        padding: '8vw 5vw',
        backdropFilter: 'blur(7px)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Arial, sans-serif',
    },
    heading: {
        fontFamily: 'cursive, Arial, sans-serif',
        fontSize: '6vw',
        color: '#ea2a33',
        marginBottom: '6vw',
        marginTop: '2vw',
        textAlign: 'center',
    },
    ownInfoLabel: {
        fontSize: '4.3vw',
        color: '#ea2a33',
        fontWeight: 'bold',
        letterSpacing: '1px',
        marginBottom: '2vw',
    },
    formGroup: {
        marginBottom: '5vw',
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        fontSize: '4vw',
        color: 'white',
        marginBottom: '1.3vw',
        fontWeight: 500,
    },
    input: {
        padding: '4vw',
        fontSize: '4vw',
        borderRadius: '4vw',
        border: '0.4vw solid #ea2a33',
        backgroundColor: 'rgba(255, 255, 255, 0.10)',
        color: 'white',
        outline: 'none',
        transition: 'border-color 0.2s',
        fontFamily: 'inherit',
    },
    textarea: {
        padding: '4vw',
        fontSize: '4vw',
        borderRadius: '4vw',
        border: '0.4vw solid #ea2a33',
        backgroundColor: 'rgba(255, 255, 255, 0.10)',
        color: 'white',
        outline: 'none',
        resize: 'vertical',
        minHeight: '12vw',
        maxHeight: '30vw',
        transition: 'border-color 0.2s',
        fontFamily: 'inherit',
    },
    submitButton: {
        marginTop: '6vw',
        width: '100%',
        padding: '4vw',
        borderRadius: '6vw',
        backgroundImage: 'linear-gradient(90deg, #ea2a33 40%, rgba(255, 255, 255, 0) 100%)',
        color: 'white',
        fontSize: '5vw',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 0 20px rgba(234, 42, 53, 0.4)',
        fontFamily: 'inherit',
    },
    addButton: {
        marginTop: '3vw',
        width: '100%',
        padding: '4vw',
        borderRadius: '6vw',
        backgroundImage: 'linear-gradient(90deg, #ea2a33 40%, rgba(255, 255, 255, 0) 100%)',
        color: 'white',
        fontSize: '4vw',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 0 15px rgba(234, 42, 53, 0.3)',
        fontFamily: 'inherit',
    },
    '@media (max-width: 500px)': {
        glassCard: {
            padding: '10vw 3vw',
            borderRadius: '8vw',
        },
        heading: {
            fontSize: '7vw',
        },
        ownInfoLabel: {
            fontSize: '5vw',
        },
        label: {
            fontSize: '5vw',
        },
        input: {
            fontSize: '5vw',
            padding: '5vw',
            borderRadius: '6vw',
        },
        textarea: {
            fontSize: '5vw',
            padding: '5vw',
            borderRadius: '6vw',
        },
        submitButton: {
            fontSize: '6vw',
            borderRadius: '8vw',
            padding: '5vw',
        },
        addButton: {
            fontSize: '5vw',
            borderRadius: '7vw',
            padding: '5vw',
        },
    },
};

export default PersonalInfo;
