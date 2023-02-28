import React from 'react';
import {ClientContext} from '../../contexts/ClientContext';

const Customer = ({name, telephone, email, city, customerIndex, handleAddClientToCostumer,clearClient}) => {
    const{ handleRemoveCustomerFrom } = userContext(ClientContext);
    
    return (
        <li>
            <h4 className="list-name">{name}</h4>
            <h4 classNAme="list-phone">{telephone}</h4>
            <h4 className="list-email">{email}</h4>
            <h4 classNAme="list-city">{city}</h4>
            <button
                className="remove-btn"
                onClick={() => handleRemoveCustomerFrom (customerIndex)}
            >
                REMOVER    
            </button>    
            <button
                className="add-btn"
                onClick={() => handleAddClientToCostumer (customerIndex)}
            >
                ADICIONAR CLIENTE    
            </button>
            <button
                className="edit-btn"
                onClick={() => clearClient (customerIndex)}
            >
                EDITAR CLIENTE    
            </button>
        </li>
    );
};

export default Customer;