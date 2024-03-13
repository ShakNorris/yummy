import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import React, { Component, useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../slices/restaurantSlice";
import { selectBasketItems } from "../slices/basketSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

const Basket = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  //turns items into grouped items
  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[items.id] || []).push(item);
      return results;
    }, {});

    setGroupItemsInBasket(groupedItems);
  }, [items]);

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

          <TouchableOpacity onPress={navigation.Back} className="rounded-full bg-gray-100 absolute top-3 right-5">
            <AntDesign name="closecircle" size={24} color="red" />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
            <Image  source={{
              uri: "https://cdn-icons-png.flaticon.com/512/590/590685.png",
            }}
            className="h-7 w-7"/>
            <Text className="flex-1"> Deliver in - </Text>
            <TouchableOpacity>
                <Text className="text-red-500">Change</Text>
            </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Basket;
