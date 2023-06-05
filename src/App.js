
import './App.css';
import Navbar1 from './components/Navbar/Navbar';
import FormAddWorker from './components/Form/FormAddWorker';
import ListWorker from './components/ListWorker/ListWorker';
import {lista} from './Lista';
import { useEffect, useState } from 'react';

function App() {
  const [listaColab,setListColab] = useState(lista)

  const handlerClickAdd =(e)=>{
    setListColab([...listaColab, {id: listaColab.length+1, ...e}]);
  };
 
  const handlerSearchNavBar = (listafilter) => {
    const newLista = listafilter.length==0? lista : listafilter;
    console.log(listaColab);
    setListColab([...newLista]);
  };

  return (
    <>
      <Navbar1 onChangeNavbar={(e) => handlerSearchNavBar(e)} 
      lista={listaColab} />
    <section>
      <FormAddWorker onClickAddWorker={(e) => handlerClickAdd(e)}/>
      <hr />
      <ListWorker lista={listaColab}/>
    </section>
    </>
  );
}

export default App;
