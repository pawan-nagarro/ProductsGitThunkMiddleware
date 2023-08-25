import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {store} from '../redux/ProductsStore';
import {increment, decrement} from '../redux/ProductsSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {count} = useSelector(state => state.products);

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            console.log('dispatching');
            dispatch(decrement());
          }}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 16,
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: 'black',
          }}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>-</Text>
        </TouchableOpacity>
        <Text>{`Count : ${count}`}</Text>
        <TouchableOpacity
          onPress={() => {
            console.log('dispatching');
            dispatch(increment());
          }}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 16,
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: 'black',
          }}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
