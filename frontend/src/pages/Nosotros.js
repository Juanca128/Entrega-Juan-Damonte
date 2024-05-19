import React from 'react';
import "../styles/pages/Nosotros.css"
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';

function Nosotrospage() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };


    return (
        <div className='modelos_w'>

            <div>
                <section className="parrafo3">
                    <h3>
                       Luna Violácea - breve historia 
                    </h3>
                    <p>
                        Somos un pequeño equipo ubicado en Argentina que se dedica a la creación y fabricación
                        de accesorios de distinto tipo. Desde hace tiempo confecciono diversas artesanías que
                        vendía localmente, pero desde el 2023 queremos aumentar el alcance de nuestros productos
                        y desarrollar una mayor cantidad de modelos, con nuevas técnicas y materiales modernos.
                        Participamos en ferias locales, y estamos fortaleciendo nuestra presencia en las redes
                        sociales y construyendo un nuevo sitio para darnos a conocer.

                    </p>

                </section>

            </div>

            <div className="colecciones">
                <div className="coleccion">
                    <div>
                        <h3 className="titcol">
                            Pulseras
                        </h3>
                        <p className="navp">
                            Tenemos diversidad de pulseras de colores alegres, livianas, ideales para usar
                            durante todo el año.
                        </p>
                    </div>
                    <div className='car_ousel1'>
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item>
                                <img src={'col_01.jpg'} className="imgcolecc" alt="" />
                                
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={'col_02.jpg'} className="imgcolecc" alt="" />
                              
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={'pulsera01.jpg'} className="imgcolecc" alt="" />
                               
                            </Carousel.Item>
                        </Carousel>
                    </div>

                </div>
                <div className="coleccion">
                <div className='car_ousel1'>
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item>
                                <img src={'aros01.jpg'} className="imgcolecc" alt="" />
                                
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={'aros05.jpg'} className="imgcolecc" alt="" />
                              
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={'aros07.jpg'} className="imgcolecc" alt="" />
                               
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div>
                        <h3 className="titcol">
                            Aritos
                        </h3>
                        <p className="navp">
                            Realizamos una gran variedad de aritos, algunos con diseños abstractos,
                            otros temáticos, incluso pares de aritos diferentes entre sí pero complementarios en diseño.
                        </p>
                    </div>
                </div>

                <div className="coleccion">
                    <div>
                        <h3 className="titcol">
                            Personalizados
                        </h3>
                        <p className="navp">
                            Diseños únicos realizados a pedido del cliente. Se puede partir de un diseño existente en la
                            colección al cual se le hacen modificaciones, tanto en forma como en color.
                        </p>
                    </div>
                    <div className='car_ousel1'>
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item>
                                <img src={'varios01.jpg'} className="imgcolecc" alt="" />
                                
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={'varios02.jpg'} className="imgcolecc" alt="" />
                              
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={'musical.jpg'} className="imgcolecc" alt="" />
                               
                            </Carousel.Item>
                           
                        </Carousel>
                    </div>

                </div>

            </div>
        </div>

    );
}

export default Nosotrospage;

