import React from "react";
import Tablev from "../components/Tables";
import CardNbrLiv from "../components/CardNbrLiv";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    
    <Sidebar>
      
      <div>
        
        <h1 style={{ fontSize: "35px", color: "#2e2c2c" }}>Tableau de bord</h1>
        <br />
        <h2 style={{ fontSize: "20px", color: "#2e2c2c" }}>
          Historique des livraisons
        </h2>
        <br />
        <br />
        <br />
        <br />
        <br />
        <CardNbrLiv />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Tablev />
      </div>

    </Sidebar>
  );
};

export default Dashboard;
