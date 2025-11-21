import { Navbar, Nav, Button, Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


export const NavBarPrincipal = ({ onAbrirRegistro }) => {
  return (
    <Navbar expand="lg" className="barra-navegacion">
      <Container className="contenedor-navegacion">
        {/* IZQUIERDA → LOGO */}
        <Navbar.Brand as={Link} to="/" className="logo-navegacion">
          <img
            src="/mercado-libre-logo.png"
            alt="Logo Mercado Libre"
            width={160}
            height={50}
          />
        </Navbar.Brand>

        {/* CENTRO → BUSCADOR */}
        <Form className="formulario-busqueda">
          <Form.Control
            type="search"
            placeholder="Buscar productos..."
            className="input-busqueda"
          />
        </Form>

        {/* DERECHA → NAV ITEMS */}
        <Nav className="menu-derecha">
          <Nav.Item className="item-navegacion">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="item-navegacion">
            <Nav.Link as={Link} to="/">
              Contacto
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="item-navegacion">
            <Nav.Link as={Link} to="/">
              Login
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="item-navegacion">
            <Button className="boton-registro" onClick={onAbrirRegistro}>
              Registro
            </Button>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};