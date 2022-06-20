import React from "react";
import {
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  View,
  FlatList,
} from "react-native";
import {
  SubInfo,
  CircleButton,
  RectButton,
  FocusedStatusBar,
  DetailsBid,
  DetailsDesc,
} from "../components";
import { SHADOWS, SIZES, assets } from "../constants";
import { useNavigation } from "@react-navigation/native";
const DetailsHeader = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View>
      <Image
        source={data.image}
        resizeMode={"cover"}
        style={{ width: "100%", height: 373 }}
      />
      <CircleButton
        imgUrl={assets.left}
        left={10}
        top={StatusBar.currentHeight + 10}
        handlePress={() => navigation.goBack()}
      />
      <CircleButton
        imgUrl={assets.heart}
        right={10}
        top={StatusBar.currentHeight + 10}
      />
    </View>
  );
};

export const DetailsScreen = ({ route, navigaion }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        transLucent={true}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: SIZES.large,
          width: "100%",
          position: "absolute",
          bottom: 0,
          zIndex: 1,
          backgroundColor: "rgba(255,255,255,0.5)",
          paddingVertical: SIZES.base,

          // paddingVertical: SIZES.base,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={data.bids}
        renderItem={(item) => <DetailsBid bid={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => {
          return (
            <React.Fragment>
              <DetailsHeader data={data} navigation={navigaion} />
              <View style={{ padding: SIZES.medium }}>
                <SubInfo />
                <DetailsDesc data={data} />
                {data.bids.length > 0 && (
                  <Text
                    style={{
                      paddingTop: SIZES.font,
                      fontWeight: "bold",
                      fontSize: SIZES.large,
                    }}
                  >
                    Current Bid
                  </Text>
                )}
              </View>
            </React.Fragment>
          );
        }}
      />
    </SafeAreaView>
  );
};
