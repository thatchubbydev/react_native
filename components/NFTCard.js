import { View, Text, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { CircleButton, RectButton } from "../components";
import { SubInfo, NFTTitle, EthPrice } from "../components";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";

const NFTCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
        <SubInfo />
      </View>
      {/* second div  */}
      <View
        style={{
          width: "100%",
          padding: SIZES.base,
          justifyContent: "space-between",
          marginTop: SIZES.large,
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.font}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: SIZES.base,
            right: SIZES.base,
          }}
        >
          <EthPrice price={data.price} />
          <RectButton
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
