import React from 'react';

const DoctorsAppointment = () => {
    return (
        <div style={styles.container}>
            <div style={styles.headerRow}>
                <span style={styles.backArrow}>
                    <a href="hospital.html" style={styles.link}>&#8592;</a>
                </span>
                <span style={styles.title}>Doctor's appointment</span>
            </div>
            <div style={styles.sectionHeading}>• nearest doctor clinic</div>
            <div style={styles.doctorList}>
                <div style={styles.doctorItem}>
                    <div style={styles.doctorRow}>
                        <span style={styles.doctorDot}>•</span>
                        <span style={styles.doctorName}>Abc</span>
                        <button style={styles.bookBtn}>book</button>
                    </div>
                    <div style={styles.doctorDetails}>
                        location: -----<br />
                        time: -----
                    </div>
                </div>
                <div style={styles.doctorItem}>
                    <div style={styles.doctorRow}>
                        <span style={styles.doctorDot}>•</span>
                        <span style={styles.doctorName}>Cdf</span>
                        <button style={styles.bookBtn}>book</button>
                    </div>
                    <div style={styles.doctorDetails}>
                        location: -----<br />
                        time: -----
                    </div>
                </div>
                <div style={styles.doctorItem}>
                    <div style={styles.doctorRow}>
                        <span style={styles.doctorDot}>•</span>
                        <span style={styles.doctorName}>efg</span>
                        <button style={styles.bookBtn}>book</button>
                    </div>
                    <div style={styles.doctorDetails}>
                        location: -----<br />
                        time: -----
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#1f2937',
        margin: '4vh 0',
        borderRadius: '4vw',
        padding: '4vw 2vw',
        width: '92vw',
        boxSizing: 'border-box',
        boxShadow: '0 0 8px rgba(234, 42, 51, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    headerRow: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        paddingBottom: '1.2vh',
        borderBottom: '0.3vh solid #333',
        marginBottom: '3vh',
        fontSize: '5vw',
    },
    backArrow: {
        fontSize: '6vw',
        color: '#ea2a33',
        marginRight: '1vw',
    },
    link: {
        color: '#ea2a33',
        textDecoration: 'none',
    },
    title: {
        color: '#ea2a33',
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'left',
        letterSpacing: '1vw',
        fontFamily: 'cursive, Arial, sans-serif',
    },
    sectionHeading: {
        fontSize: '5vw',
        fontWeight: 'bold',
        color: '#ea2a33',
        margin: '3vw 0 2vw 0',
        width: '100%',
        textAlign: 'left',
    },
    doctorList: {
        width: '100%',
        margin: 0,
        padding: 0,
    },
    doctorItem: {
        backgroundColor: '#262626',
        borderRadius: '2vw',
        marginBottom: '3vw',
        padding: '3vw',
        boxShadow: '0 2px 8px #ea2a3322',
    },
    doctorRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    doctorDot: {
        fontSize: '5vw',
        color: '#ea2a33',
        marginRight: '1vw',
    },
    doctorName: {
        fontSize: '4.6vw',
        fontWeight: 'bold',
        color: '#fff',
        marginRight: '2vw',
    },
    bookBtn: {
        backgroundColor: '#ea2a33',
        color: '#fff',
        border: 'none',
        borderRadius: '1vw',
        fontSize: '4vw',
        fontWeight: 'bold',
        padding: '1vw 7vw',
        cursor: 'pointer',
        boxShadow: '0 2px 8px #ea2a33aa',
    },
    doctorDetails: {
        fontSize: '3.7vw',
        color: '#ffa',
        marginTop: '2vw',
        fontStyle: 'italic',
    },
};

export default DoctorsAppointment;
