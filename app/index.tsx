import { Pencil, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Text, View , StyleSheet, SafeAreaView, TextInput, FlatList, TouchableOpacity, Modal, Pressable } from "react-native";

export default function Index() {
  const [userinput , setuserInput] = useState('')
  const [Todo , setTodo] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [upduserInput, setUpduserInput] = useState('');
  const [index, setIndex] = useState(0);

  // To add Todo 
  const Addtodo = ()=> {
    if (userinput.trim()) {
      setTodo([...Todo, userinput]);
      setuserInput('');
    }
  }

  // To delete Todo 
  const DeleteTodo = (index:number) => {
    Todo.splice(index, 1);
    setTodo([...Todo]);
  }

  // To update Todo 
  const UpdateTodo = (index:number) => {
    Todo.splice(index, 1, upduserInput);
    setTodo([...Todo]);
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Todo App 💻📝</Text>
      
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={setuserInput}
          value={userinput}
          placeholder="Enter your todo ✍️"
        />
      </SafeAreaView>      

      <TouchableOpacity style={styles.AddBtn} onPress={Addtodo}>
        <Text style={styles.btnText}>Add Todo ➕</Text>
      </TouchableOpacity>

      <View style={styles.todoContainer}>
        {Todo.length > 0 ?      
          <FlatList
            data={Todo}
            renderItem={({item, index}) => { 
              return (
                <View style={styles.todoItem}>
                  <Text style={styles.TodoItems}> {item} </Text>
                  <TouchableOpacity style={styles.DeleteBtn} onPress={() => DeleteTodo(index)}>
                    <Trash2 size={24} color="#fff" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.EditBtn} onPress={() => {
                    setIndex(index);
                    setUpduserInput(item);
                    setModalVisible(true);
                  }}>   
                    <Pencil size={24} color="#fff" />
                  </TouchableOpacity>
                </View>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          /> : <Text style={styles.noTodoText}>No todos found! Add one now 😎</Text>
        }
      </View>

      {/* Modal for updating a todo */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Update Todo 🔄</Text>
              <TextInput
                style={styles.modalInput}
                onChangeText={setUpduserInput}
                value={upduserInput}
              />
              <Pressable
                style={styles.modalBtn}
                onPress={() => UpdateTodo(index)}>
                <Text style={styles.btnText}>Update ✅</Text>
              </Pressable>
              <Pressable
                style={[styles.modalBtn, styles.closeBtn]}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.btnText}>Close ❌</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  h1: {
    marginTop: 10,
    fontSize: 36,
    padding: 10,
    textAlign: "center",
    fontFamily: "Georgia",
    backgroundColor: "#000",
    color: "white",
    borderRadius: 10,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    fontSize: 16,
  },
  AddBtn: {
    backgroundColor:"#00008B",
    padding: 10,
    borderRadius: 8,
    margin: 10,
    alignItems: 'center',
  },
  btnText: {
    color: "#fff",
    fontSize: 20,
  },
  todoContainer: {
    marginTop: 20,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  TodoItems: {
    fontSize: 18,
    color: '#333',
  },
  EditBtn: {
    marginLeft: 10,
    backgroundColor: "#4CAF50",
    padding: 5,
    borderRadius: 5,
  },
  DeleteBtn: {
    backgroundColor: "#8B0000",
    padding: 5,
    borderRadius: 5,
  },
  noTodoText: {
    textAlign: 'center',
    fontSize: 18,
    color: "#777",
    marginTop: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
  },
  modalText: {
    fontSize: 24,
    marginBottom: 15,
    textAlign: 'center',
  },
  modalInput: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    borderColor: "#ccc",
    fontSize: 16,
  },
  modalBtn: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  closeBtn: {
    backgroundColor: "#ff5252",
    marginTop: 10,
  }
});
