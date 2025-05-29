import ProductsList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetRpgGamesQuery,
  useGetSportsGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()
  const { data: sportsGames, isLoading: isLoadingSports } =
    useGetSportsGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()

  return (
    <>
      <ProductsList
        games={actionGames}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={sportsGames}
        title="Esportes"
        background="black"
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProductsList
        games={fightGames}
        title="Luta"
        background="black"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={rpgGames}
        title="RPG"
        background="gray"
        id="rpg"
        isLoading={isLoadingRpg}
      />
      <ProductsList
        games={simulationGames}
        title="Simulação"
        background="gray"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Categories
