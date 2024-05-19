import React from 'react';
import "../styles/pages/Contacto.css"
import { useState } from 'react';
import axios from 'axios';

const Contacto = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value // Array de elementos extráidos del formulario
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg(''); 
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }



    return (

        <div className="contactos">

            <div className="contacto01">

                <h2 className="p_titulos">

                    Contáctanos:

                </h2>

                <form action='/Contacto' method="post" onSubmit={handleSubmit}  className="formulario">

                    <p>

                        <label for="Nombre"> Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>



                    </p>
                    <p className="p_textos">

                        <label for="Email"> E-Mail</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange}></input>



                    </p>
                    <p className="p_textos">

                        <label for="Telefono"> Teléfono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}></input>



                    </p>
                    <p className="p_textos">

                        <label for="Mensaje"> Mensaje</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>

                    </p>
                    <p className="envio">
                        <input type="submit" value="Enviar" />
                    </p>

                    {sending ? <p>Enviando...</p>: null}
                    {msg ? <p>{msg}</p> : null}

                </form>



            </div>



            <div className="contacto02">

                <h2 className="p_titulos">

                    Nuestros vías alternativas de contacto:

                </h2>

                <div className='datos'>
                    <ul>
                        <li>Teléfono: 123456789</li>
                        <li>E-Mail: lunaviolacea@hotmail.com</li>
                        <li>Instagram:</li>
                        <li>Facebook: </li>

                    </ul>

                </div>

            </div>
        </div>
    );
}

export default Contacto;