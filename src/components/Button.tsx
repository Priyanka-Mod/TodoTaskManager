import React from "react";
import {  Text, TouchableOpacity } from "react-native";

type ButtonPropType = {
    title: string,
    onPressButton: () => void
}
export const Button = (props:ButtonPropType) => {
    return(
        <TouchableOpacity onPress={props.onPressButton} style={{alignItems:'center',justifyContent:'center',backgroundColor:"pink" , paddingHorizontal:10,paddingVertical:15 , borderRadius:10}}>
            <Text> {props.title} </Text>
        </TouchableOpacity>
    )
} 