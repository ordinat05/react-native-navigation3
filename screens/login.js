import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";

export default function Login_screen({ navigation }) {
  const u = "qwe";
  const p = "123";

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
    <View style={{ marginTop: 50, width: "70%", margin: 10 }}>
      <Text style={{ marginTop: 50 }}>Login Sayfası</Text>
      <TextInput
        placeholder="username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="password"
        value={password}
        onChangeText={setPassword}
      />
      <Button
        style={{ width: 30 }}
        title="login"
        onPress={() => {
          //   alert("Ekrana Kutu Göster");
          login();
        }}
      />
    </View>
  );
}
