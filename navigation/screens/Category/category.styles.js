import styled from 'styled-components/native';
import { TextInput } from 'react-native';

export const CategoryContainer = styled.View`
  background-color: #D3D3D3;
  flex: 1;
  padding: 20px;
`;

export const CategoryView = styled.View`
    align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

export const CategorySection = styled.View`
   margin-top: 40px;
   left: 20px;
`;

export const CategoryLabel = styled.Text`
   color: #000;
   font-size: 15px;
   margin-bottom: 5px;
`;

export const CategoryInput = styled(TextInput)`
   width: 280px;
   height: 38px;
   background: #fff;
   padding: 10px;
   margin-bottom: 10px;
`;

export const CategoryInputDescription = styled(TextInput)`
   width: 280px;
   height: 80px;
   background: #fff;
   padding: 10px;
`;

export const CategoryDrop = styled.View`
   position: relative;
  margin-bottom: 10px;
`;

export const CategoryInputBox = styled.View`
   display: flex;
`;

export const CategoryLabelBox = styled.View`
   background-color: #fff;
   height: 100px;
   width: 100px;
   border-radius: 60px;
   z-index: 2000;
   left: 100px;
   cursor: pointer;
`;

export const CategoryLabelImage = styled.Image`
   width: 80px;
   height: 80px;
   left: 10px;
   top: 10px;
`;