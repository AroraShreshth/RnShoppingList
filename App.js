import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import uuid from 'uuid-random';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
const App = () => {
  const [items, setItems] = useState([
    { id: uuid(), text: 'Milk' },
    { id: uuid(), text: 'Bread' },
    { id: uuid(), text: 'Juice' },
    { id: uuid(), text: 'Paneer' },
    { id: uuid(), text: 'Dal' },
    { id: uuid(), text: 'Butter' },
  ]);


  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    });
  }

  const addItem = (text) => {
    setItems(prevItems => {
      return [{ id: uuid(), text }, ...prevItems];
    });
  }

  // Math.max((i) => prevItems[i].id) + 1


  return (

    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />}
      // keyExtractor={item => item.id}
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