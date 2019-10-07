import React, { Component } from 'react';
import { View } from 'react-native';

// import Todo from './components/ToDo';
//import Todo from './components/AddTodo';
import Todo from './components/DeleteTodo';
// import Todo from './components/DoneTodo';
//import Todo from './components/UpdateTodo';

class App extends Component {
  render() {
    return (
      <View>
        <Todo />
      </View>
    );
  }
}

export default App;
