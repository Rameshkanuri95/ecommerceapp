import useAxios from "./useAxios"
import useGetMultuAxios from "./useMultuAxios"

const useProducts = () => {
  return useAxios("/products", "GET")
}

const useProductsWithLimit = (size = 0) => {
  return useAxios(`/products?limit=${size}`, "GET")
}

const useProductWithCategory = (category) => {
  return useAxios(`/products/category/${category}`, "GET")
}

const useProduct = (productId) => {
  return useAxios(`/products/${productId}`, "GET")
}

const useSelectedProduct = (cart) => {
  let pathway = cart.map(({ id }) => `/products/${id}`)
  return useGetMultuAxios(pathway, "GET")
}

export default {
  useProducts,
  useProduct,
  useSelectedProduct,
  useProductWithCategory,
  useProductsWithLimit,
}
