import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';

class App extends Component {
  constructor() {
    super();
    this.state = {
      getTodo: '',
      todo: [
        { name: 'work', check: false },
        { name: 'run', check: false },
        { name: 'sleep', check: false },
        { name: 'coding', check: false }
      ]
    };
  }

  addTodo() {
    const { getTodo } = this.state;
    if (getTodo === '') {
      alert('Field Todo Belum Diisi');
    } else {
      const add = { name: getTodo };
      this.setState({
        todo: [...this.state.todo, add],
        getTodo: '',
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

  updateCheck(chek) {
    const i = this.state.todo.find(item => item.name === chek.name);
    i.check = !i.check;
    this.setState({});
  }

  render() {
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
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View>
          {this.state.todo.map((item, i) => {
            return (
              <View
                key={i}
                style={styles.list}
              >
                <View style={styles.checkList}>
                  <CheckBox
                    value={item.check}
                    onChange={() => this.updateCheck(item)}
                  />
                  <Text style={styles.textList}>{item.name}</Text>
                </View>

                <View style={styles.actionStyle}>

                  <TouchableOpacity
                    onPress={() => this.deleteTodo(item)}
                  >
                    <Icon name="trash" size={25} color='tomato' />
                  </TouchableOpacity>
                </View>

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
  checkList: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textList: {
    fontSize: 20,
    textTransform: 'capitalize',
  },
  actionStyle: {
    flexDirection: 'row',
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
