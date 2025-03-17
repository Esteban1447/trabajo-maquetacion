import Contenedor from "./Contenedor";
import Menulateral from "./MenuLateral";
import './Menuprincipal.css';

function Menuprincipal() {
  return (
    <section className="menu-principal">
    <Menulateral />
    <Contenedor />
    </section>
    
  );
}

export default Menuprincipal;