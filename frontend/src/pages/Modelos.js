import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../styles/pages/Modelos.css"


function MostrarModelos() {

    return (

        <div className='div_modelos'>
            <section className="parrafo_mod">
                <h3>
                    Colección de modelos
                </h3>
                <p>
                    Recorre la galería para conocer nuestros modelos terminados!

                </p>

            </section>

            <div className='carousel2' >

                <Carousel>
                    <Carousel.Item>
                        <img src={'aros01.jpg'} className="modelos" alt="" />
                        <Carousel.Caption>
                            <h3 className='dark_novedades'>Fases Lunares</h3>
                            <p className='dark_novedades'>Arito con fases lunares en coloración anaranjada.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={'col_01.jpg'} className="modelos" alt="" />
                        <Carousel.Caption>
                            <h3 className='dark_novedades'>Pulsera coral</h3>
                            <p className='dark_novedades'> Inspirada en los corales del caribe.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={'aros03.jpg'} className="modelos" alt="" />
                        <Carousel.Caption>
                            <h3 className='dark_novedades'>Piedra tejida</h3>
                            <p className='dark_novedades'>
                                Posee un acabado simíl tejido sólido.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={'aros04.jpg'} className="modelos" alt="" />
                        <Carousel.Caption>
                            <h3 className='dark_novedades'>Mariposa</h3>
                            <p className='dark_novedades'>
                                Arito artesanal con mariposas detalladas.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={'aros07.jpg'} className="modelos" alt="" />
                        <Carousel.Caption>
                            <h3 className='dark_novedades'>Arco Iris</h3>
                            <p className='dark_novedades'>
                            Precioso arito arco iris multicolor.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default MostrarModelos;