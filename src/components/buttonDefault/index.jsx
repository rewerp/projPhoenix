import React from 'react';

import { Text, TouchableOpacity } from "react-native";

import { styles } from './styles';

export function ButtonDefault(Props) {
   return(
      <TouchableOpacity style={styles.container} onPress={Props._onPress} >
         <Text style={styles.text} >{Props.title}</Text>
      </TouchableOpacity>
   )
}