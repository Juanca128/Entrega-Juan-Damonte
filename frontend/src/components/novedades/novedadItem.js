import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import "../../styles/pages/Novedades.css"

const NovedadItem = (props) => {
    const { title, imagen, body, type } = props;           

    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header><div className={type}><h4>{title}</h4></div></Accordion.Header>
                <Accordion.Body>
                    <img src={imagen} />                      
                    <div className="nov_texto" dangerouslySetInnerHTML={{ __html: body }} />                    
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default NovedadItem;