import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import ScoreBoard from './src/components/ScoreBoard';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Futsal  Scoreboard" />
      <ScoreBoard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Background gelap untuk tema sporty
    paddingTop: 40, // Jarak untuk Header
  },
});
