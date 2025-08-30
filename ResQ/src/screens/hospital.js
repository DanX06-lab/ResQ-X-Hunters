import React, { useState } from 'react';

const MedicalEmergency = () => {
    const [ambulanceModalVisible, setAmbulanceModalVisible] = useState(false);
    const [confirmModalVisible, setConfirmModalVisible] = useState(false);

    const openAmbulanceModal = () => setAmbulanceModalVisible(true);
    const closeAmbulanceModal = () => setAmbulanceModalVisible(false);

    const openConfirmModal = () => {
        setAmbulanceModalVisible(false);
        setConfirmModalVisible(true);
    };
    const closeConfirmModal = () => setConfirmModalVisible(false);

    const onSureClick = () => {
        setConfirmModalVisible(false);
        alert('Ambulance called!');
        // Implement actual ambulance call logic here
    };

    return (
        <>
            <div style={styles.container}>
                <div style={styles.headerRow}>
                    <a href="services.html" style={styles.backArrow}>&#8592;</a>
                    <span style={styles.title}>Medical</span>
                </div>
                <div style={styles.medicalIcon}>&#x2795;</div>
                <button style={styles.medicalBtn} onClick={openAmbulanceModal}>Ambulance</button>
                <button style={styles.medicalBtn}>
                    <a href="bed.html" style={styles.link}>Hospital bed booking</a>
                </button>
                <button style={styles.medicalBtn}>
                    <a href="doctor.html" style={styles.link}>Doctor's appointment</a>
                </button>
            </div>

            {/* Ambulance Booking Modal */}
            {ambulanceModalVisible && (
                <div style={styles.modal} onClick={() => closeAmbulanceModal()}>
                    <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <div style={styles.popupHeader}>
                            <span>Ambulance</span>
                            <button style={styles.closeBtn} onClick={closeAmbulanceModal}>&times;</button>
                        </div>
                        <div style={styles.popupBody}>
                            Medical emergency leading to its peak
                            <button style={styles.bookBtn} onClick={openConfirmModal}>Book</button>
                            <div style={styles.cardNote}>click here to book ambulance</div>
                        </div>
                    </div>
                </div>
            )}

            {/* Confirmation Modal */}
            {confirmModalVisible && (
                <div style={styles.modal} onClick={() => closeConfirmModal()}>
                    <div style={styles.confirmModalContent} onClick={e => e.stopPropagation()}>
                        <div style={styles.confirmHeader}>
                            <span>Are you sure?</span>
                            <button style={styles.confirmCloseBtn} onClick={closeConfirmModal}>&times;</button>
                        </div>
                        <div style={styles.confirmBody}>
                            Sure to call Ambulance?<br />If yes, hurry up.
                        </div>
                        <div style={styles.confirmActions}>
                            <button style={styles.confirmBtn} onClick={onSureClick}>Sure</button>
                            <button style={styles.confirmBtn} onClick={closeConfirmModal}>Decline</button>
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
        paddingBottom: '2vh',
        borderBottom: '0.4vh solid #333',
        marginBottom: '4vh',
    },
    backArrow: {
        color: '#ea2a33',
        fontSize: '8vw',
        textDecoration: 'none',
        cursor: 'pointer',
        userSelect: 'none',
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
    medicalIcon: {
        fontSize: '9vw',
        margin: '5vh 0 4vh 0',
        color: '#ea2a33',
        padding: '2vw',
        borderRadius: '50%',
        background: 'rgba(234, 42, 51, 0.10)',
        border: '2px solid #ea2a33',
        width: '15vw',
        height: '15vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    medicalBtn: {
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
        margin: '1.5vh 0',
        cursor: 'pointer',
        textAlign: 'center',
        fontFamily: 'inherit',
        transition: 'background 0.2s',
    },
    link: {
        color: 'inherit',
        textDecoration: 'none',
    },
    modal: {
        display: 'flex',
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
    },
    modalContent: {
        backgroundColor: '#f8f8f8',
        width: '88vw',
        maxWidth: '370px',
        borderRadius: '18px',
        boxShadow: '0 2px 20px #ea2a33aa',
        padding: 0,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        border: '2px solid #ea2a33',
        color: '#222',
    },
    popupHeader: {
        backgroundColor: '#ea2a33',
        color: '#fff',
        fontFamily: '\'Arial Black\', Arial, sans-serif',
        fontSize: '6vw',
        fontWeight: 'bold',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopLeftRadius: '16px',
        borderTopRightRadius: '16px',
    },
    closeBtn: {
        fontSize: '7vw',
        fontWeight: 'bold',
        color: '#fff',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        lineHeight: 1,
        marginLeft: '14px',
        userSelect: 'none',
    },
    popupBody: {
        padding: '22px 18px 10px 18px',
        textAlign: 'center',
        fontSize: '4.6vw',
    },
    bookBtn: {
        backgroundColor: '#ea2a33',
        color: 'white',
        width: '82vw',
        maxWidth: '310px',
        margin: '18px auto 8px auto',
        display: 'block',
        border: 'none',
        borderRadius: '9px',
        fontSize: '6vw',
        fontWeight: 'bold',
        padding: '12px 4vw',
        letterSpacing: '2px',
        boxShadow: '0 2px 10px #ea2a33bb',
        cursor: 'pointer',
        fontFamily: 'inherit',
    },
    cardNote: {
        paddingBottom: '16px',
        fontSize: '4vw',
        color: '#222',
        textAlign: 'center',
    },
    confirmModalContent: {
        backgroundColor: '#fff',
        color: '#222',
        borderRadius: '14px',
        padding: 0,
        border: '2px solid #ea2a33',
        boxShadow: '0 2px 18px #ea2a33aa',
        width: '84vw',
        maxWidth: '340px',
        overflow: 'hidden',
    },
    confirmHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '5.7vw',
        fontWeight: 'bold',
        backgroundColor: '#ea2a33',
        color: '#fff',
        padding: '13px 18px',
        borderTopLeftRadius: '12px',
        borderTopRightRadius: '12px',
        letterSpacing: '2px',
        fontFamily: '\'Arial Black\', Arial, sans-serif',
    },
    confirmCloseBtn: {
        fontSize: '6vw',
        color: '#fff',
        fontWeight: 'bold',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        userSelect: 'none',
    },
    confirmBody: {
        padding: '20px 18px 10px 18px',
        textAlign: 'center',
        fontSize: '5vw',
        fontFamily: '\'Segoe Script\', cursive, Arial, sans-serif',
        lineHeight: 1.4,
    },
    confirmActions: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '20px 12px 16px 12px',
        backgroundColor: '#f7f7f7',
    },
    confirmBtn: {
        border: '2px solid #ea2a33',
        backgroundColor: '#fff',
        fontWeight: 'bold',
        color: '#ea2a33',
        fontSize: '5vw',
        borderRadius: '7px',
        padding: '14px 20px',
        width: '38vw',
        maxWidth: '120px',
        cursor: 'pointer',
        boxSizing: 'border-box',
        margin: '0 6px',
        fontFamily: 'inherit',
    }
};

export default MedicalEmergency;
