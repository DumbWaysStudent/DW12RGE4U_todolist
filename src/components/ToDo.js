import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class ToDo extends Component {
  constructor() {
    super(); 
    this.state = {
      todo: ['work', 'swim', 'study', 'sleep', 'run']
    };
  }

  render() {
    return (
      <View>
        {this.state.todo.map(item => {
          return (
            <View key={item}>
              <TouchableOpacity>
                <Text style={styles.list}>{item}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    paddingVertical: 7,
    fontSize: 25,
    fontWeight: '200',
    borderBottomColor: '#000',    
    borderBottomWidth: 2,
    paddingLeft: 7,
    textTransform: 'capitalize'
  }
});
