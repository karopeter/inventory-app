import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { 
  CategoryContainer,
  CategoryInputBox,
  CategoryLabelBox,
  CategoryLabelImage,
  CategorySection,
  CategoryLabel,
  CategoryInput,
  CategoryDrop,
  CategoryInputDescription
} from '../Category/category.styles';
import Selector from "../../../components/selector/selector";

const itemCategory = ["Cartier"];

export default function PhotoScreen() {
    return (
   <SafeAreaView>
    <ScrollView>
      <CategoryContainer>
        <CategoryInputBox>
          <CategoryLabelBox>
            <CategoryLabelImage 
               source={require("../../../assets/cartier.jpg")}
            />
          </CategoryLabelBox>
        </CategoryInputBox>
        <CategorySection>
           <CategoryLabel>Name</CategoryLabel>
           <CategoryInput 
              type="text"
              placeholder={"Cartier"}
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
              tyoe="text"
              placeholder={"Optional"}
           />
        </CategorySection>
      </CategoryContainer>
      </ScrollView>
    </SafeAreaView>
    );
}