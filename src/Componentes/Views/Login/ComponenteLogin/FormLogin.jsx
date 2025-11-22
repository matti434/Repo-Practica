import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ValidacionesForm from "../../../Utils/ValidacionesForm";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState = { errors },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(ValidacionesForm),
  });

  const procesarEnvio=(data) => {
    onSubmit(data);
    onClose();
  }
  return (
    <Form onSubmit={handleSubmit(procesarEnvio)}>
      {/* Nombre de Usuario */}
      <Form.Group className="mb-3">
        <Form.Label>Nombre de Usuario o Email</Form.Label>
        <Form.Control
          type="text"
          {...register("nombreDeUsuario")}
          isInvalid={!!errors.nombreDeUsuario}
          placeholder="Ingrese su nombre de usuario"
        />
        <Form.Control.Feedback type="invalid">
          {errors.nombreDeUsuario?.message}{" "}
          {/* ? si no hay error no muestra message*/}
        </Form.Control.Feedback>
      </Form.Group>
    

      {/* Contraseña */}
      <Form.Group className="mb-3">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          {...register("contraseña")}
          isInvalid={!!errors.contraseña}
          placeholder="Ingrese su contraseña"
        />
        <Form.Control.Feedback type="invalid">
          {errors.contraseña?.message}
        </Form.Control.Feedback>
      </Form.Group>


      {/* Botones */}
      <Row className="g-2">
        <Col>
          <Button
            variant="secondary"
            onClick={onClose}
            type="button"
            className="w-100"
          >
            Cancelar
          </Button>
        </Col>
        <Col>
          <Button variant="primary" type="submit" className="w-100">
            Registrarse
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
