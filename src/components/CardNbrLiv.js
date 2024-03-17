import { Panel, Row, Col } from 'rsuite';

const CardNbrLiv = () => (
  <Row style={{float:'right',display:'flex',margin:'10px',marginTop:'-20px',width:'400px'}}>
    <Col >
    <Panel bordered header="Livraisons Annulées" style={{borderColor:'black'}}>
    <text style={{fontSize:'40px',color:'#2e2c2c'}}>0</text>
  </Panel>
    </Col>
    <Col >
    <Panel bordered header="Livraisons effectuées" style={{borderColor:'black'}}>
    <text style={{fontSize:'40px',color:'green'}}>0</text>
  </Panel>
    </Col>
  </Row>
);

export default CardNbrLiv;