import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, SHADOWS, SIZES } from "../constants";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        height: 40,
        width: 40,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.extraLarge,
        position: "absolute",
        ...SHADOWS.light,
        alignItems: "center",
        justifyContent: "center",
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        style={{ width: 25, height: 25 }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({ handlePress }) => {
  return (
    <TouchableOpacity
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40%",
        height: 45,
        borderRadius: SIZES.extraLarge,
        backgroundColor: COLORS.primary,
        // paddingTop: SIZES.base,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          color: COLORS.white,
          fontWeight: "600",
          fontSize: SIZES.medium,
          // lineHeight: 10,
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};
