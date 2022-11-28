import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomButton } from '../components';

interface HomeScreenProps {
    navigation?: any
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {

    const handleButton = () => {
        navigation.navigate('Details');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to CYP Tier4 App</Text>
            <CustomButton name='Details btn' handleButton={handleButton} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000'
    }
});