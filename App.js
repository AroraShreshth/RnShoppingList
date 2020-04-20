import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Header from './components/Header';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      {/* <Text >User Application !</Text>
      <Image style={styles.img} source={{ uri: 'https://randomuser.me/api/portraits/lego/5.jpg' }}></Image> */}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  texty: {
    color: 'blue',
    fontSize: 30
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50
  }

})

export default App;