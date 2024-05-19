import React from 'react';
import "../styles/pages/Home.css"


const Home = (props) => {


    return (

        <div className="home_text">
            <div className="image_div">
                <img src={'luna_home.jpg'} className="home_pic" alt="" />
            </div>
            <div className="columns">
                <div className='parrafo1'>
                    <h3>
                        Bienvenidos a nuestra página!
                    </h3>
                    Aquí podrás descubrir la variedad de aritos y accesorios que
                    confeccionamos, los cuales están realizados con arcilla polimérica de gran calidad,
                    utilizando diseños propios y en diferentes estilos de coloración. Mirá nuestra sección 
                    de modelos, elegí el que te gusta y contactanos para encargarlo.
                    Que disfrutes de tu visita al sitio!
                </div>
                <div className='parrafo2'>
                    Para experimentar cada día la espiritualidad, necesitamos recordar
                    que somos seres espirituales pasando algo de tiempo en un cuerpo humano.

                </div>
            </div>



        </div>
    );
}

export default Home;