import { Component } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Movie from "./movie";
class UI1 extends Component{
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Movie Explorer</Text>
                </View>
                <View style={styles.body}>
                    <ScrollView>
                        <Movie description={"Batman no way home"}></Movie>
                    </ScrollView>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header: {
        flex:1,
        backgroundColor: '#f34f19',
        alignItems:'center',
        justifyContent: 'center',
    },
    body: {
        flex:15,
    },
    title: {
        color:'white',
        fontSize: 20,
    }
})
export default UI1