import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface PrimaryButtonProps {
  icon: string;
  color?: string;
  onPress: () => void;
}

function IconButton({ icon, color = '#fff', onPress }: PrimaryButtonProps) {
  return (
    <View>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={onPress}>
        <Icon name={icon} size={20} color={color} />
      </Pressable>
    </View>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
