import { Provider } from 'react-redux';
import { Catalog } from './components/Catalog/Catalog';
import { Header } from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';
import { Store } from './store';
import { ModalDelivery } from './components/ModalDelivery/ModalDelivery';

export const App = () => {
  
  return (
    <Provider store={Store}>
      <header>
        <Header/>      
      </header>
      <main>
          <Navigation/>
          <Catalog/>
        <section></section>
      </main>
      <footer></footer>
      <ModalDelivery/>
    </Provider>
  )
}


