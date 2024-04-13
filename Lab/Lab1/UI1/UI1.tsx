import React, { Component } from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Icons from "react-native-vector-icons/FontAwesome";


export default class UI1 extends Component{
    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Icons name = "navicon" > </Icons>
                        <Image source={require('./image/avatar.png')}/> 
                    </View>
                    <Text>
                        <Text style ={styles.titleText}>
                            {'Hey Alex'}
                            {'\n'}
                        </Text>
                        <Text>
                            Find a course you want to learn
                        </Text>
                    </Text>
                    <View style={styles.search}>
                        <Icons name="search" size={25} color="black" />
                        <TextInput>
                            <Text>Search any thing</Text>
                        </TextInput>
                    </View>
                    <View style={styles.spaceBetween}>
                        <Text>
                            Categories
                        </Text>
                        <Text>
                            See All
                        </Text>
                    </View>
                    <View style={[styles.spaceAround,styles.flexWrap]}>
                        <View style={styles.tag}>
                            <ImageBackground source={require('./image/image1.png')}
                            style={styles.tagBackground}>
                                <View>
                                    <Text>
                                        UX Design
                                    </Text>
                                    <Text>
                                        25 Courses
                                    </Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.tag}>
                            <ImageBackground source={require('./image/image2.png')}
                            style={styles.tagBackground}>
                                <View>
                                    <Text>
                                        Marketing
                                    </Text>
                                    <Text>
                                        20 Courses
                                    </Text>
                                </View>
                            </ImageBackground >
                        </View>
                        <View style={styles.tag}>
                            <ImageBackground source={require('./image/image3.png')}
                            style={styles.tagBackground}>
                                <View>
                                    <Text>
                                        Photography
                                    </Text>
                                    <Text>
                                        10 Courses
                                    </Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.tag}>
                            <ImageBackground 
                            source={require('./image/image4.png')}
                            style={styles.tagBackground}>
                                <View>
                                    <Text>
                                        Business Photography
                                    </Text>
                                    <Text>
                                        7 Courses
                                    </Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View>

                        </View>
                        <View>

                        </View>
                        <View>

                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',

    },
    baseText: {
        fontFamily: 'Roboto',
        color: 'black',
        fontSize: 20,
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    search: {
        height: 50,
        width: '100%',
        backgroundColor: '#e0e0e0',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    spaceAround: {
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    flexWrap: {
        flexWrap: 'wrap',
        gap: 10,
    },
    tag: {
        height: 250,
        width: '48%',
        borderRadius: 20,
    },
    spaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tagBackground: {
        flex: 1,
        resizeMode: 'cover',
        borderRadius: 20,
        overflow: 'hidden',
    },
    
})