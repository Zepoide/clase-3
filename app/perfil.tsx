import { View, Text, Pressable, Modal } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

const Perfil = () => {
    const [name, setName] = useState('Santiago Tamarit')
    const [actualName, setActualName] = useState('')
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View 
        style={{
            padding: '10%',
            display: 'flex',
            gap: 20,
            justifyContent: 'center',
            height: '100%',
        }}>
            <Text style={{
                fontSize: 50,
                textAlign: 'center'
            }}>{name}</Text>
            <Pressable style={{
                backgroundColor: 'blue',
                padding: 20,
                borderRadius: 5
            }}
            onPress={() => setModalVisible(true)}
            >
                <Text style={{
                    fontSize: 20,
                    color: 'white',
                    textAlign: 'center'
                }}>Cambiar Nombre</Text>
            </Pressable>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View
                style={{
                    height: '60%',
                    width: '100%',
                    backgroundColor: 'white',
                    borderRadius: 20,
                    borderBlockColor: 'blue',
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                >
                    <TextInput
                    placeholder='Cambiar nombre'
                    value= {actualName}
                    onChangeText={(text) => setActualName(text)}
                    style={{
                        padding: 20,
                        fontSize: 15,
                        borderWidth: 2,
                        borderRadius: 5,
                        paddingLeft: 5
                    }}  
                    ></TextInput>
                    <Pressable
                    onPress={
                        () => {
                            setModalVisible(false)
                            setName(actualName)
                            setActualName('')
                        }
                    }
                    style={{
                        padding: 20,
                        paddingHorizontal: '15%',
                        backgroundColor: 'blue',
                        borderRadius: 10,
                        marginTop: 20
                    }}
                    >
                        <Text
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: 'white'
                        }}
                        >
                            Guardar
                        </Text>
                    </Pressable>
                    <Pressable
                    onPress={() => {
                        setModalVisible(false)
                        setActualName('')
                    }}
                    style={{
                        padding: 10,
                        paddingHorizontal: '10%',
                        backgroundColor: 'red',
                        borderRadius: 5,
                        marginTop: 10
                    }}
                    >
                        <Text
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: 'white'
                        }}
                        >
                            Cancel
                        </Text>
                    </Pressable>
                </View>
            </Modal>
        </View>
    )
}

export default Perfil