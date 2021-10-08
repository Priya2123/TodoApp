import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Flatlist} from 'react-native';
// import Colors from './Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import {PlusOutlined} from '@ant-design/icons-react-native';
import tempData from './tempData';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.divider} />
          <Text style={styles.title}>
            To-do <Text style={{fontWeight: '300', color: 'blue'}}>Lists</Text>{' '}
          </Text>
          <View style={styles.divider} />
        </View>
        <View style={{marginVertical: 48}}>
          <TouchableOpacity style={styles.addList}>
            <AntDesign name="plus" size={16} color={'blue'} />
            {/* <PlusOutlined /> */}
          </TouchableOpacity>
          <Text style={styles.add}>Add List</Text>
        </View>
        <View style={{height: 275, paddingLeft: 32}}>
          <Flatlist
            data={tempData}
            keyExtractor={item => item.name}
            horizontal={true}
            showHorizontalScrollIndicator={false}
            renderItem={item => (
              <View>
                <Text>{item}</Text>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

export default App;

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
    backgroundColor: 'lightBlue',
    alignSelf: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: '800',
    color: 'black',
    paddingHorizontal: 64,
  },
  addList: {
    borderWidth: 2,
    borderRadius: 4,
    borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  add: {
    fontWeight: '600',
    fontSize: 14,
    color: 'blue',
    marginTop: 8,
  },
});
