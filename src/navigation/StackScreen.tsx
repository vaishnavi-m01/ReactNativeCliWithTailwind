import { RootStackParamList } from "../utils/type";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from "../screen/Splash";
import Tabs from "../screen/Tabs";



const StackScreen = () => {

    const stack = createNativeStackNavigator<RootStackParamList>();
    return (
        <NavigationContainer>
            <stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
                <stack.Screen name="Splash" component={Splash} />
                <stack.Screen name="Tabs" component={Tabs}/>
            </stack.Navigator>
        </NavigationContainer>

    )
}

export default StackScreen