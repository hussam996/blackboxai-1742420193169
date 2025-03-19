import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      
      <TouchableOpacity style={styles.settingItem}>
        <Text style={styles.settingText}>Account Settings</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.settingItem}>
        <Text style={styles.settingText}>Notifications</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.settingItem}>
        <Text style={styles.settingText}>Privacy</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.settingItem}>
        <Text style={styles.settingText}>Help & Support</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  settingText: {
    fontSize: 16,
  },
});

export default SettingsScreen;