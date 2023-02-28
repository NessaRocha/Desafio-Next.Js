import React, {useContext, useState} from 'react';
import Customer from '../../src/Customers';

const PaymentMethod = () => {
    const {payment} = useContext(PaymentMethod)
}

return (
    <ul>
        {payment.map((PaymentMethod, index)=>{
            <Customer
                key={index}
                customerIndex={index}
                methodType={PaymentMethod.methodType}
                eWallet={PaymentMethod.eWallet}
                successfulRegistration={PaymentMethod.successfulRegistration}
            />
        })};
    </ul>
)