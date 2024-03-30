import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.form}>
      <View style={styles.boxLogo}>
      <Image style={styles.logo} source={require('assets\logo-pra-fazer.png')}>
      </Image>
    </View>
    <View>
        <Text style={styles.label}></Text>
        <TextInput style={styles.input} placeholder='E-mail'>
        </TextInput>
    </View>
    <View>
        <Text style={styles.label}></Text>
        <TextInput style={styles.input}
        placeholder='Senha'></TextInput>
    </View>
    <TouchableOpacity style={styles.btn}
    >
        <Text style={styles.btnText}>Entrar</Text>
    </TouchableOpacity>
    <View>
        <Text style={styles.user}>Criar Usuário</Text>
    </View>

</View>
  );
}

const styles = StyleSheet.create({
    form: {
        backgroundColor: '#FF6600',
        padding: 30,
        height: '100%',
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        
    },
    user:{
      fontSize: 18,
      marginBottom: 10,
      textAlign: 'center',
      color: '#FFF',
    },
    input: {
        fontSize: 28,
        borderRadius: 10,
        backgroundColor: '#DDD',
        padding: 10,
        marginBottom: 20,
    },
    btn: {
        backgroundColor: '#070A52',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
    btnText: {
        fontSize: 24,
        color: '#FFF',
        textAlign: 'center',
    },
    media: {
        fontSize: 40,
        textAlign: 'center',
        backgroundColor: '#DDD',
        padding: 10,
        borderRadius: 10,
    },
    resultado: {
        fontSize: 24,
        textAlign: 'center',
        backgroundColor: '#32CD32',
        color: '#FFF',
        padding: 10,
        borderRadius: 10,
   },
    boxLogo: {
        backgroundColor: '#09C',
        marginBottom: 40,
        paddingTop: 80,
        alignItems: 'center',
  },
    logo: {
        width: 260,
        height: 50,
  }
});
