import React from "react";
import { Steps } from "rsuite";
const styles = {
  width: "200px",
  display: "inline-table",
  verticalAlign: "top",
};

const Step = () => (
  <>
  <form >
  - Où se trouve mon colis ? <br />
  </form>
  <br />
    <br />
    <br />
    <form >
    <Steps current={2}>
      <Steps.Item
        title="Remis"
        style={{ fontSize: 15 }}
        description="(Ville)"
      />
      <Steps.Item
        title="Au dépôt"
        style={{ fontSize: 15 }}
        description="Borj Cédria"
      />
      <Steps.Item
        title="Expédié"
        style={{ fontSize: 15 }}
        description="Vers (Ville)"
      />
      <Steps.Item
        title="Livré"
        style={{ fontSize: 15 }}
        description="(Ville)"
      />
    </Steps>
    </form><br />
    <br />
    <br /> - Date <br /><br /><br />
    <br />
    <Steps current={2} vertical style={styles}>
      <Steps.Item title="Remis" description="Le 00/00/2024" />
      <Steps.Item title="Au dépôt" description="Le 00/00/2024" />
      <Steps.Item title="Expédié" description="Le 00/00/2024" />
      <Steps.Item title="Livré" description="Le 00/00/2024" />
    </Steps>
  </>
);

export default Step;
