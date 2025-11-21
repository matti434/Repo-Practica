import { zodResolver } from "@hookform/resolvers/zod";
import ValidacionesForm from "../../../Utils/ValidacionesForm";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./FormRegistro.css"

const FormRegistro = ({ onSubmit, onClose }) => {
  const {
    register,
    handleSubmit, // ← Corregido de "manipularSubmit"
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(ValidacionesForm) // ← Corregido de "resolve"
  });

  const procesarEnvio = (data) => {
    console.log("Datos válidos:", data);
    onSubmit?.(data);
  };

  // Calcular fechas límite para el calendario
  const fechaMinima = new Date(1955, 0, 1).toISOString().split('T')[0]; // 1955-01-01
  const fechaMaxima = new Date(2006, 11, 31).toISOString().split('T')[0]; // 2006-12-31

  return (
    <Form onSubmit={handleSubmit(procesarEnvio)}>
      {/* Nombre de Usuario */}
      <Form.Group className="mb-3">
        <Form.Label>Nombre de Usuario</Form.Label>
        <Form.Control 
          type="text"
          {...register("nombreDeUsuario")}
          isInvalid={!!errors.nombreDeUsuario} 
          placeholder="Ingrese su nombre de usuario"
        />
        <Form.Control.Feedback type="invalid">
          {errors.nombreDeUsuario?.message} {/* ? si no hay error no muestra message*/}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Email */}
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control 
          type="email"
          {...register("email")}
          isInvalid={!!errors.email} 
          placeholder="ejemplo@correo.com"
        />
        <Form.Control.Feedback type="invalid">
          {errors.email?.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Edad - Selector de Fecha */}
      <Form.Group className="mb-3">
        <Form.Label>Fecha de Nacimiento</Form.Label>
        <Form.Control 
          type="date"
          {...register("fechaNacimiento")}
          isInvalid={!!errors.fechaNacimiento} 
          min={fechaMinima}
          max={fechaMaxima}
        />
        <Form.Text className="text-muted">
          Debe ser entre 1955 y 2006 (18+ años)
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          {errors.fechaNacimiento?.message}
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

      {/* Confirmar Contraseña */}
      <Form.Group className="mb-4">
        <Form.Label>Confirmar Contraseña</Form.Label>
        <Form.Control 
          type="password"
          {...register("confirmarContraseña")}
          isInvalid={!!errors.confirmarContraseña} 
          placeholder="Repita su contraseña"
        />
        <Form.Control.Feedback type="invalid">
          {errors.confirmarContraseña?.message}
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
          <Button 
            variant="primary" 
            type="submit"
            className="w-100"
          >
            Registrarse
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormRegistro;