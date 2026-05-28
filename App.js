import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Jesus Coloring App</Text>
        <Text style={styles.subtitle}>Warm devotional coloring experience</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8EE',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#8A5A2B',
    textAlign: 'center'
  },
  subtitle: {
    marginTop: 12,
    fontSize: 16,
    color: '#6B4B2A',
    textAlign: 'center'
  }
});
