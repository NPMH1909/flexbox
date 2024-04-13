import React from "react"
import { View,Image, Text, StyleSheet } from "react-native"
import Icons from "react-native-vector-icons/Ionicons"

const movie = ({description,}) => {
  return (
    <View style={styles.container}>
            

        <Text>
            {description}
        </Text>
        <Icons name='hand-right-outline'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
  }
})

export default movie

