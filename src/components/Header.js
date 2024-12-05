import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <View style={styles.line} />
      <Text style={styles.headerText}>{title}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1e90ff',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#ff6347', // Garis bawah kontras
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  line: {
    height: 2,
    backgroundColor: '#fff',
    width: '80%',
    marginVertical: 5,
  },
});

export default Header;
