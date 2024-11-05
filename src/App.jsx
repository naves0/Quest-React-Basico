import './App.css';
import Paragrafo from './components/paragrafo-colorido/paragrafo-colorido.jsx';
import Button from "./components/button/button.jsx";

function App() {

  return (
    <>
      <Paragrafo cor='yellowgreen'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores maiores est dolor libero? Est, voluptates. Veritatis, sint unde ducimus maiores illo eaque tempore, pariatur minima dolores consequuntur accusantium quibusdam mollitia.</p>
      </Paragrafo>
      <Paragrafo cor="#FFF">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique dicta numquam architecto omnis facilis iure provident, itaque sint sit ab quam quas beatae dolore earum sapiente placeat eos aspernatur dolorum.</p>
      </Paragrafo>
      <Paragrafo>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus molestias tenetur, esse expedita voluptatum facere asperiores quod dolor tempore quo incidunt consectetur placeat neque? Earum assumenda temporibus nam cum praesentium!</p>
      </Paragrafo>
      <Button label="Baixar CV" />
      <Button />
    </>
  )
}

export default App
