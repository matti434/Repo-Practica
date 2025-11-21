import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// zod una libreria de validacion de datos tipo "nivel backend pero frontend"
const ValidacionesForm = z
  .object({
    nombreDeUsuario: z
      .string()
      .min(5, "El nombre de usuario debe tener mínimo 5 caracteres")
      .max(20, "El nombre de usuario no puede superar 20 caracteres")
      .regex(
        /^(?!_)(?!.*\s)[a-zA-Z0-9_]+$/,
        "Solo letras, números y guión bajo"
      )
      .transform((val) => val.normalize("NFKC")), //Normaliza los caracteres Unicode (los que se ven igual pero tecnicamente son diferentes)

    email: z
      .string()
      .email("Debe ingresar un email válido")
      .regex(
        /^[^\s<>()\[\]\\.,;:"%]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Email inválido"
      ),

    fechaNacimiento: z
      .string()
      .min(1, "La fecha de nacimiento es requerida")
      .refine((fecha) => {
        const fechaNac = new Date(fecha);
        const minDate = new Date(1955, 0, 1);
        const maxDate = new Date(2006, 11, 31);
        return fechaNac >= minDate && fechaNac <= maxDate;
      }, "Debes tener entre 18 y 68 años (nacido entre 1955-2006)"),

    contraseña: z
      .string()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .max(20, "La contraseña no puede superar 20 caracteres")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s∞π√∆∑∏∫∂µ∧∨∩∪∈∉⊂⊃⊆⊇≠≤≥≈≡∋∀∃∄¬∧∨⊕⊗⊥⊤⌈⌉⌊⌋〈〉]).+$/,
        "Debe tener mayúscula, minúscula, número y un símbolo (excepto caracteres matemáticos)"
      )
      .transform((val) => val.normalize("NFKC")),

    confirmarContraseña: z.string(),
  })
  // .refine permite crear validaciones personalizadas
  .refine(
    (data) => data.contraseña === data.confirmarContraseña, //  conficion de true o false
    {
      //objeto de configuracion
      message: "Las contraseñas no coinciden", //mensaje si falla
      path: ["confirmarContraseña"], // donde mostrar el error
    }
  );

export default ValidacionesForm;
