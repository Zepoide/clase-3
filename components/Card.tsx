import { View, Text, Button, Pressable } from 'react-native'
import React, { useState } from 'react'

type CardProps = {label: string}

const Card = ({label}: CardProps) => {
    
    const [pressed, setPressed] = useState(false)
    const backgroundColor = pressed ? '#253C46' : '#808080'
    return (
        <Pressable
            onPress={() => setPressed((prev) => !prev)}
            style={{
            backgroundColor,
            paddingVertical: 40,
            }}
        >
            <Text style={{ color: 'white', textAlign: 'center' }}>{label}</Text>
        </Pressable>
    )
}

export default Card