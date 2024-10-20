import { Pencil, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Text, View , StyleSheet, SafeAreaView, TextInput, FlatList, TouchableOpacity, LogBox } from "react-native";

export default function Index() {
  const [userinput , setuserInput] = useState('')
  const [Todo , setTodo] = useState<string[]>(['']);



  // To add Todo 
  const addTodo = ()=> {
   Todo.push(userinput);
   setTodo([...Todo]);
   setuserInput('');
  }

  // To delete Todo 
  const deleteTodo = (index) => {
  Todo.splice(index , 1)
  setTodo([...Todo]);
  console.log("Todo Deleted");
  }

  // To update Todo 

  const updateTodo = (index) => {
   Todo.splice(1 , )
  }
  return (
    <View style={styles.container} >
    <View>
      <Text style = {styles.h1}>Todo App</Text>
    </View>

    <View>
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setuserInput}
        value={userinput}
        placeholder="Enter todo"  
      />
    </SafeAreaView>      

    <TouchableOpacity style={styles.AddBtn} onPress={addTodo}>
        <Text>Add Todo</Text>
      </TouchableOpacity>
    </View>

    <View>
    
  {Todo.length > 0 ?      
   <FlatList
        data={Todo}
        renderItem={({item , index}) => { 
         return <View>
          <Text style={styles.TodoItems}> {item}</Text>
          <TouchableOpacity style={styles.DeleteBtn} onPress={deleteTodo(index)}>
        <Text><Trash2 size={36} /></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.EditBtn} onPress={updateTodo}>
        <Text><Pencil size={36} /></Text>
      </TouchableOpacity>
          </View> 
        }
      }
      /> : <Text>No todo Found</Text>
    }
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
AddBtn:{

},
TodoItems:{

},

EditBtn:{

},
DeleteBtn:{
  
}
})
