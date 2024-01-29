import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

import { useDispatch } from 'react-redux';

const Primary = () => {

    const [text, setText] = useState();
    const dispatch = useDispatch();
    
    const handleAdd = () => {
        dispatch({type:"ADD_NAME", payload: {name: text}})
    }

    const handleClean = () => {
        dispatch({type:"CLEAN_LIST"});
    }

    return (
        <View>
            <Text>Primary</Text>
            <TextInput value={text} onChangeText={setText} placeholder='İsim Giriniz' />
            <Button title='Ekle' onPress={handleAdd} />
            <Button title='Temizle' onPress={handleClean} />
        </View>
    )
}

export default Primary