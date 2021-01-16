import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Alert, ActivityIndicator, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import { fetchOrders } from '../api';
import { Order } from '../types';

import Header from '../Header';
import OrderCard from '../OrderCard';

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const handleOnCardPress = (order: Order) => {
    navigation.navigate('OrderDetails', { order })
  };

  const fetchData = () => {
    setIsLoading(true)
    fetchOrders()
      .then(response => setOrders(response.data))
      .catch(() => Alert.alert('Houve um erro ao buscar os pedidos!'))
      .finally(() => setIsLoading(false))
  };

  useEffect(() => {
    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);

  return (
    <>
      <Header />

      <ScrollView style={styles.container}>
        {isLoading
          ? <ActivityIndicator style={styles.spinLoader} size="large" color="#DA5C5C"/>
          : (orders.map(order => (
            <TouchableWithoutFeedback
              key={order.id}
              onPress={() => handleOnCardPress(order)}
            >
              <OrderCard order={order} />
            </TouchableWithoutFeedback>
          )))
        }
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
  },

  spinLoader: {
    marginTop: '10%',
  }
});