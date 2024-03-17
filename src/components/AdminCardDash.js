import { Panel, Row, Col } from 'rsuite';

const CardNbrcolis = () => (
  <Row style={{float:'right',display:'flex',margin:'10px',marginTop:'-20px'}}>
    <Col >
    <Panel bordered header="Livraisons a accepter" style={{borderColor:'black',width:'200px'}}>
    <text style={{fontSize:'40px',color:'#2e2c2c'}}>0</text>
  </Panel>
    </Col>
    <Col >
    <Panel bordered header="Colis au dépôt" style={{borderColor:'black',width:'200px'}}>
    <text style={{fontSize:'40px',color:'#2e2c2c'}}>0</text>
  </Panel>
    </Col>
  </Row>
);

export default CardNbrcolis;