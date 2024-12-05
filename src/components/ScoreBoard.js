import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ScoreBoard = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const handleIncrement = (team) => {
    if (team === 'A') setScoreA(scoreA + 1);
    if (team === 'B') setScoreB(scoreB + 1);
  };

  const handleDecrement = (team) => {
    if (team === 'A' && scoreA > 0) setScoreA(scoreA - 1);
    if (team === 'B' && scoreB > 0) setScoreB(scoreB - 1);
  };

  const handleReset = () => {
    setScoreA(0);
    setScoreB(0);
  };

  const checkWinner = () => {
    if (scoreA >= 10) return 'Team A Wins!';
    if (scoreB >= 10) return 'Team B Wins!';
    return '';
  };

  return (
    <View style={styles.container}>
      <View style={styles.scoreContainer}>
        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>Team A</Text>
          <Text style={styles.score}>{scoreA}</Text>
        </View>
        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>Team B</Text>
          <Text style={styles.score}>{scoreB}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleIncrement('A')}>
          <Text style={styles.buttonText}>A +</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleDecrement('A')}>
          <Text style={styles.buttonText}>A -</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleIncrement('B')}>
          <Text style={styles.buttonText}>B +</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleDecrement('B')}>
          <Text style={styles.buttonText}>B -</Text>
        </TouchableOpacity>
      </View>
      {/* Reset button */}
      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
      <Text style={styles.winner}>{checkWinner()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
    padding: 20,
    backgroundColor: '#1e1e1e', // Background sporty
    borderRadius: 10,
  },
  teamContainer: {
    alignItems: 'center',
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  score: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#32cd32',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  button: {
    flex: 1,
    backgroundColor: '#1e90ff',
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: 'grey',
    padding: 15, // Match the padding of other buttons
    marginVertical: 5,
    width: '100%', // Full width of the screen
    borderRadius: 10, // Rounded corners like the other buttons
    justifyContent: 'center', // Vertically center the content
    alignItems: 'center', // Horizontally center the content
    alignSelf: 'center', // Center the button itself
  },
  winner: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#32cd32',
    textAlign: 'center',
  },
});

export default ScoreBoard;
