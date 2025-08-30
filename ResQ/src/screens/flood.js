import React from 'react';

const FloodEmergency = () => {
    return (
        <div style={styles.container}>
            <div style={styles.headerRow}>
                <span style={styles.backArrow}>
                    <a href="services.html" style={styles.link}>&#8592;</a>
                </span>
                <span style={styles.title}>Flood</span>
            </div>
            <div style={styles.floodIcon}>&#127754;</div>
            <div style={styles.infoText}>Rescue aren't reaching you to save?</div>
            <button style={styles.rescueBtn}>Rescue team</button>
            <div style={styles.contactText}>click here.</div>
            <div style={styles.locationNote}>
                Make your location is <b>on</b>
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
    floodIcon: {
        fontSize: '10vw',
        margin: '3vh 0',
        color: '#ea2a33',
        textAlign: 'center',
    },
    infoText: {
        width: '100%',
        textAlign: 'center',
        fontSize: '4vw',
        marginBottom: '2vw',
    },
    rescueBtn: {
        backgroundColor: '#ea2a33',
        color: 'white',
        padding: '2.5vw',
        width: '85vw',
        maxWidth: '340px',
        fontSize: '5vw',
        border: 'none',
        borderRadius: '2vw',
        fontWeight: 'bold',
        boxShadow: '0 0 10px #ea2a33bb',
        margin: '2vh 0 1vh 0',
        cursor: 'pointer',
    },
    contactText: {
        width: '100%',
        textAlign: 'center',
        fontSize: '4vw',
        marginBottom: '4vh',
    },
    locationNote: {
        fontSize: '4vw',
        color: '#ea2a33',
        marginTop: '3vh',
        fontStyle: 'italic',
        fontWeight: 'bold',
        textAlign: 'center',
    },
};

export default FloodEmergency;
