import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCss } from './styles'
import Rotas from './routes'
import Footer from './components/Footer'
import { Store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
