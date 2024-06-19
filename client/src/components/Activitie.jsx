import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet , Image} from 'react-native';

export default function Task({ key, title, content, start, end, color }) {  
  return (
    <View style={[styles.task, { backgroundColor: color }]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detail}>{start} PM</Text>
        <View style={styles.duration}>
          <Text style={[styles.detail]}>30</Text>
          <Image
            source={require("../../assets/icons/reloj.svg")}
            style={styles.detail}
          />
        </View>
        
        
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
    height: 130,
    color: '#000000b6',
    paddingVertical: 7
  },
  detailsContainer: {
    flexDirection: 'row', // Alinear los elementos horizontalmente
    justifyContent: 'space-between', // Espacio entre los elementos
    paddingHorizontal: 15,
  },
  detail: {
    fontSize: 22,
    fontWeight: 500,
    color: '#ffffff',
  },
  duration: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'white',
    backgroundColor: '#131313ab',
    paddingVertical: 6,
    paddingHorizontal: 25,
    borderRadius: 20,

  }
});
