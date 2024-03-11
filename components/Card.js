import { Text, TouchableOpacity, View, Image } from "react-native";
import React, { Component } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const Card = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  description,
  dishes,
}) => {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Restaurant", {
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            description,
            dishes,
          });
        }}
        className="flex-row items-center space-x-2 bg-white mx-3 shadow"
      >
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          className="h-32 w-32 rounded-sm"
        />

        <View className="px-3 pb-4 w-40">
          <Text className="font-bold text-lg pt-2">{title}</Text>
          <View className="flex-row items-center space-x-1">
            <FontAwesome name="star" size={24} color="orange" />
            <Text className="text-xs text-gray-500">
              <Text className="text-orange-500">{rating}</Text> • {genre}
            </Text>
          </View>

          <View className="flex-row items-center space-x-1">
            <Entypo name="location" size={24} color="gray" />
            <Text className="text-gray-500">{address}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Card;
