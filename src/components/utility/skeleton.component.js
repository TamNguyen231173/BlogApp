import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Skeleton = ({ width, height, style }) => {
  const translateX = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: width,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  }, [width]);

  return (
    <View
      style={StyleSheet.flatten([
        {
          width: width,
          height: height,
          backgroundColor: "#e1e4e8",
          overflow: "hidden",
        },
        style,
      ])}
    >
      <Animated.View
        style={{ width: "100%", height: "100%", transform: [{ translateX }] }}
      >
        <LinearGradient
          colors={["#e1e4e8", "#f8f8f8", "#e1e4e8"]}
          start={{ x: 1, y: 1 }}
          style={{ width: "100%", height: "100%" }}
        />
      </Animated.View>
    </View>
  );
};

export default Skeleton;
