import logo from './logo.svg';
import './App.css';
import CardList  from './homepage/card-List/cardList.component'
import { Header } from './homepage/header/header.component'
import { Footer } from './homepage/footer/footer.component'



function App() {
  return (
    <div >
      <header>
        <Header/>
      </header>
      <CardList />
      <Footer/>
    </div>
  );
}

export default App;
