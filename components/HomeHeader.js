import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { SIZES, assets, COLORS, FONTS } from "../constants";

const HomeHeader = ({ onSearch }) => {
  return (
    // parent view
    <View
      style={{
        width: "100%",
        padding: SIZES.small,
      }}
    >
      {/* logo and avatar  */}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: SIZES.base,
          alignItems: "center",
        }}
      >
        {/* logo  */}
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 100, height: 50 }}
        />
        {/* avatar and verified  */}
        <View
          style={{
            width: "40%",

            alignItems: "flex-end",
          }}
        >
          <Image source={assets.person01} style={{ width: 50, height: 50 }} />
          <Image
            source={assets.badge}
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 20,
              height: 20,
            }}
          />
        </View>
      </View>
      {/* header and intro  */}
      <View
        style={{
          paddingVertical: SIZES.font,
          paddingHorizontal: SIZES.font,
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            fontFamily: FONTS.regular,
            fontSize: SIZES.large,
          }}
        >
          Hello Victoria👋
        </Text>
        <Text
          style={{
            color: COLORS.white,
            fontFamily: FONTS.regular,
            fontSize: SIZES.extraLarge,
            fontWeight: "bold",
            paddingTop: 8,
          }}
        >
          Let's Find Masterpiece Art
        </Text>
      </View>
      {/* search bar and logo container */}
      <View
        style={{
          backgroundColor: "gray",
          width: "80%",
          borderRadius: SIZES.font,
          marginLeft: SIZES.font,
          marginVertical: SIZES.medium,
        }}
      >
        {/* logo and search bar  */}
        <View
          style={{
            padding: SIZES.base,
            flexDirection: "row",
            marginHorizontal: SIZES.font,
          }}
        >
          <Image
            source={assets.search}
            style={{
              width: 25,
              height: 25,
              paddingTop: 2,
              marginRight: SIZES.large,
            }}
            resizeMode={"contain"}
          />
          <TextInput
            placeholder="Search NFTs"
            style={{ flex: 1, color: "white" }}
            placeholderTextColor={"white"}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
