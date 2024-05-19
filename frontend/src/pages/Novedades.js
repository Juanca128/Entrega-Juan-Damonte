import { useState, useEffect } from "react";
import axios from 'axios';
import NovedadItem from "../components/novedades/novedadItem";
import "../styles/pages/Novedades.css"

const Novedadpage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedad = async () => {
            setLoading(true)
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedad();
    }, []);

    return (


        <section className="holder">

            <h2 className = "nov_secc">Novedades</h2>
            {
                loading ? (
                    <p>Cargando...</p>
                ) : (novedades.map(item => <NovedadItem key={item.id}
                    title={item.titulo} imagen={item.imagen}
                    body={item.cuerpo} type={item.tipo} />
                ))
            }
        </section>

    );

}





export default Novedadpage;
