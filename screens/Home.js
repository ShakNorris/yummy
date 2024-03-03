import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Categories from "../components/Categories";
import Featured from "../components/Featured";

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <>
     <SafeAreaView className="bg-white pt-5">
      <View className="flex-row items-center pb-3 mx-3 space-x-2">
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/590/590685.png",
          }}
          className="h-6 w-6 p-4"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Order Food!</Text>
          <Text className="font-bold text-xl">Current Location <AntDesign name="caretdown" size={16} color="black" /></Text>
        </View>
        <FontAwesome6 name="circle-user" size={30} color="black" />
      </View>

      <View className="flex-row items-center space-x-2 pb-2 px-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded-lg">
          <FontAwesome name="search" size={16} color="black" />
          <TextInput placeholder="Search"/>
        </View>
        
      </View>
    </SafeAreaView>

    <ScrollView>
      <Categories />
      <Featured />
    </ScrollView>
    </>
  );
};

export default Home;
