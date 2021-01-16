import axios from 'axios';

const api = axios.create({
  baseURL: 'https://guga-rocha-sds2.herokuapp.com/'
});

export function fetchOrders() {
  return api.get('/orders');
};

export function confirmDelivery(orderId: number) {
  return api.put(`/orders/${orderId}/delivered`)
};