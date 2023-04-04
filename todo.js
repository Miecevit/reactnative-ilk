import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  function addTodo() {
    alert(Date.now().toString());
    setTodos([...todos, { id: Date.now().toString(), text: input }]);

    setInput('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Yapılacak Gir"
        value={input}
        onChangeText={setInput}
      />

      <TouchableOpacity onPress={addTodo}>
        <Text style={styles.eklebutton}>EKLE</Text>
      </TouchableOpacity>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todo}>
            <Text style={styles.todoText}> {item.text} </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  eklebutton: {
    fontSize: 18,
    color: 'blue',
  },
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  todoText: {
    fontSize: 18,
  },
});
