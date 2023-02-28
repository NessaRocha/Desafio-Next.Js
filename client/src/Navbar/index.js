import React from "react";
import {payment} from '../../contexts/PaymentContext';
import React from 'react';

const NavBAr = ({customer, clearClient}) => {
    const totalPaymentMethod = payment.reduce((acc, current) => acc + current.payment, 0);
    
    
    <div className="nav-bar-total">
        <span>
         {payment.length} {payment.length === 1 ? "metodoPagamento" : "metodosPagamentos"}
        </span>
        <span className="nav-bar-total-payment">
            {totalPaymentMethod.toFixad()}
        </span>
    </div> 
}