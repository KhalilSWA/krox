import React from 'react';
import {
    Form,
    Button,
    Schema,
    InputNumber,
    Message,
    toaster,
    FlexboxGrid,
  } from 'rsuite';
  

  
  const Field = React.forwardRef((props, ref) => {
    const { name, message, label, accepter, error, ...rest } = props;
    return (
      <Form.Group controlId={`${name}-10`} ref={ref} className={error ? 'has-error' : ''}>
        <Form.ControlLabel>{label} </Form.ControlLabel>
        <Form.Control name={name} accepter={accepter} errorMessage={error} {...rest} />
        <Form.HelpText>{message}</Form.HelpText>
      </Form.Group>
    );
  });
  
  const { ArrayType, NumberType } = Schema.Types;
  const model = Schema.Model({
    skills: ArrayType()
      .minLength(2, 'Please select at least 2 types of Skills.')
      .isRequired('This field is required.'),
    status: ArrayType()
      .minLength(2, 'Please select at least 2 types of Status.')
      .isRequired('This field is required.'),
    level: NumberType().min(5, 'This field must be greater than 5')
  });
  
  const Foorm = () => {
    const formRef = React.useRef();
    const [formError, setFormError] = React.useState({});
    const [formValue, setFormValue] = React.useState({
      number: 10,
      skills: ['Node.js'],
      browser: 'Chrome',
      status: ['open'],
      level: 1,
      level2: 1,
      createDate: new Date(),
      toggle: true
    });
  
    const handleSubmit = () => {
      if (!formRef.current.check()) {
        toaster.push(<Message type="error">Error</Message>);
        return;
      }
      toaster.push(<Message type="success">Success</Message>);
    };
  
    return (
      <FlexboxGrid>
        <FlexboxGrid.Item colspan={12}>
          <Form
            ref={formRef}
            onChange={setFormValue}
            onCheck={setFormError}
            formValue={formValue}
            model={model}
          >
            <Field name="number" label="Number" accepter={InputNumber} error={formError.number} />
            
            <Form.Group>
              <Button appearance="primary" onClick={handleSubmit}>
                Valider
              </Button>
            </Form.Group>
          </Form>
        </FlexboxGrid.Item>
  
        <FlexboxGrid.Item colspan={12}>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    );
  };
  
export default Foorm