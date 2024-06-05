import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Task({ key, title, content, start, end, color }) {  
  return (
    <View style={[styles.task, { backgroundColor: color }]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detail}>{start} PM</Text>
        <Text style={[styles.detail,styles.duration, { color: color }]}>30 Min</Text>
        <Text style={styles.detail}>{end} PM</Text>
      </View>
    </View>
  );
} 

const styles = StyleSheet.create({
  task: {
    padding: 15,
    borderRadius: 18,
    height: 190,
    marginHorizontal: 8,
    marginBottom: 6
  },
  title: {
    fontSize: 30,
    width: 350,
    fontWeight: 'bold',
    height: 130,
    color: '#00000085',
  },
  detailsContainer: {
    flexDirection: 'row', // Alinear los elementos horizontalmente
    justifyContent: 'space-between', // Espacio entre los elementos
    paddingHorizontal: 15,
  },
  detail: {
    fontSize: 22,
    fontWeight: 500,
    color: '#00000085',
    padding: 8,
  },
  duration: {
    backgroundColor: '#3c3b3bab',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,

  }
});
