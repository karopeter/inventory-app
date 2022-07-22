import React, { useCallback, useState } from 'react';
import SelectDropdown from "react-native-select-dropdown";
import { FontAwesome } from "./icons";


export default function Selector({
    data,
    defaultButtonText,
    buttonStyle,
    buttonTextStyle,
    setSelectedItem,
    dropdownIconPosition = "right",
    dropdownIconColor = "#000",
    dropdownIconSize = 25,
}) {
  const onSelect = useCallback(
    (item, i) => setSelectedItem(item),
    [setSelectedItem]
  );
  return (
   <SelectDropdown 
      data={data}
      defaultButtonText={defaultButtonText}
      buttonStyle={{
        backgroundColor: "#fff",
        ...buttonStyle
      }}
      buttonTextStyle={{
        left: 40,
      }}
      renderDropdownIcon={() => (
        <FontAwesome 
           name={"caret-down"}
           size={dropdownIconSize}
           color={dropdownIconColor}
        />
      )}
      dropdownIconPosition={dropdownIconPosition}
   />
  );
}