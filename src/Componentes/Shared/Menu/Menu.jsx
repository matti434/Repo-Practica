import { Container, Dropdown, NavDropdown, Navbar, Nav, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router";
import "./Menu.css";
import { Registro } from "../../Views/Registro/Registro";
const Menu = () => {

  const navigate = useNavigate();
  
  const ubicacion = useLocation(); // devuelve el objeto con informacion de la URL actual
  const parametroBusqueda = new URLSearchParams(location.search); // para ller la informacion que viaja en la barra de dirreciones del navegador
  const tipoModal = parametroBusqueda.get("modal"); // busca el valor del parametro llamado "modal", si no lo encuentra es null
  
  
  const onClose = () => {
    console.log("Cerrar modal ejecutado");
    console.log("Ruta actual que cerramos:", ubicacion.pathname);

    navigate(ubicacion.pathname);
    /*quita los parametros manteniendo la ruta base
      /dashboard/users?modal=register  →  /dashboard/users 
      quita la ruta actual /users?modal=login y deja solo la ruta base
    */
    return;
  }

  const abrirRegistro = () =>{
    navigate("/?modal=registro"); // ← URL cambia a: http://localhost:3000/?modal=registro
  } // ahora const tipoModal = parametroBusqueda.get("modal"); tipoModal=registro
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="public\mercado-libre-logo.png"
              alt="mercadoLibreLogo"
              width={200}
              height={50}
            />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/contact">
                  Contacto
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link 
                as={Button}
                 style={{ background: "none", border: "none" }}
                 onClick={abrirRegistro}
                 >
                  Login
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/contact">
                  Registro
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {tipoModal === "registro" && <Registro onClose={onClose} />} {/*recibe onClose como prop del padre */}
    </>
  );
};
export default Menu;
