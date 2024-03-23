import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

var courses = [
  { id: 1, title: ' Faculty of Information Technology', description: 'Welcome to software development architecture', image: require('./computer.jpg') },
  { id: 2, title: 'Computer Science', description: 'You are welcome to your own funeral because it is not a child`s play', image: require('./IT.jpg') },
  { id: 3, title: 'Architecture', description: 'Improving the living standard', image: require('./Archi.jpg') },
  { id: 4, title: 'Fashion and Design', description: 'We make sure the world looks amazing', image: require('./FD.jpg') },
  { id: 5, title: 'Business IT', description: 'Foundation of business management and Information Technology', image: require('./BIT.jpg') },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>LIMKOKWING UNIVERSITY COURSES OFFERED</Text>
      <ScrollView style={styles.scrollView}>
        {courses.map(course => (
          <View key={course.id} style={styles.card}>
            <Image source={course.image} style={styles.image} />
            <Text style={styles.title}>{course.title}</Text>
            <Text style={styles.description}>{course.description}</Text>
            <CourseRating />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

function CourseRating() {
  var [rating, setRating] = useState(0);

  function handleRateCourse() {
    if (rating < 6) setRating(rating + 1);
  }

  return (
    <View style={styles.ratingContainer}>
      <Text style={styles.rating}>{rating}/6</Text>
      <TouchableOpacity onPress={handleRateCourse}>
        <Text style={styles.rateButton}>Rate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollView: {
    width: '100%',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    elevation: 2,
  },
  image: {
    width: 200,
    height: 100,
    marginBottom: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 16,
    marginRight: 10,
  },
  rateButton: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
