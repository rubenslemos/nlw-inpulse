import React, { useState } from 'react';
import { View, TextInput, Alert, Keyboard } from 'react-native';
import { api } from '../../services/api';
import { COLORS } from '../../theme';
import { Button } from '../Button';
import { styles } from './styles';

export function SendMessageForm() {
  const [message, setMessage] = useState('')
  const [sendingMessage, setSendingMessage] = useState(false)

  async function handleMessageSubmit() {
    const messageFormatted = message.trim()
    if (messageFormatted.length > 0) {
      setSendingMessage(true)
      await api.post('/messages', { message: messageFormatted })
      setMessage('')
      Keyboard.dismiss()
      setSendingMessage(false)
      Alert.alert('Mensagem enviada com sucesso!')
    } else {
      Alert.alert('Não é possível enviar mensagens em branco')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Qual sua expectativa para o Do/While 2021?'
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        keyboardAppearance='dark'
        multiline
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        editable={!sendingMessage}
      />
      <Button
        title="Enviar Mensagem"
        color= {COLORS.WHITE}
        backgroundColor={COLORS.PINK}
        icon="mail"
        isLoading={sendingMessage}
        onPress={handleMessageSubmit}
      />
    </View>
  );
}