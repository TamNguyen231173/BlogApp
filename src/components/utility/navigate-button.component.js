import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";

export const NavigateButton = ({ screenName, children, news = {} }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate(screenName, { news })}>
      {children}
    </Pressable>
  );
};
