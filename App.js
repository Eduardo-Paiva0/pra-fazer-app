import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.form}>
      <View style={styles.boxLogo}>
      <Image style={styles.logo} source={require('./src/assets/logo-pra-fazer.png')}>
      </Image>
    </View>
    <View>
        <Text></Text>
        <TextInput style={styles.input} placeholder='E-mail'>
        </TextInput>
    </View>
    <View>
        <Text></Text>
        <TextInput style={styles.input}placeholder='Senha'>
        </TextInput>
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
        height: '100%',
        alignItems: "center",
        justifyContent: "center",
    },
    user:{
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
        color: '#FFF',
    },
    input: {
        fontSize: 18,
        borderRadius: 10,
        backgroundColor: '#DDD',
        padding: 25,
        marginBottom: 10,
        width: 500,
    },
    btn: {
        backgroundColor: '#070A52',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        width: 500,
        marginTop: 10,
    },
    btnText: {
        fontSize: 24,
        color: '#FFF',
        textAlign: 'center',
    },
    boxLogo: {
        marginBottom: 5,
        paddingTop: 80,
        alignItems: 'center',
  },
    logo: {
        width: 280,
        height: 50,
        alignItems: 'center'
  }
});
