import CajaAmarilla from "./CajaAmarilla";
import CajaMorada from "./CajaMorada";
import CajaVerde from "./CajaVerde";

function Contenedor() {
  return (
    <section className="menu-principal-contenedor"> 
        <CajaAmarilla />
        <CajaAmarilla />
        <CajaAmarilla />

        <CajaVerde />
        <CajaVerde />
        <CajaVerde />

        <CajaMorada />
        <CajaMorada />
        <CajaMorada />

    </section>
  );
}
export default Contenedor;