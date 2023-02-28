import React, {useState} from 'react';



export const ClientContext = createContext({})

export const ClientProvider = ({children}) =>{
    
    const [customer, setCustomer] = useState([]);

    function handleAddClientToCostumer(url, name, telephone, email, city){
        const itemObject ={url, name, telephone, email, city};
        setCustomer([...customer, itemObject]);
    }
     
    function handleRemoveCustomerFrom (clikedcustomerIndex){
        const filteredClient = client.filter(
            (clientCustomer) => client.indexOf(clientCustomer) !== clikedcustomerIndex
        );
        setCustomer(filteredClient);
    }

    function clearClient(){
        setCustomer([]);
    }
    return (<ClientContext.Provider value={{customer, handleAddClientToCostumer, handleRemoveCustomerFrom, clearClient}}>
        {children}
        </ClientContext.Provider>
    );
};