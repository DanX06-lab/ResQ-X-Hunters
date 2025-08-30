import React from 'react';

const CrimeEmergency = () => {
    return (
        <div style={styles.container}>
            <div style={styles.headerRow}>
                <span style={styles.backArrow}><a href="services.html" style={styles.link}>&#8592;</a></span>
                <span style={styles.title}>CRIME</span>
            </div>
            <button style={styles.callPoliceBtn}>
                CALL<br />POLICE
            </button>
            <div style={styles.infoText}>
                For emergency,<br />
                click above to contact police or to report police.
            </div>
            <div style={styles.locationNote}>
                Make sure your location is on.
            </div>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#1f2937',
        margin: '5vh 0',
        borderRadius: '4vw',
        padding: '6vw 4vw 3vw 4vw',
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
    backArrow: {
        fontSize: '8vw',
        color: '#ea2a33',
        cursor: 'pointer',
        userSelect: 'none',
    },
    link: {
        color: '#ea2a33',
        textDecoration: 'none',
    },
    title: {
        fontSize: '6vw',
        fontWeight: 'bold',
        color: '#ea2a33',
        flex: 1,
        textAlign: 'center',
        letterSpacing: '1vw',
        fontFamily: 'cursive, Arial, sans-serif',
    },
    callPoliceBtn: {
        fontSize: '6vw',
        fontWeight: 'bold',
        backgroundColor: 'red',
        color: 'whitesmoke',
        border: '2px solid #ea2a33',
        borderRadius: '2vw',
        margin: '4vh 0 2.5vh 0',
        padding: '3vw 0',
        width: '80vw',
        maxWidth: '320px',
        boxShadow: '0 2px 12px #ea2a3333',
        transition: 'background 0.2s',
        cursor: 'pointer',
        textAlign: 'center',
        letterSpacing: '2px',
    },
    infoText: {
        color: '#fff',
        marginBottom: '3vh',
        fontSize: '4.5vw',
        textAlign: 'center',
        fontWeight: 500,
        letterSpacing: '0.3vw',
    },
    locationNote: {
        color: '#ea2a33',
        fontSize: '4vw',
        textAlign: 'center',
        marginTop: '5vh',
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
};

export default CrimeEmergency;
