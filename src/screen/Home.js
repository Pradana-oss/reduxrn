import React, { Component } from 'react';

class Home extends Component {

render(){
    return (
        <View>
            <Text>Selamat Datang</Text>
            <TextInput name="username" style ={styles.textInput} onChangeText={(text)=>this.setState({username:text})}/>
            <Text>Password</Text>
            <TextInput name = "Password" secureTextEntry={true} 
            onChangeText={(text)=>this.setState({password:text})} style={styles.textInput}/>
            <Button title = "Login"/>
        </View>
    );
}
}