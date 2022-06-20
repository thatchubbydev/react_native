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
        width: "35%",
        height: 35,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.primary,
        paddingVertical: SIZES.base,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          color: COLORS.white,
          fontWeight: "600",
          fontSize: SIZES.font,
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};
