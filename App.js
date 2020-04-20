import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import { uuid } from 'uuidv4';
import ListItem from './components/ListItem';
const App = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Milk' },
    { id: 2, text: 'Bread' },
    { id: 3, text: 'Juice' },
    { id: 4, text: 'Paneer' },
    { id: 5, text: 'Dal' },
    { id: 6, text: 'Butter' },
  ]);
  return (

    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={item => item.id}
      />
      {/* <Text >User Application !</Text>
      <Image style={styles.img} source={{ uri: 'https://randomuser.me/api/portraits/lego/5.jpg' }}></Image> */}
    </View>
  )
}

Header.defaultProps = {
  title: 'Shopping List'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },
  // texty: {
  //   color: 'blue',
  //   fontSize: 30
  // },
  // img: {
  //   width: 100,
  //   height: 100,
  //   borderRadius: 50
  // }

})

export default App;