import React from 'react';

const Settings = () => {
    const settingsItems = [
        { icon: '👤', primary: 'ABC', secondary: 'personal info...', hasArrow: true },
        { icon: '🔑', primary: 'Account', hasArrow: false },
        { icon: '🔒', primary: 'Privacy', hasArrow: false },
        { icon: '🌐', primary: 'App language', hasArrow: false },
        { icon: '❓', primary: 'Help', hasArrow: false },
    ];

    return (
        <div style={styles.container}>
            <div style={styles.headerRow}>
                <a href="index.html" style={styles.backArrow} aria-label="Back">&#8592;</a>
                <span style={styles.title}>Settings</span>
                <span style={styles.searchIcon} role="img" aria-label="search">&#128269;</span>
            </div>

            <div style={styles.settingsList}>
                {settingsItems.map((item, index) => (
                    <div key={index} style={styles.settingsItem}>
                        <span style={styles.icon}>{item.icon}</span>
                        <span style={styles.itemContent}>
                            <span style={styles.primary}>{item.primary}</span>
                            {item.secondary && <span style={styles.secondary}>{item.secondary}</span>}
                        </span>
                        {item.hasArrow && <span style={styles.rightArrow}>&#8594;</span>}
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
        padding: '4vw 2vw',
        width: '92vw',
        boxSizing: 'border-box',
        boxShadow: '0 0 8px rgba(234, 42, 51, 0.5)',
        display: 'flex',
        flexDirection: 'column',
    },
    headerRow: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '0.3vh solid #333',
        paddingBottom: '1.5vh',
        marginBottom: '2vh',
    },
    backArrow: {
        fontSize: '7vw',
        color: '#ea2a33',
        marginRight: '1vw',
        textDecoration: 'none',
        cursor: 'pointer',
        userSelect: 'none',
    },
    title: {
        fontFamily: 'cursive, Arial, sans-serif',
        fontSize: '6vw',
        fontWeight: 'bold',
        color: '#ea2a33',
        flex: 1,
        textAlign: 'left',
        letterSpacing: '1vw',
    },
    searchIcon: {
        fontSize: '6vw',
        color: '#ea2a33',
        marginLeft: '1vw',
        cursor: 'pointer',
        userSelect: 'none',
    },
    settingsList: {
        marginTop: '2vh',
        width: '100%',
    },
    settingsItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '3vw 1vw',
        fontSize: '4.7vw',
        cursor: 'pointer',
        borderBottom: '1px solid #444',
    },
    icon: {
        fontSize: '6vw',
        color: '#ea2a33',
        width: '8vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '2vw',
    },
    itemContent: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    primary: {
        fontWeight: 'bold',
        fontSize: '4.7vw',
        color: '#fff',
    },
    secondary: {
        fontSize: '4vw',
        color: '#ddd',
    },
    rightArrow: {
        fontSize: '5vw',
        color: '#ea2a33',
        marginLeft: '3vw',
    },
};

export default Settings;
