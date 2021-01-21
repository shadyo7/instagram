import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity,Image, Button, TextInput, } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

class InitialScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
               <View style={styles.language}>
               <TouchableOpacity><Text>English(United State) <Icon name="caret-down" size={20} color="grey" /> </Text></TouchableOpacity>
               </View>
               <View style={styles.login}>
               <Image style={styles.instagramlogo} source={require('../assets/images/instagram.png')}/>
               <TouchableOpacity style={styles.fbButton}>
                <Text style={{color: 'white'}}> <Icon style={styles.Iconcolor} name="facebook-square" size={20} color="grey" />  Continue with facebook</Text>
               </TouchableOpacity>
               <Text style={styles.color}>-------------OR-----------</Text>
               </View>
               <View>
               <View style={styles.main}>
                <View  style={styles.logdetail}>
                <TextInput style={styles.input} placeholder="User name, Email Id,"/>
                </View>
                <View  style={styles.logdetail}>
                <TextInput style={styles.input}  placeholder="Password"/>
                </View>               
               </View>
               <Text style={styles.password}>Forgot Password?</Text>
               <TouchableOpacity style={styles.Button}>
                <Text style={{color:'white'}}>Log In</Text>
               </TouchableOpacity>
                </View>
               <View style={styles.signup}>
               <Text style={styles.signupText}>
                   Don't have an account? 
               </Text>
               <TouchableOpacity>
                   <Text style={styles.signupbutton}>Sign Up</Text>
               </TouchableOpacity>
               </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
container:{
      flex:1,
      display:'flex',
      color:'#ffffff' 
    },
language:{
        flex:1,
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center'
      },
Iconcolor:{
       color:'white'
           },
color:{
       color:'gray',
       marginTop:20
           },
password:{
        marginLeft:200,
        fontSize:13,
        color:'#52acd2'
        },
login:{
       flex:1,
       display:'flex',
       justifyContent:'center',
       alignItems:'center'
       },
signup:{
        flex:1,
        display:'flex',
        alignItems:'center'
        },
instagramlogo:{
        width:'50%',
        height:'30%',
        marginBottom:10
              },
main:{
        marginTop:30
        },
logdetail:{
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
        paddingBottom:8,
            },

input:{
      paddingBottom: 4,
      height:30,
      width:250,
      borderColor: 'gray',
      borderRadius:4,
      borderWidth: 1,
      alignContent:'center' 
       },
fbButton:{
      height:'25%',
      width:'60%',
      justifyContent:'center',
      backgroundColor:'#0195f7',
      alignItems:'center',
      borderRadius:6,
      marginTop:10
         },
Button:{
      height:'15%',
      width:'80%',
      justifyContent:'center',
      backgroundColor:'#0195f7',
      alignItems:'center',
      borderRadius:8,
      marginTop:10,
      alignSelf:'center'
                
        },
signupText:{
          color:'gray'
           },
signupbutton:{
       color:'#52acd2',
       fontSize:15
        }
 
 });
export default InitialScreen

