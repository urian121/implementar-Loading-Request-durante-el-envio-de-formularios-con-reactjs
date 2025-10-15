# Loading Request en Formularios React

Implementación de indicadores de carga dinámicos durante el envío de formularios usando [loading-request](https://www.npmjs.com/package/loading-request) y React Hook Form.

## Instalación

```bash
npm install
npm run dev
```

## Características

- ✅ Loading con estados visuales (cargando, éxito, error)
- ✅ Colores dinámicos según el estado
- ✅ Manejo de errores con try/catch
- ✅ Limpieza automática del formulario
- ✅ Feedback visual mejorado

## Uso de loading-request

```javascript
import { showLoading, hideLoading, updateLoading } from "loading-request";

// Mostrar loading inicial
showLoading({
  message: "Enviando...",
  spinnerColor: "#7366ff",
  textLoadingColor: "#7366ff"
});

// Actualizar según resultado
updateLoading({ 
  message: "¡Éxito!",
  spinnerColor: "#10b981"
});

// Ocultar loading
await hideLoading();
```

## Stack

- React 18 + Vite
- React Hook Form
- loading-request 2.21.0
- Bootstrap 5

![Demo](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/master/Loading-Request-formulario.gif)
