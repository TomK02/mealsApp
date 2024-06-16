import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import { NavigationTypeProp } from '../../types/navigation';
import MealDetails from '../MealDetails';

interface MealItemProps {
  id: string;
  title: string;
  imageUri: string;
  duration: number;
  complexity: string;
  affordability: string;
}

function MealItem({
  id,
  title,
  imageUri,
  duration,
  complexity,
  affordability,
}: MealItemProps) {
  const navigation = useNavigation<NavigationTypeProp<'MealDetail'>>();

  const selectMealItemHandler = () => {
    navigation.navigate('MealDetail', { mealId: id });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUri }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>

          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible', // make sure the shadow don't go out of the border
    backgroundColor: '#fff',
    elevation: 4,

    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
  },
  buttonPressed: { opacity: 0.5 },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
});
