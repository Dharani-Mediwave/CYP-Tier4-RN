import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { CustomButton } from '../components';

interface DetailsScreenProps {
  navigation?: any
}

export const DetailsScreen: React.FC<DetailsScreenProps> = ({ navigation }) => {

  const handleButton = () => {
    navigation.navigate('home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
      </Text>
      <View style={{alignSelf: 'center'}}>
        <CustomButton name='Back to page' handleButton={handleButton}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 10,
  },
  text:{
    fontSize: 16,
    color: '#000',
    marginBottom: 20
  }
});