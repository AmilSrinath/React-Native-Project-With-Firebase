import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function CategoryItem({category, onCategoryPress}) {
  return (
    <TouchableOpacity onPress={() => {onCategoryPress(category)}}>
      <View style={{
        padding: 20,
        backgroundColor: 'lightgray',
        borderRadius: 50,
        marginRight: 10
      }}>
        <Image
          source={{ uri: category.icon }}
          style={{
            width: 40,
            height: 40,
          }}
        />
      </View>
      <Text style={{
        color: 'gray',
        fontSize: 14,
        fontFamily: "outfit",
        textAlign: "center",
        marginTop: 5,
        paddingRight: 16
      }}>{category.name}</Text>
    </TouchableOpacity>
  );
}
