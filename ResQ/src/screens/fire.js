import React, { useState } from 'react';

const FireEmergency = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    const handleOutsideClick = (e) => {
        if (e.target.id === 'fireModalOverlay') {
            closeModal();
        }
    };

    return (
        <>
            <div style={styles.container}>
                <div style={styles.headerRow}>
                    <span style={styles.backArrow}>
                        <a href="services.html" style={styles.link}>&#8592;</a>
                    </span>
                    <span style={styles.title}>FIRE</span>
                </div>
                <div style={styles.fireIcon}>&#128293;</div>
                <div style={styles.infoText}>102 does not working out?</div>
                <div style={styles.emergencyText}>Welcome to the real time emergency solution</div>
                <button style={styles.fireBrigadeBtn} onClick={openModal}>Fire brigade</button>
                <div style={styles.contactText}>click above to contact nearest fire brigade</div>
                <div style={styles.locationNote}>Make sure your location is ON</div>
            </div>

            {modalVisible && (
                <div id="fireModalOverlay" style={styles.modal} onClick={handleOutsideClick}>
                    <div style={styles.popupContent}>
                        <div style={styles.popupHeader}>
                            <span>Fire brigade</span>
                            <button style={styles.popupCloseBtn} onClick={closeModal}>&times;</button>
                        </div>
                        <div style={styles.popupMain}>
                            Call fire brigade,<br />
                            before watching your future burn infront of you
                            <div style={styles.popupQuestion}>
                                Are you sure?<br />
                                Sure to book fire brigade?
                            </div>
                        </div>
                        <div style={styles.popupActions}>
                            <button style={styles.popupBtn}>Book</button>
                            <button style={styles.popupBtn} onClick={closeModal}>Decline</button>
                        </div>
                    </div>
                </div>
            )}
        </>
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
    fireIcon: {
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
    emergencyText: {
        width: '100%',
        textAlign: 'center',
        fontSize: '5vw',
        fontWeight: 'bold',
        marginBottom: '2vw',
    },
    fireBrigadeBtn: {
        fontSize: '6vw',
        fontWeight: 'bold',
        backgroundColor: '#ea2a33',
        color: 'whitesmoke',
        border: '2px solid #ea2a33',
        borderRadius: '2vw',
        margin: '2vh 0 1vh 0',
        padding: '3vw 0',
        width: '85vw',
        maxWidth: '340px',
        boxShadow: '0 0 10px #ea2a33bb',
        transition: 'background 0.2s',
        cursor: 'pointer',
        textAlign: 'center',
        letterSpacing: '2px',
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
        backgroundColor: '#fff',
        border: '2px solid #ea2a33',
        color: '#222',
        borderRadius: 14,
        boxShadow: '0 4px 18px #ea2a33aa',
        width: '85vw',
        maxWidth: 350,
        paddingBottom: 18,
        overflow: 'hidden',
        textAlign: 'center',
        position: 'relative',
    },
    popupHeader: {
        fontSize: '5vw',
        fontWeight: 'bold',
        backgroundColor: '#fff',
        color: '#ea2a33',
        padding: '13px 18px 7px 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '2px solid #ea2a33',
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
        padding: '10px 12px 8px 12px',
        fontSize: '4.4vw',
        textAlign: 'left',
        lineHeight: 1.3,
    },
    popupQuestion: {
        marginTop: 12,
        fontSize: '4.6vw',
        fontWeight: 'bold',
        color: '#ea2a33',
    },
    popupActions: {
        display: 'flex',
        justifyContent: 'center',
        gap: 15,
        marginTop: 15,
    },
    popupBtn: {
        backgroundColor: '#fff',
        color: '#ea2a33',
        border: '2px solid #ea2a33',
        borderRadius: 7,
        fontWeight: 'bold',
        fontSize: '4.6vw',
        padding: '10px 0',
        cursor: 'pointer',
        width: '38vw',
        maxWidth: 120,
        fontFamily: 'inherit',
        transition: 'background 0.13s',
    },
};

export default FireEmergency;
