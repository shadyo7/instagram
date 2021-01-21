import React, { Component } from 'react'
import { Text, View,StyleSheet,Image,TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

class SignUp extends Component {
    render() {
        return (
            <View style={styles.container}>
             <View style={styles.logo}>
             <Image style={styles.instagramlogo} source={require('../assets/images/instagram.png')}/>
             <Text style={{color:"gray",fontWeight: "bold"}}>Sign Up to see photos and {'\n'} videos from you friends</Text>
             </View>
             <View style={styles.logo}>
             <TouchableOpacity style={styles.fbButton}>
                <Text style={{color: 'white'}}> <Icon style={{color:"white"}} name="facebook-square" size={20} color="grey" />  Continue with facebook</Text>
               </TouchableOpacity>
             </View>
             <View style={styles.main}>
                <View  style={styles.logdetail}>
                <TextInput style={styles.input} placeholder="Mobile number or Email"/>
                </View>
                <View  style={styles.logdetail}>
                <TextInput style={styles.input} placeholder="Full Name"/>    
                </View>
                <View  style={styles.logdetail}>
                <TextInput style={styles.input} placeholder="User name"/>    
                </View>
                <View  style={styles.logdetail}>
                <TextInput style={styles.input} placeholder="Password"/>    
                </View>
                <TouchableOpacity style={styles.Button}>
                    <Text style={{color:"white"}}>Sign up</Text>
                </TouchableOpacity>
             </View>
             <View style={styles.logo}>
                 <Text style={styles.policy}>By Signing up,you agree to our {'\n'} terms & privacy policy</Text>
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
logo:{
        flex:1,
        display:'flex',
        alignItems:'center'
       },
instagramlogo:{
       width:150,
       height:50,
       marginTop:40
       },
fbButton:{
        height:'28%',
        width:'60%',
        justifyContent:'center',
        backgroundColor:'#0195f7',
        alignItems:'center',
        borderRadius:6,
        marginTop:40
        
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
main:{
        flex:1,
        display:'flex',
        alignItems:'center',
        marginBottom:170
    
       },
logdetail:{
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
        paddingBottom:8,
    },
Button:{
        height:'30%',
        width:'80%',
        justifyContent:'center',
        backgroundColor:'#0195f7',
        alignItems:'center',
        borderRadius:8,
        marginTop:10,
        alignSelf:'center'
        },
policy:{
            textAlign:'center',
            color:"gray",
            marginTop:30
        }

});

export default SignUp
