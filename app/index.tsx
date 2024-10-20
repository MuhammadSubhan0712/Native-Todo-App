import { Text, View , StyleSheet, SafeAreaView, TextInput } from "react-native";

export default function Index() {
  
  return (
    <View style={styles.container} >
    <View>
      <Text style = {styles.h1}>Todo App</Text>
    </View>

    <View>
    <SafeAreaView>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="Enter todo"  
      />
    </SafeAreaView>      
    </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
container:{

},

h1:{
marginTop:10,
fontSize:30,
padding:10,
textAlign:"center",
fontFamily:"Georgia",
backgroundColor:"#000000",
color:"white",
},
input: {
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
},

})
