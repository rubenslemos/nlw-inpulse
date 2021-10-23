import React from 'react';
import { View } from 'react-native';
import { Button } from '../Button';
import { COLORS, FONTS} from '../../theme'
import { styles } from './styles';
import {useAuth} from '../../hooks/auth'
export function SignInBox() {
  const { signIn, IsSigningIn } = useAuth()
 
  return (
    <View style={styles.container}>
      <Button
        title="Entrar com o GitHub"
        color={COLORS.BLACK_SECONDARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        onPress={signIn}
        isLoading= { IsSigningIn }
      />
      
    </View>
  );
}