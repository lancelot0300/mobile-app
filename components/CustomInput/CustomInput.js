import React from 'react'
import {View, TextInput, StyleSheet, Image } from 'react-native'

const CustomInput = ({value, placeholder, onChangeText, style, img , secureTextEntry}) => {


  return (
    <View>
        <View style={styles.imgCont}>
            <Image style={styles.img} source={img}/>
        </View>
        <TextInput 
             value={value}
             onChangeText={onChangeText}
             placeholder={placeholder}
             style={{...styles.input, ...style}}
            secureTextEntry={secureTextEntry}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: 'white',
        color: 'white',
        minWidth: 200,
        paddingLeft: 45,
    },
    imgCont: {
        position: 'absolute',
        width: 30,
        left: 20,
        top: 20,
        zIndex: 1,
        borderRightWidth: 1,
        borderColor: 'white',
    },
    img: {
        position: 'relative',
        width: 25,
        height: 25,
        padding: 10,
        paddingRight: 10,
    }

});

export default CustomInput