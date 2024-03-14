import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import React, { Component, useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../slices/restaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../slices/basketSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { urlFor } from "../sanity";

const Basket = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupItemsInBasket] = useState([]);
  const basketTotal = useSelector(selectBasketTotal);
  const dispatch = useDispatch();

  //turns items into grouped items
  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[items.id] || []).push(item);
      return results;
    }, {});

    setGroupItemsInBasket(groupedItems);
  }, [items]);

  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-red-300 shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={navigation.Back}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <AntDesign name="closecircle" size={24} color="red" />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/590/590685.png",
            }}
            className="h-7 w-7"
          />
          <Text className="flex-1"> Deliver in - </Text>
          <TouchableOpacity>
            <Text className="text-red-500">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.keys(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white px-5 py-2"
            >
              <Text className="text-red-500 ">{items.length}x</Text>
              <Image
                source={{ uri: urlFor(items[0]?.image).url() }}
                className="h-12 w-12"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-600">
                {currencyFormat(items[0].price)}
              </Text>
              <TouchableOpacity>
                <Text
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                  className="text-red-500 text-xs"
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">{currencyFormat(basketTotal)}</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery fee</Text>
            <Text className="text-gray-400">{currencyFormat(5.99)}</Text>
          </View>

          <View className="flex-row justify-between">
            <Text>Subtotal</Text>
            <Text>{currencyFormat(basketTotal + 5.99)}</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("PrepareOrder")} className="rounded-lg bg-red-500 p-4">
            <Text className="text-center text-white text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Basket;
