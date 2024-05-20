import React from 'react';
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Ynara Ferreira</Text>
      <Image
        source={require('../assets/ynaraft.png')}
        style={styles.image}
      />
      <Text style={styles.description}>
        Olá! Meu nome é Ynara Ferreira, sou uma entusiasta da tecnologia, aprendendo sobre o mundo de desenvolvimento React Native.
      </Text>
      <Text style={styles.heading}>Minha Jornada</Text>
      <View style={styles.list}>
        <View style={styles.listItem}>
          <FontAwesome name="graduation-cap" size={24} style={styles.icon} />
          <Text>Comecei em 2016 como estudante de Sistemas para Web, em Fortaleza-CE</Text>
        </View>
        <View style={styles.listItem}>
          <FontAwesome name="briefcase" size={24} style={styles.icon} />
          <Text>Estudei Marketing Digital de 2020 a 2023, em Porto-Portugal</Text>
        </View>
        <View style={styles.listItem}>
          <FontAwesome name="code" size={24} style={styles.icon} />
          <Text>Em 2023, já em Recife-PE, concluí um curso de Programação Web, pelo SENAC-PE</Text>
        </View>
        <View style={styles.listItem}>
          <FontAwesome name="university" size={24} style={styles.icon} />
          <Text>Atualmente sou estudante de Engenharia da Computação</Text>
        </View>
      </View>
      <Text style={styles.footerText}>
        Na página seguinte você poderá conferir meus conhecimentos e expectativas para o futuro.
      </Text>
      <TouchableOpacity style={styles.arrowContainer} onPress={() => navigation.navigate('Tecnologias')}>
        <FontAwesome name="arrow-right" size={30} color="#008B8B" />
      </TouchableOpacity>
      <View style={styles.contactContainer}>
        <FontAwesome name="instagram" size={24} onPress={() => Linking.openURL('https://www.instagram.com')} />
        <FontAwesome name="facebook" size={24} onPress={() => Linking.openURL('https://www.facebook.com')} />
        <FontAwesome name="linkedin" size={24} onPress={() => Linking.openURL('https://www.linkedin.com')} />
        <FontAwesome name="phone" size={24} onPress={() => Linking.openURL('tel:+123456789')} />
        <FontAwesome name="envelope" size={24} onPress={() => Linking.openURL('mailto:email@example.com')} />
        <FontAwesome name="map-marker" size={24} onPress={() => Linking.openURL('https://www.google.com/maps')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f3ec78',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#008B8B',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  list: {
    marginBottom: 20,
    width: '100%',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
    color: '#008B8B',
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  arrowContainer: {
    marginTop: 20,
  },
  contactContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default HomeScreen;
