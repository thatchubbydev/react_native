import { View, Text, Image } from "react-native";
import React from "react";
import { assets, COLORS, FONTS, SIZES } from "../constants";

export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      {/* title  */}
      <Text style={{ fontSize: SIZES.large, fontWeight: "bold" }}>{title}</Text>
      {/* subtitle  */}
      <Text
        style={{
          fontSize: SIZES.font,
          fontWeight: "normal",
          color: COLORS.gray,
        }}
      >
        by {subTitle}
      </Text>
    </View>
  );
};

export const EthPrice = ({ price }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={{ width: 20, height: 20 }}
      />
      <Text>{price}</Text>
    </View>
  );
};

export const ImageCmp = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 45,
        height: 45,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

export const People = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      {[assets.person01, assets.person02, assets.person03].map(
        (imgUrl, index) => (
          <ImageCmp imgUrl={imgUrl} index={index} key={`people-${index}`} />
        )
      )}
    </View>
  );
};

export const EndDate = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        width: 100,
        height: 60,
        marginHorizontal: SIZES.base,
        marginBottom: SIZES.base,
        paddingVertical: SIZES.extraLarge,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.base,
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.font,
          color: COLORS.gray,
        }}
      >
        Ending in
      </Text>
      <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.large }}>
        12h 30m
      </Text>
    </View>
  );
};

export const SubInfo = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "-7%",
        paddingHorizontal: SIZES.base,
      }}
    >
      <People />
      <EndDate />
    </View>
  );
};
