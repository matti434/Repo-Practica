# Proyecto React + Vite — eCommerce estilo Mercado Libre

Este proyecto es una réplica educativa de una plataforma tipo **Mercado Libre**, desarrollada con **React + Vite**, **React Router DOM**, **React Bootstrap**, **React Hook Form**, **SweetAlert2** y un **servidor fake con db.json** para simular una API.

---

## 🚀 Tecnologías utilizadas

### 1. **React + Vite**

* Proyecto inicializado con Vite por su velocidad y simplicidad.
* Estructura base del proyecto creada con:

```bash
npm create vite@latest nombre-proyecto --template react
```

* Instalación de dependencias:

```bash
npm install
npm run dev
```

---

### 2. **React Router DOM**

Usado para manejar rutas protegidas, públicas y privadas.

Instalación:

```bash
npm install react-router-dom
```

Se creó un router con páginas como:

* Home
* Productos
* Detalle
* Login / Registro
* Dashboard (Admin)

---

### 3. **React Bootstrap**

Usado para estilos rápidos y componentes responsivos.

Instalación:

```bash
npm install react-bootstrap bootstrap
```

Agregar Bootstrap en `main.jsx`:

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

---

### 4. **React Hook Form**

Librería para formularios simples y eficientes.

Instalación:

```bash
npm install react-hook-form
```

Usado para:

* Formularios de Login y Registro
* Validaciones de inputs
* Formularios para CRUD de productos

---

### 5. **SweetAlert2 (o alternativa)**

Usado para alertas modernas de éxito o error.

Instalación:

```bash
npm install sweetalert2
```

Ejemplo de uso:

```javascript
import Swal from 'sweetalert2';

Swal.fire('Bien hecho!', 'Usuario creado correctamente', 'success');
```

---

### 6. **db.json (Fake API)**

Usamos **json-server** para simular endpoints como productos, usuarios, etc.

Instalación:

```bash
npm install -g json-server
```

Ejecución:

```bash
json-server --watch db.json --port 3000
```

Estructura típica del `db.json`:

```json
{
  "usuarios": [],
  "productos": []
}
```

---

# 📁 Estructura del Proyecto

```
src/
  ├── Components/
  ├── Views/
  ├── Router/
  ├── Utils/
  ├── context/
  ├── assets/
  ├── App.jsx
  └── main.jsx
```

Incluye:

* **Rutas protegidas** para admin
* **UserStorage** para manejar sesión con localStorage
* **Servicios** para CRUD de usuarios y productos

---

# 🧪 Funcionalidades principales actuales

* Registro de usuario (solo usuario normal, no admin)
* Login + manejo de sesión local
* Productos mockeados con db.json
* CRUD básico para admin
* Navegación completa con React Router

---

# 📌 Roadmap — Próximas mejoras / Librerías futuras

Aquí iremos agregando todo lo que sumemos al proyecto:

### 🔧 Integraciones futuras

* ⏳ **OpenAI Realtime API** para tener un "asistente dentro del sitio"
* ⏳ **Carrito de compras con contexto global**
* ⏳ **Sistema de favoritos**
* ⏳ **Buscador avanzado** con filtros
* ⏳ **API externa de productos reales** (Mercado Libre API u otra)
* ⏳ **Sistema de roles más complejo**
* ⏳ **Protección avanzada de rutas**
* ⏳ **Animaciones con Framer Motion**
* ⏳ **Testing con Jest + RTL**

---

# 📝 Notas del desarrollo

* Proyecto trabajado con metodología **Scrum**
* Uso de **Trello** para gestionar tareas
* Componentes organizados según atomic design (opcional)
* Buenas prácticas aplicadas: separación lógica, hooks personalizados, servicios

---

# 🧑‍💻 Scripts

```bash
npm run dev     # Modo desarrollo
npm run build   # Compilar producción
npm run preview # Previsualizar build
npm run server # Modo base de datos FAKE API
```

---

¿Querés que agregue imágenes, diagramas, badges, o una sección de contribución como si fuera un repo profesional?
