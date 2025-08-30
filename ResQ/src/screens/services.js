import React from 'react';

const ServiceEmergency = () => {
    const options = [
        { label: "Fire", icon: "🔥", link: "fire" },
        { label: "Flood", icon: "🌎", link: "flood" },
        { label: "Medical", icon: "⚕️", link: "hospital" },
        { label: "Crime", icon: "🛠️", link: "crime" },
        { label: "Blood camp", icon: "💧", link: "blood" },
    ];

    return (
        <div style={styles.container}>
            <div style={styles.headerRow}>
                <span style={styles.backArrow}>
                    <a href="home" style={styles.link} aria-label="Back">&#8592;</a>
                </span>
                <div style={styles.title}>Service</div>
            </div>
            <div style={styles.sectionHeading}>What kind of emergency</div>

            <div style={styles.emergencyRow}>
                {options.map(({ label, icon, link }) => (
                    <div key={label} style={styles.emergencyOption}>
                        <div style={styles.iconCircle}>
                            <a href={link} style={styles.iconLink} aria-label={label}>
                                {icon}
                            </a>
                        </div>
                        <div style={styles.label}>{label}</div>
                    </div>
                ))}
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
        boxShadow: '0 0 10px rgba(234, 42, 53, 0.33)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
    },
    headerRow: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '0.4vh solid #333',
        marginBottom: '5vh',
        paddingBottom: '2vh',
    },
    backArrow: {
        fontSize: '8vw',
        marginRight: '4vw',
        userSelect: 'none',
    },
    link: {
        color: '#ea2a33',
        textDecoration: 'none',
        fontSize: '8vw',
    },
    title: {
        fontSize: '6vw',
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
        letterSpacing: '1vw',
        fontFamily: 'cursive, Arial, sans-serif',
        color: '#ea2a33',
    },
    sectionHeading: {
        fontSize: '5vw',
        fontWeight: 'bold',
        marginBottom: '6vh',
        textAlign: 'center',
        letterSpacing: '0.6vw',
        color: '#ea2a33',
    },
    emergencyRow: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        gap: '6vw',
        width: '100%',
    },
    emergencyOption: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        width: '28vw',
        userSelect: 'none',
    },
    iconCircle: {
        width: '16vw',
        height: '16vw',
        backgroundColor: '#ea2a33',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '2vh',
        fontSize: '8vw',
        boxShadow: '0 0 8px #ea2a33aa',
    },
    iconLink: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '8vw',
        lineHeight: '1',
    },
    label: {
        fontSize: '4vw',
        fontFamily: 'Lora, Arial, sans-serif',
        fontWeight: 600,
        textAlign: 'center',
        userSelect: 'none',
    },
};

export default ServiceEmergency;
