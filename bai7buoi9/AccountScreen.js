import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet,Image } from "react-native";
import { AuthContext } from "./AuthContext";

const AccountScreen = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <Image source={require(  "../assets/anh.jpg") } style={styles.avatar} />
      <Text style={styles.name}>{user?.name}</Text>
      <Text style={styles.role}>Mobile developer</Text>
      <Text style={styles.description}>
        I have above 5 years of experience in native mobile apps development, now I am learning React Native
      </Text>
      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "#fff" },
  header: { width: "100%", height: 150, backgroundColor: "blue" },
  name: { fontSize: 40,  marginTop: 80 },
  role: { color: "blue", marginBottom: 20 },
  description: { textAlign: "center", paddingHorizontal: 20,fontSize: 15 },
  button: { backgroundColor: "orange", padding: 15, borderRadius: 5, marginTop: 20 },
  buttonText: { color: "#fff" },
  avatar: { 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    marginTop: -50, 
    borderWidth: 3, 
    borderColor: "#fff" 
  },
});

export default AccountScreen;