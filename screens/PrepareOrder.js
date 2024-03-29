import { Text, View, SafeAreaView} from "react-native";
import React, { Component, useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress"
import { useNavigation } from "@react-navigation/native";


const PrepareOrder = () => {

    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery");
        }, 4000)
    }, [])

  return (
    <SafeAreaView className="bg-red-400 flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/strawberry.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PrepareOrder;
