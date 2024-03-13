import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import React, { Component, useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { urlFor } from "../sanity";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Dish from "../components/Dish";
import BasketWindow from "../components/BasketWindow";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../slices/restaurantSlice";

const Restaurant = () => {
  const {
    params: { id, imgUrl, title, rating, genre, address, description, dishes },
  } = useRoute();

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        description,
        dishes,
      })
    );
  }, []);

  return (
    <>
      <BasketWindow />
      <ScrollView>
        <View className="relative">
          <Image
            source={{ uri: urlFor(imgUrl).url() }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 bg-gray-100 p-2 rounded-full"
          >
            <Ionicons size={24} color="red" name="arrow-back-sharp" />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row items-center space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <FontAwesome name="star" size={24} color="orange" />
                <Text className="text-md text-gray-500">
                  <Text className="text-orange-500">{rating}</Text> • {genre}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Entypo name="location" size={24} color="gray" />
                <Text className="text-gray-500">{address}</Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2 pb-4">{description}</Text>
          </View>
        </View>
        <View className="pb-24">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

          {dishes?.map((dish) => (
            <Dish
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Restaurant;
