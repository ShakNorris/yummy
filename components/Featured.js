import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Card from "./Card";
import client from "../sanity";

const Featured = ({ id, title, description, ftCategory }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "featured" && _id == $id] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type-> {
          name
        }
      },
    }[0]`,
        { id }
      )
      .then((data) => setRestaurants(data?.restaurants));
  }, []);

  return (
    <>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text>{title}</Text>
        <FontAwesome name="chevron-right" size={16} color="black" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 5,
          paddingVertical: 5
        }}
        showsHorizontalScrollIndicator={false}
      >
        {restaurants?.map((restaurant) => (
          <Card
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            description={restaurant.short_description}
            dishes={restaurant.dishes}
          />
        ))}
      </ScrollView>
    </>
  );
};

export default Featured;
