import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Categories: undefined;
  MealsOverview: {
    categoryId: string;
    categoryTitle: string;
  };
  MealDetail: {
    mealId: string;
  };
};

export type NavigationTypeProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;

export type RouteTypeProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
