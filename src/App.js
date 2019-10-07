import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class App extends Component {
  constructor() {
    super();
    this.state = {
      getTodo: '',
      todo: ['work', 'swim', 'study', 'sleep', 'running']
    };
  }

  addTodo() {
    const { getTodo } = this.state;
    if (this.state.getTodo === '') {
      alert('Field Todo Belum Diisi');
    } else {
      this.setState({
        todo: [...this.state.todo, getTodo],
        getTodo: ''
      });
    }
  }

  deleteTodo(item) {
    const newList = this.state.todo.filter(e => {
      return e !== item;
    });
    this.setState({
      todo: [...newList]
    });
  }
  

  render() {
    console.log(this.state.todo);
    return (
      <View>

        <View style={styles.containInput}>
          <View style={styles.input}>
            <TextInput
              placeholder='New todo'
              onChangeText={text => this.setState({ getTodo: text })}
              value={this.state.getTodo}
            />
          </View>

          <View>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => this.addTodo()}
            >
              <Text style={styles.buttonText}>
                Add
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          {this.state.todo.map(item => {
            return (
              <View
                key={item}
                style={styles.list}
              >
                <Text style={styles.textList}>{item}</Text>
                <TouchableOpacity
                  onPress={() => this.deleteTodo(item)}
                >
                  <Icon name="trash" size={25} color='tomato' />
                </TouchableOpacity>

              </View>
            );
          })}
        </View>

      </View>

    );
  }
}
export default App;

const styles = StyleSheet.create({
  containInput: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 30,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center'
  },
  input: {
    borderWidth: 2,
    paddingLeft: 5,
    borderColor: 'silver',
    borderRadius: 2,
    elevation: 1,
    width: '70%',
    height: 45,
  },
  list: {
    flexDirection: 'row',
    paddingBottom: 5,
    marginBottom: 10,
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    paddingLeft: 15,

    justifyContent: 'space-between',
    paddingRight: 20
  },
  textList: {
    fontSize: 20,
    textTransform: 'capitalize',
  },
  buttonStyle: {
    marginLeft: 5,
    backgroundColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderWidth: 2,
    borderColor: 'silver',
    borderRadius: 2,
    elevation: 2,
  },
  buttonText: {
    fontWeight: 'bold'
  }
});
