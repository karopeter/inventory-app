import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { 
  HomeContainer,
  HomeWrapper,
  HomeLayout,
  HomeLayoutBox
} from '../Home/home.styles';
import PlusCircleIcon from 'react-native-vector-icons/AntDesign';
import tw from "tailwind-react-native-classnames";

const InventoryScreen = () => {
    return (
    <SafeAreaView>
    <ScrollView>
     <HomeContainer>
        <HomeWrapper>
        <HomeLayout>
              <Text
                style={{
                  fontSize: 20,
                  right: 40,
                }}
               >
                 Inventory
              </Text>
          </HomeLayout>
          <HomeLayout>
            <TouchableOpacity
            onPress={() => setIsPressed(!isPress)}
             style={{
               left: 20,
             }}
             >
               <PlusCircleIcon 
                name="pluscircle"
                color="blue"
                size={30}
               />
            </TouchableOpacity>
          </HomeLayout>
        </HomeWrapper>
        <HomeWrapper>
           <HomeLayoutBox>
           <TouchableOpacity style={tw`bg-gray-100 h-60 m-2 mt-5 w-40`}>
              <View>
                <Image 
                 style={{
                  width: 160,
                  height: 150,
                 }}
                 source={require("../../../assets/cartier.jpg")}
                />
                <Text
                  style={{
                    marginTop: 15,
                    left: 20,
                  }}
                 >
                  Cartier ring
                 </Text>
                 <Text
                  style={{
                    left: 20,
                  }}
                >
                  € 5,780
                </Text>
              </View>
             </TouchableOpacity>
           </HomeLayoutBox>
           <HomeLayoutBox>
            <TouchableOpacity style={tw`bg-gray-100 h-60 m-2 mt-5 w-40`}>
              <View>
                <Image 
                  style={{
                    width: 160,
                    height: 150,
                  }}
                   source={require("../../../assets/necklace.jpg")}
                />
                <Text
                  style={{
                    marginTop: 15,
                    left: 10,
                  }}
                >
                 Lou Yetu necklace  
                
                </Text>
                <Text
                  style={{
                    left: 20,
                  }}
                >
                  € 60
                </Text>
              </View>
             </TouchableOpacity>
           </HomeLayoutBox>
        </HomeWrapper>
        <HomeWrapper>
          <HomeLayoutBox>
            <TouchableOpacity style={tw`bg-gray-100 h-60 m-2 mt-5 w-40`}>
                <View>
                  <Image 
                    style={{
                      width: 160,
                      height: 150,
                    }}
                    source={require("../../../assets/channel.jpg")}
                  />
                  <Text
                    style={{
                      marginTop: 15,
                    }}
                  >
                    Chanel pearl bracelet
                  </Text>
                  <Text
                    style={{
                      left: 20,
                    }}
                  >
                    €2,000
                  </Text>
                </View>
            </TouchableOpacity>
          </HomeLayoutBox>
          <HomeLayoutBox>
            <TouchableOpacity style={tw`bg-gray-100 h-60 m-2 mt-5 w-40`}>
               <View>
                 <Image 
                   style={{
                    width: 160,
                    height: 150,
                   }}
                   source={require("../../../assets/chopboard.jpg")}
                 />
                 <Text
                   style={{
                    marginTop: 15,
                    left: 40,
                   }}
                 >
                  Chopard {'\n'}
                  Watch
                 </Text>
                 <Text
                   style={{
                    left: 40,
                   }}
                 >
                  €7,000
                 </Text>
               </View>
            </TouchableOpacity>
          </HomeLayoutBox>
        </HomeWrapper>
     </HomeContainer>
     </ScrollView>
     </SafeAreaView>
    );
}

export default InventoryScreen;