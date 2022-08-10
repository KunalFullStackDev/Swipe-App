import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import React from "react";
import About from "../Components/restaurantDetails/About";
import MenuItems from "../Components/restaurantDetails/MenuItems";
import ViewCart from "../Components/restaurantDetails/ViewCart";

export default function RestaurantDetails({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 5 }} />
      <MenuItems />
      <ViewCart navigation={navigation} restaurantName={route.params.name}/>
    </View>
  );
}
