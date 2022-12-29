import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FAB, Button, TextInput, Avatar, Card } from 'react-native-paper';
import { updateProfile } from '../services/user';
const Profile = () => {
        const [email, setEmail] = useState("");
        const [name, setName] = useState("");
        const [username, setUsername] = useState("");
        const [image, setImage] = useState("");
        
        return <View style={style.box}>
           <Card style={style.card}>
           <Avatar.Image 
            style={style.avatar}
            size={150} source={'https://media.licdn.com/dms/image/D4D03AQFb4-b9S0puJQ/profile-displayphoto-shrink_800_800/0/1667798048783?e=2147483647&v=beta&t=10QuReQzmBtA9QX7FYDX8ePXQquOMjxj77Y9kzAshSo'} />
            
            <FAB 
            icon="camera" 
            style={{
                ...style.fab,
                left:'-12.5%'
            }} 
            onPress={() => console.log('Pressed')}
            />
            <FAB 
            icon="folder-image" 
            style={{
                ...style.fab,
                right:'-12.5%'
            }} 
            onPress={() => console.log('Pressed')}
            />
           </Card>
            
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
            label="Usuário"
            value={username}
            onChangeText={text => setUsername(text)}
            />
            <TextInput
            style={style.input}
            mode="outlined"
            label="Nome"
            value={name}
            onChangeText={text => setName(text)}
            />
            <Button style={style.button} mode="contained" color="primary" onPress={() => updateProfile({})}>Atualizar Perfil</Button>
            </View>
}
const style = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 0,
        bottom: 0,
        borderRadius: '100%'
    },
    card: {
         boxShadow:'none'
    },
        
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

export default Profile;