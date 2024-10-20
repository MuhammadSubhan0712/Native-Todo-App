import { Text, View , StyleSheet } from "react-native";

export default function Index() {
  return (
    <View>
      <Text style = {styles.h1}>Todo App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
h1:{
marginTop:10,
fontSize:30,
padding:10,
textAlign:"center",
fontFamily:"Georgia"

}
})
