import { KeyboardAvoidingView, StyleSheet, Text, Platform, Pressable, TextInput } from 'react-native'
import React from 'react'

const InputForm = () => {
  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.addFormContainer}>
            <TextInput
                style={styles.inputField}
                placeholder="할 일을 작성해주세요."
            />
            <Pressable style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
            </Pressable>
    </KeyboardAvoidingView>
  )
}

export default InputForm

const styles = StyleSheet.create({
    addFormContainer: {
        flexDirection: "row",
        marginTop: 'auto',
        marginBottom: 30,
        paddingHorizontal: 20,
        backgroundColor: '#f7f8fa',
    },
    inputField: {
        flex: 1 ,
        height: 42,
        padding: 5,
        marginRight: 25,
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0.2)',
        borderWidth: 1,
        color: '#000000',
        fontSize: 15,
        textAlignVertical: 'center'
    },
    addButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 42,
        height: 42,
        borderRadius: 4,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    addButtonText: {
        color: 'white',
        fontSize: 25
    }
})