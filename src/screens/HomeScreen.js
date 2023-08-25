import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {store} from '../redux/ProductsStore';
import {increment, decrement, fetchProducts} from '../redux/ProductsSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {count, data, isError, isLoading} = useSelector(
    state => state.products,
  );
  console.log('data ==>', data);

  useEffect(() => {
    count > 0 && dispatch(fetchProducts(count));
  }, [count]);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
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
      <View style={{flex: 1, width: '100%', marginVertical: 32}}>
        {isLoading && <ActivityIndicator size={'large'} />}
        {data &&
          data.products.map(item => (
            <View
              style={{
                paddingVertical: 24,
                backgroundColor: 'blue',
                width: '100%',
              }}>
              <Text>{item.title}</Text>
            </View>
          ))}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 24,
  },
});
