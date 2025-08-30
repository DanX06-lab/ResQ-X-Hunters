import React from 'react';

const AmbulanceBooking = () => {
    return (
        <div style={styles.container}>
            <div style={styles.headerRow}>
                <span style={styles.title}>Ambulance</span>
                <span style={styles.closeBtn}>&#10006;</span>
            </div>
            <div style={styles.infoText}>
                Medical emergency leading to its peak
            </div>
            <button style={styles.bookBtn}>Book</button>
            <div style={styles.contactText}>
                click here to book ambulance
            </div>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#1f2937',
        margin: '5vh 0',
        borderRadius: '4vw',
        padding: '6vw 4vw',
        width: '90vw',
        boxSizing: 'border-box',
        boxShadow: '0 0 10px rgba(234, 42, 51, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    headerRow: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: '2vh',
        borderBottom: '0.4vh solid #333',
        marginBottom: '4vh',
    },
    title: {
        fontSize: '6vw',
        fontWeight: 'bold',
        color: '#ea2a33',
        letterSpacing: '1vw',
        fontFamily: 'cursive, Arial, sans-serif',
    },
    closeBtn: {
        fontSize: '7vw',
        color: '#ea2a33',
        cursor: 'pointer',
        userSelect: 'none',
    },
    infoText: {
        width: '100%',
        fontSize: '4vw',
        textAlign: 'center',
        marginBottom: '5vw',
    },
    bookBtn: {
        backgroundColor: '#ea2a33',
        color: 'white',
        padding: '2.5vw',
        width: '75vw',
        maxWidth: '300px',
        fontSize: '5vw',
        border: 'none',
        borderRadius: '2vw',
        fontWeight: 'bold',
        boxShadow: '0 0 10px #ea2a33bb',
        margin: '2vw 0',
        cursor: 'pointer',
        fontFamily: 'inherit',
        transition: 'background 0.2s',
    },
    contactText: {
        width: '100%',
        textAlign: 'center',
        fontSize: '4vw',
        marginBottom: '2vh',
    },
};

export default AmbulanceBooking;
