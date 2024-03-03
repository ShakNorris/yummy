import { Text, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
    return (
      <ScrollView horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}>
        <CategoryCard imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1200px-LEGO_logo.svg.png" title="Testing"/>
        <CategoryCard imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1200px-LEGO_logo.svg.png" title="Testing"/>
        <CategoryCard imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1200px-LEGO_logo.svg.png" title="Testing"/>
        <CategoryCard imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1200px-LEGO_logo.svg.png" title="Testing"/>
        <CategoryCard imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1200px-LEGO_logo.svg.png" title="Testing"/>
        <CategoryCard imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1200px-LEGO_logo.svg.png" title="Testing"/>
      </ScrollView>
    )
}

export default Categories