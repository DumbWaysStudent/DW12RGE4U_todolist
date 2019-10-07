import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class UpdateTodo extends Component {
  constructor() {
    super();
    this.state = {
      getTodo: '',
      todo: ['work', 'swim', 'study', 'sleep', 'run'],
      isUpdate: false,
      itemSelect: '',
      index: ''
    };
  }

  addTodo() {
    const { getTodo } = this.state;
    if (this.state.getTodo === '') {
      alert('Field Todo Belum Diisi');
    } else {
      this.setState({
        todo: [...this.state.todo, getTodo],
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

  editTodo(item, i) {
    this.setState({
      isUpdate: true,
      getTodo: item,
      index: i
    });
  }

  update() {
    const { todo, getTodo, index } = this.state;
    todo[index] = getTodo;
      
    this.setState({
      isUpdate: false,
      todo: [...todo],
      index: '',
      getTodo: ''
    });
  }

  renderButton() {
    const { isUpdate } = this.state;
    if (!isUpdate) {
      return (
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => this.addTodo()}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => this.update()}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      );
    }
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
            {this.renderButton()}
          </View>

        </View>

        <View>
          {this.state.todo.map((item, i) => {
            return (
              <View
                key={item}
                style={styles.list}
              >
                <View>
                  <Text style={styles.textList}>{item}</Text>
                </View>

                <View style={styles.actionStyle}>
                  <TouchableOpacity
                    onPress={() => this.editTodo(item, i)}
                    style={styles.actionEditStyle}
                  >
                    <Icon name="edit" size={25} color='#346b3e' />
                  </TouchableOpacity>

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
  actionStyle: {
    flexDirection: 'row',
  },
  actionEditStyle: {
    marginRight: 20,
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
