import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ColorCounter from '../components/ColorCounter.js';

const SquareScreen = () => {
    
    const validateColor = (currentValue, delta) => {
        if (currentValue + delta > 256) return 256;
        if (currentValue + delta < 0) return 0;
        return currentValue + delta 
    }

    const reducer = (state, action) => {
        switch (action.color) {
            case 'red':
                return { ...state, red: validateColor(state.red, action.value)};
            case 'green':
                return { ...state, green: validateColor(state.green, action.value)};
            case 'blue':
                return { ...state, blue: validateColor(state.blue, action.value)};
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;
    const COLOR_INCREMENT = 15;

    return (
        <View>
            <ColorCounter
                color="Red" 
                onIncrease={() => dispatch( { color: 'red', value: COLOR_INCREMENT })}
                onDecrease={() => dispatch( { color: 'red', value: -1 * COLOR_INCREMENT })}
            />
            <ColorCounter 
                color="Green" 
                onIncrease={() => dispatch( { color: 'green', value: COLOR_INCREMENT })}
                onDecrease={() => dispatch( { color: 'green', value: -1 * COLOR_INCREMENT })}
            />
            <ColorCounter 
                color="Blue" 
                onIncrease={() => dispatch( { color: 'blue', value: COLOR_INCREMENT })}
                onDecrease={() => dispatch( { color: 'blue', value: -1 * COLOR_INCREMENT })}
            />
            <View style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default SquareScreen;