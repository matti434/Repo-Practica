import { Container, Dropdown, NavDropdown, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router";
export const Menu = () => {
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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
              {user ? (
                <NavDropdown
                  title={
                    <>
                      <img
                        src={user.avatar || "public/profile-png.png"}
                        alt="Perfil"
                        width={30}
                        height={30}
                        style={{ borderRadius: "50%", marginRight: "8px" }}
                      />
                      <span>{user.userName || "Usuario"}</span>
                    </>
                  }
                  id="user-dropdown"
                  align="end"
                >
                  <NavDropdown.Item as={Link} to="">
                    👤 Perfil
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="">
                    🔔 Notificaciones
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="">
                    🛒 Carrito
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="">
                    ❤️ Favoritos
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logout}>
                    🚪 Cerrar sesión
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                  <Nav.Item>
                    <Nav.Link
                      as="button"
                      style={{ background: "none", border: "none" }}
                      onClick={abrirLogin}
                    >
                      Login
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      as="button"
                      style={{ background: "none", border: "none" }}
                      onClick={abrirRegister}
                    >
                      Register
                    </Nav.Link>
                  </Nav.Item>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
