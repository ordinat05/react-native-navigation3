import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import React, { useState } from "react";
import Logo from "../components/Logo";

export default function Login_screen({ navigation }) {
  const u = "1";
  const p = "1";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    if (username == u && password == p) {
      navigation.navigate("nameHome");
    } else {
      setUsername("");
      setPassword("");
      alert("Kullanıcı Adı Şifre Hatalı");
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={styles.text}
          onPress={() => Linking.openURL("http://tammerkez.com")}
        >
          www.TAMMERKEZ.com
        </Text>
        <Text style={styles.text}>Kullanıcı Adı: 1 Şifre: 1</Text>

        <Text style={styles.text}>Login Sayfası</Text>
        <Text style={styles.text}>
          --------------- TAMMERKEZ ---------------
        </Text>
        <Logo />
        <TextInput
          placeholder="username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.touchable}
          title="login"
          onPress={() => {
            //   alert("Ekrana Kutu Göster");
            login();
          }}
        >
          <Text>Login Butonu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffcdd2",
    justifyContent: "center",
    alignItems: "center",
  },
  touchable: {
    width: 100,
    height: 50,
    backgroundColor: "blue",
    marginTop: 20,
    // marginLeft: "30%",
    marginLeft: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1565c0",
    borderRadius: 5.8,
  },
  text: {
    color: "blue",
  },
  input: {
    width: 250,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "stretch",
    // borderRightWidth: 30,
    // borderLeftWidth: 30,,
    backgroundColor: "#ffffff",
    paddingLeft: 15,
    paddingRight: 15,
    height: 40,
    borderColor: "#ef9a9a",
    borderWidth: 2,
    borderRadius: 10,
  },
});

// style={{
//   // marginTop: 50,
//   width: "90%",
//   height: "100%",
//   // margin: 10,
//   backgroundColor: "#ffcdd2",
// }}
