import React from "react";
import {
  Input,
  Drawer,
  RadioGroup,
  ButtonToolbar,
  Button,
  Panel,
  Stack,
} from "rsuite";
import { FcSearch } from "react-icons/fc";
import { FcShipped } from "react-icons/fc";
import Step from "./Step";

const Drawersuivi = () => {
  const [backdrop, setBackdrop] = React.useState("static");
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Panel 
        bordered
        header={
          <Stack justifyContent="space-between" >
            
            <span>
              - Où en est ma livraison ?<br/>
              - Utiliser le numero de la commande pour suivre votre colis ...{" "}
            </span>
          </Stack>
        }
        
      >
        <RadioGroup
          name="radioList"
          appearance="picker"
          inline
          value={backdrop}
          onChange={setBackdrop}
        ></RadioGroup>
        <hr />
        <br />
        <br />

        <form>
          <Stack spacing={10}>
            <Input name="name" placeholder="N° de la commande" />

            <ButtonToolbar>
              <Button onClick={() => setOpen(true)}>
                <FcSearch />
              </Button>
            </ButtonToolbar>
            <Drawer
              backdrop={backdrop}
              open={open}
              onClose={() => setOpen(false)}
            >
              <Drawer.Header>
                <Drawer.Title>Statut de livraison</Drawer.Title>
                <Drawer.Actions>
                  <Button onClick={() => setOpen(false)} appearance="primary">
                    <FcShipped style={{ fontSize: "30px" }} />
                  </Button>
                </Drawer.Actions>
              </Drawer.Header>
              <Drawer.Body>
                <Step />
              </Drawer.Body>
            </Drawer>
          </Stack>
        </form>
      </Panel>
    </>
  );
};

export default Drawersuivi;
