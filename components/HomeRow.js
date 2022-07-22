import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'; 
import tw from "tailwind-react-native-classnames";

const HomeRow = () => {
    const data = [
        {
         id: 1,
         name: "Cartier ring",
         purchasePrice: 5780,
         photo: "https://i.ibb.co/znXC7LQ/marcus-lewis-U63z-XX2f7ho-unsplash.jpg"
        },
        {
        id: 2,
        name: "Guitar",
        purchasePrice: 850,
        photo: "https://i.ibb.co/4dfndL2/louis-hansel-M-d-J-Scwa-LE-unsplash.jpg"
        },
    ]
    return (
        <FlatList
         data={data}
         keyExtractor={(item) => item.id}
         horizontal
         renderItem={({ item }) => (
          <TouchableOpacity
             style={tw`bg-gray-100 h-60 m-2 mt-5 w-40`}
          >
            <View>
               <Image 
                 style={{
                    width: 160,
                    height: 150,
                 }}
                 source={{ uri: item.photo }}
               />
               <Text 
                 style={tw`text-sm font-semibold`}
                 style={{
                    marginTop: 10,
                    left: 20,
                 }}
                 >
                 {item.name}
                </Text>
                <Text
                  style={tw`text-sm font-semibold`}
                  style={{
                    marginTop: 20,
                    left: 20,
                  }}
                >
                   € {item.purchasePrice}
                </Text>
            </View>
            <TouchableOpacity
              style={tw`bg-gray-100 h-60 m-2 mt-10 w-40`}
            >
               <View>
                <Image 
                  style={{
                    width: 160,
                    height: 150,
                 }}
                  source={require("../assets/channel.jpg")}
                />
               </View>
               <Text style={tw`text-sm font-semibold`}>
               € {item.purchasePrice}
               </Text>
            </TouchableOpacity>
          </TouchableOpacity>
         )}
        />
    );
}

export default HomeRow;

