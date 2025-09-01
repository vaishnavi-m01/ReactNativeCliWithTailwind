import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native"

const Splash = () => {
    const navigation = useNavigation<any>();
     React.useEffect(() => {
      
    const timer = setTimeout(() => {
      console.log("Splash screen")
      navigation.replace('Tabs');
    }, 1500);
    return () => clearTimeout(timer);
  }, [navigation]);

   console.log("📺 Splash render");
    return (
        <View className="flex-1 items-center justify-center bg-red-500">
            <Text className="text-white text-xl">Hello Tailwind Css 👋</Text>
        </View>
    )
}

export default Splash