import { View, Text } from "react-native";
import React from "react";
import { COLORS, SIZES, assets, FONTS } from "../constants";
import { EthPrice } from "./SubInfo";
import { useState } from "react";

const DetailsDesc = ({ data }) => {
  const [text, settext] = useState(data.description.slice(0, 100));
  const [readMore, setreadMore] = useState(false);
  return (
    // parent container
    <View>
      {/* title and eth container  */}
      <View style={{ flexDirection: "row" }}>
        {/* title container  */}
        <View>
          {/* main text  */}
          <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraLarge }}>
            {data.name}
          </Text>
          {/* smaller text */}
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.medium,
              color: COLORS.gray,
            }}
          >
            by {data.creator}
          </Text>
        </View>
        {/* eth container  */}
        <View
          style={{
            width: "100%",
            left: 140,
            marginTop: SIZES.base,
          }}
        >
          <EthPrice price={data.price} />
        </View>
      </View>

      {/* description View  */}
      <View style={{ paddingVertical: SIZES.base }}>
        <Text style={{ paddingTop: SIZES.base, fontSize: SIZES.large }}>
          Description
        </Text>
        <Text style={{ paddingTop: SIZES.small, color: COLORS.gray }}>
          {text}
          {/* if read more is not activated the three dots should show, otherwise stated  */}
          <Text>{!readMore && "..."}</Text>
          <Text
            // what happens when the read more is pressed
            onPress={() => {
              // if you want it to read more, settext to data.description and readmore should be true
              if (!readMore) {
                settext(data.description), setreadMore(true);
                // other wise sould be false
              } else {
                settext(data.description.slice(0, 100), setreadMore(false));
              }
            }}
            style={{ fontSize: SIZES.medium, color: COLORS.primary }}
          >
            {readMore ? "Read Less" : "Read More"}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default DetailsDesc;
