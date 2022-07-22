import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import CameraIcon from 'react-native-vector-icons/AntDesign';
import {
 CategoryContainer,
 CategoryView,
 CategorySection,
 CategoryLabel,
 CategoryInput,
 CategoryDrop,
 CategoryInputDescription
} from './category.styles';
import Selector from "../../../components/selector/selector";
const itemCategory = ["Bracelet"];

export default function CategoryScreen({ navigation }) {
    return (
    <SafeAreaView>
      <ScrollView>
      <CategoryContainer>
         <CategoryView>
           <TouchableOpacity onPress={() => navigation.navigate('Photo')}>
             <CameraIcon 
                name="camerao"
                size={50}
                color="blue"
             />
           </TouchableOpacity>
           <Text
             style={{
              justifyContent: 'center',
              fontSize: 20,
             }}
            >
             Add Photo
            </Text>
         </CategoryView>
         <CategorySection>
            <CategoryLabel>Name</CategoryLabel>
            <CategoryInput 
              type="text"
              placeholder={"Bracelet"}
            />
            <CategoryLabel>Category</CategoryLabel>
            <CategoryDrop>
                <Selector 
                   data={itemCategory}
                   buttonStyle={{
                    width: 280,
                    height: 38,
                    padding: 5,
                   }}
                   dropdownIconPosition={"right"}
                   defaultButtonText="Select a category..."
                   buttonTextStyle={{
                     fontSize: 20,
                     right: 50,
                   }}
                />
            </CategoryDrop>
            <CategoryLabel>Value</CategoryLabel>
            <CategoryInput
              type="text"
              placeholder={"700"}
            />
            <CategoryLabel>Description</CategoryLabel>
            <CategoryInputDescription 
               type="text"
              placeholder={"Optional"}
            />
         </CategorySection>
      </CategoryContainer>
      </ScrollView>
      </SafeAreaView>
    );
}