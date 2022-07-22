import React, {useState} from 'react';
import { 
   HomeContainer,
   HomeWrapper,
   HomeLayout
} from './home.styles';
import { Text, TouchableOpacity } from 'react-native';
import PlusCircleIcon from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native';
import HomeRow from '../../../components/HomeRow';

 const HomeScreen = () => {
   const [isPressed, setIsPressed] = useState(false);
    return (
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

       {/* Howrows */ }
       <HomeRow />
     </HomeContainer>
     </ScrollView>
    );
}

export default HomeScreen;