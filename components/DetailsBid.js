import { View, Text, Image } from "react-native";
import React from "react";
import { EthPrice } from "./SubInfo";
import { COLORS, SIZES, FONTS, assets } from "../constants";

const DetailsBid = ({ bid }) => {
  // console.log(bid.item);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2,
        width: "100%",
      }}
    >
      <Image
        source={bid.item.image}
        resizeMode={"contain"}
        style={{ width: 43, height: 43 }}
      />
      <View style={{}}>
        <Text
          style={{
            color: COLORS.primary,
            fontWeight: "500",
            fontSize: SIZES.medium,
            paddingBottom: SIZES.base,
          }}
        >
          Bid placed by {bid.item.name}
        </Text>
        <Text style={{ color: COLORS.gray }}>{bid.item.date}</Text>
      </View>
      <EthPrice price={bid.item.price} />
    </View>
  );
};

export default DetailsBid;
