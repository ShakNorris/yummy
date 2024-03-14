import { Text, View } from "react-native";
import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../slices/restaurantSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import * as Progress from "react-native-progress"


const Delivery = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="bg-red-400 flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <AntDesign name="close" size={24} color="white" />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View className="">
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">30-45 Minutes</Text>
            </View>
            <Image
              source={{
                uri: 'https://media0.giphy.com/media/7qWF0zp5sXDFyqup0y/giphy.gif?cid=6c09b9527mvaf9cx7s3l75gjismbclr3luwuxw87wpf1kc3q&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s',
              }}
              className="h-20 w-20"
            />
          </View>

          <Progress.Bar size={30} color="red" indeterminate={true} />

          <Text className="text-gray-500 mt-3">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Delivery;
