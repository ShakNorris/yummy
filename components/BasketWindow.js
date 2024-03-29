import { Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../slices/basketSlice";
import { useNavigation } from "@react-navigation/native";

const BasketWindow = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const total = useSelector(selectBasketTotal);

  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  if (items.length === 0) return null

  return (
    <View className="absolute bottom-7 w-full z-50">
      <TouchableOpacity onPress={() => navigation.navigate("Basket")} className="mx-5 bg-red-500 p-3 rounded-lg flex-row items-center space-x-1">
        <Text className="text-white font-extrabold text-lg bg-red-700 py-1 px-2">{items.length}</Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">View Basket</Text>
        <Text className="text-lg text-white font-extrabold">{currencyFormat(total)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketWindow;
