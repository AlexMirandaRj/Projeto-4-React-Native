import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, TextInput, Avatar } from 'react-native-paper';
import { login } from '../services/auth';

const Login = ({navigation, route}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return <View style={style.box}>
        <Avatar.Image 
        style={style.avatar}
        size={150} source={require('../assets/img/list.png')} />
        
        <TextInput
        style={style.input}
        mode="outlined"
        label="E-mail"
        value={email}
        onChangeText={text => setEmail(text)}
        />
        <TextInput
        style={style.input}
        mode="outlined"
        label="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        />
       

        <Button style={style.button} mode="contained" onPress={() => login(email, password)}>LOGAR</Button>
        <Button style={style.button} onPress={() => navigation.navigate('Register')}>REGISTRAR</Button>
        
    </View>
}
    const style = StyleSheet.create({
        
        avatar: {
            marginBottom:10,
            backgroundColor: 'purple' 
            
        },
        button: {
            marginTop: 10
        },
        box: {
            padding:20,
            display:'flex',
            justifyContent:'center',
            width: '100%',
            height: '100%',
            alignItems: 'center'
        },
        input: {
            width: '100%'
        }

    })


export default Login;