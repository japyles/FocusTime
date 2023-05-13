import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null); 
  return (
    <SafeAreaView style={styles.container} >
      { !currentSubject ? <Focus addSubject={setCurrentSubject} /> : <View><Text style={{color: colors.white}}>I am going to render the timer for {currentSubject}</Text></View>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.seaFoamGreen,
  },
});
