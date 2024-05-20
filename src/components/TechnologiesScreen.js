import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const TechnologiesScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>O que aprendi ao longo do tempo</Text>
      <Text style={styles.description}>
      JavaScript, React, Bootstrap, CSS, HTML, básico em C e C++. Em paralelo a isso, estudei gestão de tráfego, design e copy, para atuar em MKt Digital. Como desenvolvi grande interesse na área de dados, estou fazendo um curso online de Engenharia de Dados, estudando a linguagem Python e SQL.
      </Text>
      <Text style={styles.heading}>Minhas experiências</Text>
      <Text style={styles.description}>
      Trabalhei durante 3 anos com Marketing Digital. Atualmente sou Analista de Business Intelligence
      </Text>
      <Text style={styles.heading}>O que eu desejo para o futuro</Text>
      <Text style={styles.description}>
      No futuro, eu desejo me tornar Front-End por gostar muito das tecnologias estudadas, entretanto quero solidificar minha carreira na área de dados.
      </Text>
      <Text style={styles.heading}>O que eu desejo aprender</Text>
      <Text style={styles.description}>
      Linguagem Python, SQL, Inteligência Artificial, Área de Engenharia de Dados
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Início')}>
        <Text style={styles.buttonText}>Voltar para o Início</Text>
      </TouchableOpacity>
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
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#008B8B',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#008B8B',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default TechnologiesScreen;
