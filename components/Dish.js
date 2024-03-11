import { Text, TouchableOpacity, View, Image } from "react-native";
import React, { Component, useState } from "react";
import { urlFor } from "../sanity";
import { AntDesign } from "@expo/vector-icons";

const Dish = ({ id, name, description, price, image }) => {
  [isPressed, setIsPressed] = useState(false);

  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400">{currencyFormat(price)}</Text>
          </View>
          <View>
            <Image
              source={{ uri: urlFor(image).url() }}
              className="w-20 h-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity>
              <AntDesign name="minuscircle" size={24} color="red" />
            </TouchableOpacity>

            <TouchableOpacity>
              <AntDesign name="pluscircle" size={24} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default Dish;
