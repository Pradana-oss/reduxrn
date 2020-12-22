import React, { Component } from 'react';
import {connect} from 'react-redux';
import { TextInput  } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { View, StyleSheet, Text, Button } from 'react-native';


class Login extends Component{
    state = {
        username : '',
        password : '',
    }
    
    
   
    render(){
        return (
            <View>
                <Text>Username</Text>
                <TextInput name="username" style ={styles.textInput} onChangeText={(text)=>this.setState({username:text})}/>
                <Text>Password</Text>
                <TextInput name = "Password" secureTextEntry={true} 
                onChangeText={(text)=>this.setState({password:text})} style={styles.textInput}/>
                <Button title = "Login"/>
            </View>
        );
    }
}

const mapStateToProps= state =>{
    return {
        username :  state.username
    }
}

mapDispatchToProps= (dispatch) => {
    setUsername : dispatch(setUsername)
}

const styles = StyleSheet.create({

    textInput: {
        height: 40,
        borderColor: Colors.Black,
        borderBottomWidth : StyleSheet.hairlineWidth
    }

    
})

export default connect(mapStateToProps, mapDispatchToProps) (Login);