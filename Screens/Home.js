import { View, Text, SafeAreaView, ScrollView } from "react-native";
import GlobalStyles from "../GlobalStyles";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../Components/home/HeaderTabs";
import SearchBar from "../Components/home/SearchBar";
import Categories from "../Components/home/Categories";
import BottomTabs from "../Components/home/BottomTabs";
import { Divider } from "react-native-elements";
import RestaurantItems, {
  localRestaurants,
} from "../Components/home/RestaurantItems";

const YELP_API_KEY =
  "Yelp-api-key-put-here";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Diego");
  const [activeTab, setActiveTab] = useState("Delivery");
  const getRestaurantsFromYelp = () => {
    const yelpurl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpurl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <View
        style={{
          backgroundColor: "white",
          padding: 15,
          borderRadius: 10,
          shadowColor: "black",
          shadowOpacity: 0.8,
        }}
      >
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
