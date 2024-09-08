import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

type Props = {}

const Contador = (props: Props) => {

    const [contador, setContador] = useState(0)

    const incrementar = () => {
        setContador(prev => prev + 1)
    }

    const decrementar = () => {
        setContador(prev => prev - 1)
    }

    return (
        <View
        style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20

        }}
        >
            <Text
            style= {{
                fontSize: 25,
            }}
            >
                Contador: {contador}
            </Text>
            <Button title='Incrementar' onPress={incrementar} />
            <Button title='Decrementar' onPress={decrementar} />
        </View>
    )
}

export default Contador