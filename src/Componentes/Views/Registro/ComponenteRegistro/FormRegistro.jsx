import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

export const FormRegistro = () => {
  return (
  <Form>
   <Form.Label>Nombre Completo</Form.Label>
   <Form.Control
   type="text"
   />
  </Form>
  )
};
