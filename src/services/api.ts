import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../pages/Home'

type Product = {
  id: number
  price: number
}

type PurchasePayLoad = {
  products: Product[]
  billing: {
    name: string
    email: string
    document: string
  }
  delivery: {
    email: string
  }
  payment: {
    card: {
      active: boolean
      owner?: {
        name: string
        document: string
      }
      name?: string
      number?: string
      expires?: {
        month: number
        year: number
      }
      code?: number
    }
    installments: number
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://fake-api-tau.vercel.app/api/eplay/'
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Game, void>({
      query: () => 'destaque'
    }),
    getOnSale: builder.query<Game[], void>({
      query: () => 'promocoes'
    }),
    getSoon: builder.query<Game[], void>({
      query: () => 'em-breve'
    }),
    getActionGames: builder.query<Game[], void>({
      query: () => 'acao'
    }),
    getRpgGames: builder.query<Game[], void>({
      query: () => 'rpg'
    }),
    getSportsGames: builder.query<Game[], void>({
      query: () => 'esportes'
    }),
    getSimulationGames: builder.query<Game[], void>({
      query: () => 'simulacao'
    }),
    getFightGames: builder.query<Game[], void>({
      query: () => 'luta'
    }),
    getGame: builder.query<Game, string>({
      query: (id) => `jogos/${id}`
    }),
    purchase: builder.mutation<any, PurchasePayLoad>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetFeaturedGameQuery,
  useGetSoonQuery,
  useGetOnSaleQuery,
  useGetActionGamesQuery,
  useGetRpgGamesQuery,
  useGetSportsGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetGameQuery,
  usePurchaseMutation
} = api

export default api
