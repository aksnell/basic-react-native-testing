import React, { useState } from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const ListScreen = () => {
    
    const fillFriends = () => {
        let friends = []
        for (i = 0; i <= 30; i++) {
            friends.push({name:`Friend #${i}`})
        }
        return friends
    }
    
    const [friends, setFriends] = useState(fillFriends)

    return <FlatList
                data={friends}
                keyExtractor = {item => item.name} 
                renderItem={({ item }) => {
                    return <Text style={styles.textStyle}>{item.name}</Text>;
                }}
            />
            
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 30,
        fontSize: 32,
    }
})

export default ListScreen;