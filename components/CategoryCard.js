import { Text, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'

const CategoryCard = ({imgUrl, title}) => {
    return (
      <TouchableOpacity className="relative mr-1">
        <Image source={{uri: imgUrl}} className="h-20 w-20"/>
        <Text className="absolute bottom-1 left-1 text-green-500 font-bold">{title}</Text>
      </TouchableOpacity>
    )
}

export default CategoryCard