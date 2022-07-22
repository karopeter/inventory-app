import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/Home/HomeScreen';
import InventoryScreen from './screens/Inventory/InventoryScreen';
import CategoryScreen from './screens/Category/CategoryScreen';
import PhotoScreen from './screens/Photo/PhotoScreen';

// Screen names
const homeName = 'Home';
const inventoryName = 'Inventory';
const categoryName = 'Category';
const photoName = 'Search';

const Tab =  createBottomTabNavigator();

export default function MainContainer() {
    return (
     <NavigationContainer>
        <Tab.Navigator
          headerMode="none"
          style={{
            backgroundColor: "#fff",
            paddingTop: 30,
          }}
          screenOptions={({route}) => ({
            tarbBarIcon: ({focused, color, size}) => {
                let iconName;
                let rn = route.name

                if (rn === homeName) {
                    iconName = focused ? 'home' : 'home-outlined';
                } else if (rn === inventoryName) {
                    iconName = focused? 'list' : 'list-outlined';
                } else if (rn === categoryName) {
                   iconName = focused ? 'category' : 'category-outlined';
                }

                return <Ionicons name={"home"} size={size} color={color} />
            }
          })}
        >
         <Tab.Screen name={homeName} component={HomeScreen} />
         <Tab.Screen name={inventoryName} component={InventoryScreen} />
         <Tab.Screen name={categoryName} component={CategoryScreen} />
         <Tab.Screen name={photoName} component={PhotoScreen} />
        </Tab.Navigator>
    </NavigationContainer>
    );
}

