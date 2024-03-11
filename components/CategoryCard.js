import { Text, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'

const CategoryCard = ({imgUrl, title}) => {
    return (
      <TouchableOpacity className="relative mr-1">
        <Image source={{uri: imgUrl}} className="h-20 w-20"/>
        <Text className="absolute bottom-1 left-1 text-white font-bold outline-1">{title}</Text>
      </TouchableOpacity>
    )
}

export default CategoryCard