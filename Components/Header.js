import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = (props) => {
    return (
        <View style= {styles.container}> 
            <Text style= {styles.text}>{props.title}</Text>
        </View>
    )
}

export default Header;

const styles= StyleSheet.create({
    container:{
      height: 80,
      padding:17,
      alignItems:'center',
      backgroundColor: '#451e3e',
    },
    text: {
      color:  'white',
      fontSize: 37,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

