import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";

type NavigateButtonProps = {
  screenName: string,
  children?: React.ReactNode,
  id?: string,
};

export const NavigateButton = ({ screenName, children, id }: NavigateButtonProps) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate(screenName, { id })}>
      {children}
    </Pressable>
  );
};
