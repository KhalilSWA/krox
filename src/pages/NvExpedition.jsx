import React from 'react';
import NewOrder from '../components/NewOrder'
import Sidebar from '../components/Sidebar';

const NvExpedition = () => {
    return (
        <>
        <Sidebar>
        <div>
            <h1 style={{fontSize: '35px',color:'#2e2c2c'}}>Nouvelle expédition</h1><br/>
            <h2 style={{fontSize: '25px',color:'#2e2c2c'}}>Créer une nouvelle livraison</h2><br/><br/>
            <NewOrder />
        </div>
        </Sidebar>
        </>
    );
};

export default NvExpedition;