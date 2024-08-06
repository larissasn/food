import { Pressable, Text } from "react-native";
import {FoodProps} from '..'
export function CardHorizontalFood({food}: {food: FoodProps}) {
  return (
    <Pressable>
      <Text>{food.name}</Text>
    </Pressable>
  );
}
