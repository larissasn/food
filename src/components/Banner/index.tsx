import { View, Text, Pressable, Image } from "react-native";
import PagerView from "react-native-pager-view";

export function Banner() {
  return (
    <View className="w-full h-36 md:h-60 rounded-2xl mt-5 mb-4">
      <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
        <Pressable
          className="w-full h-36 md:h-60 rouded-2xl"
          key={1}
          onPress={() => console.log("Cliquei no banner 1")}
        >
          <Image
            source={require("../../assets/banner1.png")}
            className="w-full h-36 md:h-60 rounded-2xl"
          />
        </Pressable>

        <Pressable
          className="w-full h-36 md:h-60 rouded-2xl"
          key={1}
          onPress={() => console.log("Cliquei no banner 1")}
        >
          <Image
            source={require("../../assets/banner2.png")}
            className="w-full h-36 md:h-60 rounded-2xl"
          />
        </Pressable>
      </PagerView>
    </View>
  );
}
