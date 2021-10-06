import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from './Colors';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.divider} />
          <Text style={styles.title}>
            To-do{' '}
            <Text style={{fontWeight: '300', color: Colors.blue}}>Lists</Text>{' '}
          </Text>
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
});
