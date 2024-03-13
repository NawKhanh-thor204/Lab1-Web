import {TouchableOpacity, TextInput,Image,StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
// import { , ,  } from 'react-native-web';

const Bai3 = () => {
    const [inputValue, setInputValue] = useState("");
    const [isInputValid, setIsInputValid] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [getColor, setColor] = useState('gray');
  
    const handleBlur = () => {
      setIsInputValid(inputValue.trim() !== "");
    };
  
    const handleSubmit = () => {
      setIsSubmitted(true);
      setIsInputValid(inputValue.trim() !== "");
      if (inputValue.trim() !== "") {
        console.log("Submitted:", inputValue);
        // Thực hiện xử lý hoặc gửi dữ liệu
      } else {
        console.log("Validation Error");
        setColor('red');
      }
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.buttonText}>Title : {inputValue}</Text>
        <View style={[styles.input, { borderColor: getColor }]}>
          <TextInput
            onFocus={() => setColor('cyan')}
            placeholder="Mời nhập liệu"
            onChangeText={(text) => {
              setInputValue(text);
              setIsInputValid(true);
              setColor('cyan')
            }}
            onBlur={handleBlur}
          />
  
          {!isInputValid && isSubmitted && (
            <Image source={require('../image/error.png')} style={styles.iconErr} />
          )}
        </View>
  
        {!isInputValid && isSubmitted && (
          <Text style={styles.errorText}>Không được để trống</Text>
        )}
  
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
          disabled={!isInputValid}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
}

export default Bai3

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
        padding: 20,
        justifyContent: "center",
      },
      input: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 7,
        marginBottom: 10,
        padding: 15,
      },
      errorText: {
        color: "red",
        marginBottom: 10,
      },
      button: {
        backgroundColor: "cyan",
        alignItems: "center",
        marginHorizontal: 80,
        marginTop: 30,
        padding: 10,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'gray'
      }, 
      buttonText: {
        fontSize: 18,
        fontWeight: "bold",
      },
      iconErr: {
        width: 20,
        height: 20
      }
})