import React, { useState } from 'react';

const HospitalBedBooking = () => {
    const [popupVisible, setPopupVisible] = useState(false);

    const openPopup = () => setPopupVisible(true);
    const closePopup = () => setPopupVisible(false);

    const handleOutsideClick = (e) => {
        if (e.target.id === 'modal-overlay') {
            closePopup();
        }
    };

    return (
        <>
            <div style={styles.container}>
                <div style={styles.headerRow}>
                    <a href="hospital.html" style={styles.backArrow}>&#8592;</a>
                    <span style={styles.title}>Hospital bed booking</span>
                </div>
                <div style={styles.sectionHeading}>• nearest hospital</div>
                <div style={styles.hospitalList}>
                    <div style={styles.hospitalItem}>
                        <div style={styles.hospitalRow}>
                            <span style={styles.hospitalNum}>①</span>
                            <span style={styles.hospitalName}>Abc</span>
                            <button style={styles.bookBtn} onClick={openPopup}>book</button>
                        </div>
                        <div style={styles.hospitalLoc}>location: abcd efg</div>
                    </div>
                    <div style={styles.hospitalItem}>
                        <div style={styles.hospitalRow}>
                            <span style={styles.hospitalNum}>②</span>
                            <span style={styles.hospitalName}>xyz</span>
                            <button style={styles.bookBtn}>book</button>
                        </div>
                        <div style={styles.hospitalLoc}>location: cde fgh</div>
                    </div>
                    <div style={styles.hospitalItem}>
                        <div style={styles.hospitalRow}>
                            <span style={styles.hospitalNum}>③</span>
                            <span style={styles.hospitalName}>ggp</span>
                            <button style={styles.bookBtn}>book</button>
                        </div>
                        <div style={styles.hospitalLoc}>location: gh---</div>
                    </div>
                    <div style={styles.hospitalItem}>
                        <div style={styles.hospitalRow}>
                            <span style={styles.hospitalNum}>④</span>
                            <span style={styles.hospitalName}>----</span>
                            <button style={{ ...styles.bookBtn, background: '#999' }} disabled>book</button>
                        </div>
                        <div style={styles.hospitalLoc}>location: --</div>
                    </div>
                </div>
            </div>

            {/* Popup Modal */}
            {popupVisible && (
                <div
                    id="modal-overlay"
                    style={styles.modal}
                    onClick={handleOutsideClick}
                >
                    <div style={styles.popupContent}>
                        <div style={styles.popupHeader}>
                            <span>ABC Hospital</span>
                            <button style={styles.popupCloseBtn} onClick={closePopup}>&times;</button>
                        </div>
                        <div style={styles.popupMain}>
                            Availability<br />
                            Beds available:
                            <div style={styles.bedsBox}>2</div>
                        </div>
                        <div style={styles.popupActions}>
                            <button style={styles.popupBtn}>BOOK</button>
                            <button style={styles.popupBtn}>
                                <span style={styles.popupHelpIcon}>&#10067;</span>HELP
                            </button>
                        </div>
                        <div style={styles.popupNote}>
                            click here to contact<br />that specific hospital
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

const styles = {
    container: {
        background: '#1f2937',
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
        textDecoration: 'none',
        cursor: 'pointer',
        userSelect: 'none',
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
    hospitalList: {
        width: '100%',
        margin: 0,
        padding: 0,
    },
    hospitalItem: {
        background: '#262626',
        borderRadius: '2vw',
        marginBottom: '3vw',
        padding: '3vw',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 2px 8px #ea2a3322',
    },
    hospitalRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    hospitalName: {
        fontSize: '4.6vw',
        fontWeight: 'bold',
        color: '#fff',
        marginRight: '2vw',
    },
    bookBtn: {
        backgroundColor: '#ea2a33',
        color: 'white',
        border: 'none',
        borderRadius: '1vw',
        fontSize: '4vw',
        fontWeight: 'bold',
        padding: '1vw 7vw',
        cursor: 'pointer',
        boxShadow: '0 2px 8px #ea2a33aa',
    },
    hospitalLoc: {
        fontSize: '3.7vw',
        color: '#ffa',
        margin: '2vw 0 0 0',
        fontStyle: 'italic',
    },
    hospitalNum: {
        fontSize: '4vw',
        color: '#ea2a33',
        fontWeight: 'bold',
        marginRight: '1vw',
    },
    modal: {
        display: 'flex',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
    },
    popupContent: {
        background: '#fff',
        color: '#222',
        borderRadius: 14,
        border: '2px solid #ea2a33',
        boxShadow: '0 4px 28px #ea2a33aa',
        width: '85vw',
        maxWidth: 340,
        paddingBottom: 25,
        overflow: 'hidden',
        textAlign: 'center',
        position: 'relative',
    },
    popupHeader: {
        fontSize: '5vw',
        fontWeight: 'bold',
        borderBottom: '2px solid #ea2a33',
        background: '#fff',
        color: '#ea2a33',
        padding: '13px 18px 9px 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    popupCloseBtn: {
        fontSize: '6vw',
        fontWeight: 'bold',
        color: '#ea2a33',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        userSelect: 'none',
    },
    popupMain: {
        padding: '17px 14px 8px 14px',
        fontSize: '4.4vw',
        textAlign: 'left',
    },
    bedsBox: {
        margin: '12px 0',
        background: '#f3f3f3',
        fontSize: '4.4vw',
        fontWeight: 'bold',
        color: '#222',
        padding: '10px 0',
        textAlign: 'center',
        borderRadius: 7,
        border: '2px solid #ea2a33',
        width: '54vw',
        marginLeft: 'auto',
        marginRight: 'auto',
        letterSpacing: 2,
    },
    popupActions: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 12,
        width: '80vw',
        maxWidth: 290,
        margin: '15px auto 0 auto',
    },
    popupBtn: {
        background: '#fff',
        color: '#ea2a33',
        border: '2px solid #ea2a33',
        borderRadius: 7,
        fontWeight: 'bold',
        fontSize: '4.5vw',
        padding: '10px 0',
        cursor: 'pointer',
        width: '45%',
        boxSizing: 'border-box',
        fontFamily: 'inherit',
        transition: 'background 0.15s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    popupNote: {
        fontSize: '4vw',
        color: '#222',
        marginTop: 14,
        textAlign: 'center',
    },
    popupHelpIcon: {
        fontSize: '4.6vw',
    },
};

export default HospitalBedBooking;
