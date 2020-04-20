import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = (props) => {


    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>{props.item.text}</Text>
                <Icon name="remove" size={20} colour="firebrick" />
            </View>
        </TouchableOpacity>

    )

}

const styles = StyleSheet.create({
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderColor: '#eee',
        borderBottomWidth: 1
    },
    listItemText: {
        fontSize: 23
    }
});

export default ListItem;