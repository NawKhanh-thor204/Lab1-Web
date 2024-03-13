import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
// import { TouchableOpacity } from 'react-native-web'

const Main = ({navigation}) => {
  return (
    <View style={styles.container}>
            <Text style={styles.title}>Khánh - PH43678</Text>
            <View style={styles.groupbtn}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => { navigation.navigate("Bai1") }}>
                    <Text>Bài 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => { navigation.navigate("Bai2") }}>
                    <Text>Bài 2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => { navigation.navigate("Bai3") }}>
                    <Text>Bài 3</Text>
                </TouchableOpacity>
               
            </View>
        </View>
  )
}

export default Main

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 50
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    groupbtn:{
        width: '100%',
        gap: 20,
        flexDirection:'row'
    },
    btn:{
        width: '29%',
        padding: 12,
        backgroundColor: 'cyan',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center'
    }
})