import React, {userContext} from "react";
import {PaymentContext} from "../PaymentMethods"


const PaymentMethod = ({methodType, eWallet, successfulRegistration, PaymentMethodIndex, handleAddPaymentMethod,clearPaymentMethod}) => {
    const{ handleRemovePaymentMethod } = userContext(PaymentContext);
    
    return (
        <li>
            <h4 className="list-methodType">{methodType}</h4>
            <h4 classNAme="list-eWallet">{eWallet}</h4>
            <h4 className="list-successfulRegistration">{successfulRegistration}</h4>
            
            <button
                className="remove-btn"
                onClick={() => handleRemovePaymentMethod(PaymentMethodIndex)}
            >
                REMOVER METODO DE PAGAMENTO   
            </button>    
            <button
                className="add-btn"
                onClick={() => handleAddPaymentMethod (PaymentMethodIndex)}
            >
                ADICIONAR METODO DE PAGAMENT0   
            </button>
            <button
                className="edit-btn"
                onClick={() => clearPaymentMethod (PaymentMethodIndex)}
            >
                EDITAR METODO DE PAGAMENT0   
            </button>
        </li>
    );
};

export default PaymentMethod;