import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextScreen = () => {
    const [text, setText] = useState("");

    return (
        <View>
            <Text>Write your name.</Text>
            <TextInput 
                style={styles.input}
                value={text}
                onChangeText={(newText) => setText(newText)}
            />
            {text==="" ? <Text>Waiting for name.</Text> : <Text>{`Hello ${text}.`}</Text>}
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 5,
    }
})

export default TextScreen;