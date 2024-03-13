import {TouchableOpacity,StatusBar,SafeAreaView,Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { , , ,  } from 'react-native-web'
const HeaderView = ({ title, child, image, image2 }) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.icon}
                onPress={() => { navigation.goBack() }}
            >
                <Image source={image} style={{ width: 15, height: 15 }} />
            </TouchableOpacity>

            {title
                ? <View style={styles.title}>
                    <Text style={styles.text}>{title}</Text>
                </View> : <View />}

            {image2
                ? <TouchableOpacity style={styles.icon}>
                    <Image source={image2} />
                </TouchableOpacity>
                : <View style={{ width: 30 }} />}
            {child}
        </View>
    )
}
const Bai1 = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={"rgba(0,0,0,0.2)"} />
            <View>
                <HeaderView
                    title={"Header"}
                    image={require('../image/Vectorback.png')}
                    image2={require('../image/Vectorpersonal.png')}
                    screen={'Bai3'} />
                <HeaderView
                    title={"Trang chủ"}
                    image={require('../image/Vectorback.png')} />
                <HeaderView
                    image={require('../image/Vectorback.png')} />
            </View>
        </SafeAreaView>
    )
}

export default Bai1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        backgroundColor: 'green',
        borderColor: 'rgba(0,0,0,0.4)'
    },
    text: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    icon: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
})