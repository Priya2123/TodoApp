import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Colors from './Colors';
import {AntDesign} from 'react-native-vector-icons';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.divider} />
          <Text style={styles.title}>
            To-do{' '}
            <Text style={{fontWeight: '300', color: Colors.blue}}>Lists</Text>{' '}
          </Text>
          <View style={styles.divider} />
        </View>
        <View style={{marginVertical: 48}}>
          <TouchableOpacity style={styles.addList}>
            <AntDesign name="plus" size={16} color={Colors.blue} />
          </TouchableOpacity>
          <Text style={styles.add}>Add List</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    height: 1,
    flex: 1,
    backgroundColor: Colors.lightBlue,
    alignSelf: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: '800',
    color: Colors.black,
    paddingHorizontal: 64,
  },
  addList: {
    borderWidth: 2,
    borderRadius: 4,
    borderColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  add: {
    fontWeight: '600',
    fontSize: 14,
    color: Colors.blue,
    marginTop: 8,
  },
});

export default App;
