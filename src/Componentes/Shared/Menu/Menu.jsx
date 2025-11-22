import { useLocation, useNavigate } from "react-router-dom";
import { Registro } from "../../Views/Registro/Registro";
import { NavBarPrincipal } from "./ComponentesMenu/NavBarPrincipal";
import { Login } from "../../Views/Login/Login";

const Menu = () => {
  const navigate = useNavigate();

  const ubicacion = useLocation(); // devuelve el objeto con informacion de la URL actual
  const parametroBusqueda = new URLSearchParams(ubicacion.search); // para ller la informacion que viaja en la barra de dirreciones del navegador
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
  };
  const abrirLogin = () => {
    console.log("entra modal registro login");
    navigate("/?modal=login");
  };
  const abrirRegistro = () => {
    console.log("entra modal registro");
    navigate("/?modal=registro"); // ← URL cambia a: http://localhost:3000/?modal=registro
  }; // ahora const tipoModal = parametroBusqueda.get("modal"); tipoModal=registro

  return (
    <>
      <NavBarPrincipal
        onAbrirRegistro={abrirRegistro}
        onAbrirLogin={abrirLogin}
      />

      {tipoModal === "login" && <Login onClose={onClose} />} {/* si ambas se cumplen abre login */}
      {tipoModal === "registro" && <Registro onClose={onClose} />}
    </>
  );
};
export default Menu;
