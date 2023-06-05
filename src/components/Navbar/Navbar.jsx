import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { input } from '../Input';

function Navbar1({onChangeNavBar,lista}) {
  const handlerSearch = (e) => {
    const search = e.target.value;
    console.log(lista);
    const resultadoBusqueda= lista.filter((u) =>
    u.nombre.includes(search)||
    u.id.tostring().includes(search)||
    u.correo.includes(search)
    );
    onChangeNavBar(resultadoBusqueda);
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Buscador de Colaborador</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <input placeholder="Buscador" onChangeInput={(e)=>handlerSearch(e)} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;