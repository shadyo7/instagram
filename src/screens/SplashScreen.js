import React, { Component } from 'react'
import { Text, View, StyleSheet,Image } from 'react-native'

export class splashscreen extends Component {
    render() {
        return (
            <View style={styles.container}> 
                <View style={styles.logo}>
                <Image style={styles.logoimage} source={require('../assets/images/logo.png')}/>
                </View>
                <View style={styles.tagline}>
                <Text style={styles.from} >from</Text>
                <View style={styles.taglinelogo} >
                <Image  style={styles.fblogo} source={require('../assets/images/tag.png')}/>
                </View>
                </View>
            </View>
        )
    }
}

export default splashscreen

const styles = StyleSheet.create({
    container:{
      flex:1,
      display:'flex'
    },
    logo:{
        flex:1,
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'
      },
      tagline:{
        flex:1,
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center',
        marginBottom:30,
      },
      logoimage:{
          width:80,
          height:80,
      },
      taglinelogo:{
        width:'30%',
        height:'10%',
      },
      fblogo:{
          flex:1,
          width:undefined,
      },
      from:{
          color:'grey',
          marginBottom:10,
      }

   
 });
 