import axios from "axios";

import { OrderPayload } from "./Orders/types";

const api = axios.create({
  baseURL: "http://localhost:8080"
});

const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

export function fetchProducts() {
  return api.get("/products");
};

export function fetchLocalMapBox(local: string) {
  return api.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
};

export function saveOrder(payload: OrderPayload) {
  return api.post("/orders", payload);
};