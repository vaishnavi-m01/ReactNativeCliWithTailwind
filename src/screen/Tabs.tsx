import { TabParamList } from "../utils/type";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from "../tabs/Home";
import Profile from "../tabs/Profile";
 
       
const Tabs = () =>{
    const Tab = createBottomTabNavigator<TabParamList>();

   return(
        <Tab.Navigator
            screenOptions={{
                headerShown: true,
                tabBarActiveTintColor: '#6200ee',
                tabBarInactiveTintColor: 'gray',
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" size={size} color={color} />
                    ),
                }}
            />
    
        </Tab.Navigator>
    )
}

export default Tabs