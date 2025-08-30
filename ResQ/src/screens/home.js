import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Home = () => {
    const scrollAnim = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();

    useEffect(() => {
        const animation = Animated.loop(
            Animated.timing(scrollAnim, {
                toValue: -width,
                duration: 15000,
                useNativeDriver: true,
                isInteraction: false,
            }),
        );
        animation.start();
        return () => animation.stop();
    }, [scrollAnim]);

    const repeatedText = 'Alert! Alert! Alert! Alert! Alert! Alert! Alert! Alert! Alert! Alert! Alert! Alert! Alert! Alert! Alert! ';

    return (
        <View style={styles.container}>
            {/* Header with scrolling alert */}
            <View style={styles.header}>
                <View style={styles.marqueeContainer}>
                    <Animated.Text
                        style={[
                            styles.marqueeText,
                            {
                                transform: [{ translateX: scrollAnim }],
                            },
                        ]}
                    >
                        {repeatedText}
                    </Animated.Text>
                    <Animated.Text
                        style={[
                            styles.marqueeText,
                            {
                                transform: [{ translateX: Animated.add(scrollAnim, width) }],
                                position: 'absolute',
                                left: width,
                            },
                        ]}
                    >
                        {repeatedText}
                    </Animated.Text>
                </View>
                <TouchableOpacity style={styles.settingsIcon}>
                    <Text style={styles.settingsIconText}>⚙️</Text>
                </TouchableOpacity>
            </View>

            {/* Center content */}
            <View style={styles.centerContent}>
                <TouchableOpacity style={styles.sosButton}>
                    <Text style={styles.sosButtonText}>SOS</Text>
                </TouchableOpacity>
                <Text style={styles.instruction}>Click here</Text>
                <Text style={styles.instruction}>
                    to send an emergency alert to your{'\n'}
                    predefined contacts with your location
                </Text>
                <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => navigation.navigate('ServiceEmergency')}   // Navigate to ServiceEmergency screen
                >
                    <Text style={styles.actionButtonText}>my location</Text>
                </TouchableOpacity>
            </View>

            {/* Bottom navigation */}
            <View style={styles.navBar}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.navItem}>HOME</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Service')}>
                    <Text style={styles.navItem}>SERVICE</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.navItem}>Mycontacts</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    // Your existing styles as is
    container: {
        flex: 1,
        backgroundColor: '#121212',
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 20,
    },
    marqueeContainer: {
        flex: 1,
        overflow: 'hidden',
        flexDirection: 'row',
        position: 'relative',
        height: 24,
    },
    marqueeText: {
        color: '#ea2a33',
        fontWeight: 'bold',
        fontSize: 16,
        whiteSpace: 'nowrap',
    },
    settingsIcon: {
        marginLeft: 20,
    },
    settingsIconText: {
        fontSize: 28,
        color: '#ea2a33',
    },
    centerContent: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    sosButton: {
        backgroundColor: '#ea2a33',
        borderRadius: width * 0.45,
        height: width * 0.9,
        width: width * 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        shadowColor: '#ea2a33',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.6,
        shadowRadius: 10,
    },
    sosButtonText: {
        color: 'white',
        fontSize: width * 0.3,
        fontWeight: 'bold',
    },
    instruction: {
        color: 'white',
        fontStyle: 'italic',
        textAlign: 'center',
        marginBottom: 4,
        fontSize: 16,
    },
    actionButton: {
        backgroundColor: '#282828',
        paddingVertical: 12,
        borderRadius: 8,
        width: width * 0.55,
        marginTop: 14,
        alignItems: 'center',
    },
    actionButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#222',
        paddingVertical: 16,
        borderTopWidth: 1,
        borderTopColor: '#444',
    },
    navItem: {
        color: '#ea2a33',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default Home;
