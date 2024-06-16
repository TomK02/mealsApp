import React, { useLayoutEffect, useMemo } from 'react';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import { NavigationTypeProp, RouteTypeProp } from '../types/navigation';
import { useNavigation, useRoute } from '@react-navigation/native';
import MealsList from '../components/MealsList/MealsList';

function MealsOverviewScreen() {
  const route = useRoute<RouteTypeProp<'MealsOverview'>>();
  const { categoryId } = route.params;

  const navigation = useNavigation<NavigationTypeProp<'MealsOverview'>>();

  const displayedMeals = useMemo(
    () =>
      MEALS.filter((mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0),
    [categoryId],
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId,
    )?.title;

    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
