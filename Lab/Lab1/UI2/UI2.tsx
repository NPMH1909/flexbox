import { Component } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icons from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/Ionicons";
export default class UI2 extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={styles.top}>
                    <ImageBackground
                        source={require('./image/background.jpg')}
                        style={styles.tagBackground}>
                        <View style={styles.container}>
                            <View style={styles.spaceBetween}>
                                <Icons name="chevron-left" size={25}/>
                                <Icons name="ellipsis-v" size={25}/>
                            </View>
                            <View style={{height: 20}} />
                            <Image
                            style={styles.logo} 
                            source={require('./image/bestseller.png')} />
                            <Text style={[styles.baseText, styles.titleText]}>
                                Design Thinking
                            </Text>
                            <View style={{height: 14}} />
                            <View style={styles.intro}>
                                <Icon name="people" size={22}/>
                                <Text style = {[styles.introText]}>
                                    55k
                                </Text>
                                <Icons name="star" size={22}/>
                                <Text style = {[styles.introText]}>
                                    4.1k
                                </Text>
                            </View>
                            <View style={{height: 20}} />
                            <Text style={[styles.baseText, styles.titleText]}>
                                $50
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
                <View
                style={[
                    styles.bottom,
                    styles.container,
                    {paddingTop: 30, borderTopLeftRadius: 30,borderTopRightRadius:30},
                    
                ]}>
                <Text style={[styles.baseText, {fontWeight: 'bold'}]}>
                    {'Course Content'}
                </Text>
                <View style={{height: 20}} />
                <View style={styles.container2}>
                    <Text style={[styles.baseText,styles.number]}>
                    {'01'}
                    </Text>
                    <View style={styles.playlocation}>
                    <Text style={[styles.baseText,styles.time]}>                      
                        {'5:35 mins'}
                    </Text>
                    <Text style={[styles.baseText,styles.content]}>
                        {'Welcome to the Course'}
                    </Text>
                    </View>
                    <View style={styles.playbutton}>
                    <Icons name="play" size={20} color="white" />
                    </View>
                </View>
                <View style={styles.lineContent}>
                    <Text style={[styles.baseText,styles.number]}>
                    {'02'}
                    </Text>
                    <View style={styles.playlocation}>
                    <Text style={[styles.baseText,styles.time]}>     
                        {'7:35 mins'}
                    </Text>
                    <Text style={[styles.baseText,styles.content]}>
                        {'Design Thinking - Intro'}
                    </Text>
                    </View>
                    <View style={styles.playbutton}>
                    <Icons name="play" size={20} color="white" />
                    </View>
                </View>
                <View style={styles.lineContent}>
                    <Text style={[styles.baseText,styles.number]}>
                    {'03'}
                    </Text>
                    <View style={styles.playlocation}>
                    <Text style={[styles.baseText,styles.time]}>     
                        {'10:35 mins'}
                    </Text>
                    <Text style={[styles.baseText,styles.content]}>
                        {'Design Thinking Process'}
                    </Text>
                    </View>
                    <View style={styles.playbutton}>
                    <Icons name="play" size={20} color="white" />
                    </View>
                </View>
                <View style={{height: 10}} />
                <View
                    style={[
                    {
                        flexDirection: 'row',
                        gap: 10,
                        justifyContent: 'space-between',
                    },
                    ]}>
                    <View style={styles.cart}>
                        <Icon2 name="bag-handle" color="#FF6670" size={25} />
                    </View>
                    <View style={styles.buybutton}>
                    <Text style={{fontSize: 15, color: '#fff', fontWeight: 'bold'}}>
                        Buy Now
                    </Text>
                    </View>
                </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    top: {
        flex:6
    },
    bottom: {
        flex:4,
        marginTop: '-10%',
        backgroundColor:'white',
    },
    container: {
        padding: 10,
    },
    spaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logo: {
        width: 150,
        height: 50,
        resizeMode: 'contain',
    },
    intro: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
    },
    tagBackground: {
        flex: 1,
        resizeMode: 'cover',
        overflow: 'hidden',
    },
    baseText: {
        fontFamily: 'Roboto',
        color: 'black',
        fontSize: 20,
    },
    titleText: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    introText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#a0a0a0',
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    number: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#e0e0e0',
        marginRight: 20,
        alignSelf: 'flex-start',
    },
    time: {
        color: '#e0e0e0', 
        fontSize: 16, 
        alignSelf: 'flex-start',
    },
    content: {
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        fontSize: 18,
    },
    playbutton: {
        height: 50,
        width: 50,
        backgroundColor: '#39b881',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 25,
    },
    cart: {
        height: 50,
        width: 70,
        alignItems: 'center',
        backgroundColor: '#FFEDEE',
        padding: 12,
        borderRadius: 30,
    },
    buybutton: {
        height: 50,
        backgroundColor: '#6E8AFA',
        flex: 1,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    playlocation: {
        flexDirection: 'column',
        flex: 1,
        marginRight: 40,
        alignSelf: 'flex-start',
    },
    lineContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
})