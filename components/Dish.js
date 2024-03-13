import { Text, TouchableOpacity, View, Image } from "react-native";
import React, { Component, useState } from "react";
import { urlFor } from "../sanity";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addtoBasket, removeFromBasket, selectBasketItemsID } from "../slices/basketSlice";

const Dish = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(true);
  const items = useSelector((state) => selectBasketItemsID(state, id));
  const dispatch = useDispatch();


  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  const addItemsToBasket = () => {
    dispatch(addtoBasket({id, name, description, price, image}));
  }

  const removeItemFromBasket = () => {
    if(!items.length > 0) return

    dispatch(removeFromBasket({id}));
  }

  return (
    <>
      <View
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 border-b-0`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
          </View>
          <View>
            <Image
              source={{ uri: urlFor(image).url() }}
              className="w-28 h-28 bg-gray-300 p-4"
            />
          </View>
        </View>
        <View className="flex-row">
          <Text className="flex-1 text-black text-lg pt-2">
            {currencyFormat(price)}
          </Text>
          <View className="bg-white pt-2 pr-5">
            <View className="flex-row items-center space-x-2 pb-3">
              <TouchableOpacity disabled={!items.length} onPress={removeItemFromBasket}>
                <AntDesign name="minuscircle" size={24} color={items.length > 0 ? "red" : "gray"} />
              </TouchableOpacity>

              <Text>{items.length}</Text>

              <TouchableOpacity onPress={addItemsToBasket}>
                <AntDesign name="pluscircle" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Dish;
