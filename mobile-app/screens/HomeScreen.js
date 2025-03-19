import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        <TouchableOpacity 
          style={styles.profileButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.profileButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <TouchableOpacity 
          style={styles.card}
          onPress={() => navigation.navigate('Details')}
        >
          <Text style={styles.cardTitle}>Featured Content</Text>
          <Text style={styles.cardDescription}>Explore our latest updates and features</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.card}
          onPress={() => navigation.navigate('Details')}
        >
          <Text style={styles.cardTitle}>Quick Actions</Text>
          <Text style={styles.cardDescription}>Access frequently used features</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.menuText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  profileButton: {
    backgroundColor: '#f4511e',
    padding: 10,
    borderRadius: 20,
  },
  profileButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cardContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
  menuContainer: {
    padding: 20,
  },
  menuItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
});

export default HomeScreen;