import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {


    return (
        <View style={styles.header}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    header: {
        height: 60,

        padding: 15,
        backgroundColor: 'green',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
});

export default Header;
