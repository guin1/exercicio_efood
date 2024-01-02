import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../pages/home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/Restaurantes'
  }),
  endpoints: (builder) => ({
    getFeaturedRestaurante: builder.query<Restaurant, void>({
      query: () => 'pratos'
    })
  })
})
export const { useGetFeaturedRestauranteQuery } = api
export default api
