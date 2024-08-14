import { Text, View, ScrollView} from "react-native";
import Constants from 'expo-constants'

import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { RestaurantVerticalList } from "../components/list";
import { Section } from "../components/section";
import { Restaurants } from "../components/restaurants";
import { TrendingFoods } from "../components/trending";



const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView 
      style={{ flex: 1 }} 
      className="bg-slate-200" 
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header/>

        <Banner/>

        <Search/>
      </View>

      <Section
        name="Comidas em alta"
        label="Veja mais"
        action={ () => console.log("CLICOU NO VEJA MAIS")}
        size="text-2xl"
      />
      <TrendingFoods/>

      <Section
        name="Famosos no DevFood"
        label="Veja todos"
        action={ () => console.log("CLICOU NO Famosos")}
        size="text-xl"
      />

      <Restaurants/>

      <Section
        name="Restaurantes"
        label="Veja todos"
        action={ () => console.log("CLICOU NO RESTAURANTES")}
        size="text-xl"
      />

      <RestaurantVerticalList/>

    </ScrollView>
  );
}
