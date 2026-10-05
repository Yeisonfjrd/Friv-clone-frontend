# Friv Clone Frontend

Una recreación moderna del clásico portal de juegos Friv, construida con React y diseñada con Tailwind CSS. Este proyecto ofrece una interfaz de usuario moderna y responsive que mantiene la esencia del Friv original.

## ✨ Características

- 🎮 Colección curada de juegos clásicos y modernos
- 🌓 Modo oscuro/claro
- 📱 Diseño totalmente responsive
- 🔍 Búsqueda y filtrado de juegos
- ❤️ Sistema de favoritos
- 🎯 Categorización de juegos
- 🖼️ Vista en cuadrícula y lista

## 🛠️ Tecnologías Utilizadas

- React 18
- Tailwind CSS
- Axios
- React Router DOM
- PostCSS

## 📋 Prerrequisitos

- Node.js 16.x o superior
- npm 7.x o superior
- Un editor de código (recomendado: VS Code)

## 🔧 Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/yeisonfjrd/friv-clone-frontend.git
cd friv-clone-frontend
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## 🎨 Personalización

### Temas

El proyecto utiliza variables CSS personalizadas para los temas claro y oscuro. Puedes modificarlas en `src/assets/styles/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
}
```

### Categorías

Las categorías de juegos se pueden modificar en el archivo `App.js`:

```javascript
const categories = ['all', 'arcade', 'adventure', 'puzzle', 'action', 'strategy', 'cards'];
```

## 📦 Construcción

Para construir la aplicación para producción:

```bash
npm run build
```

Los archivos de construcción se generarán en la carpeta `build/`.

## 🧪 Testing

Para ejecutar los tests:
```bash
npm test
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

### Guía de Estilo

- Utilizar componentes funcionales y hooks
- Seguir las convenciones de nombres de Tailwind CSS
- Mantener los componentes pequeños y reutilizables
- Documentar funciones y componentes complejos

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## ✨ Autores

=======
* **Yeison Fajardo** - *Trabajo Inicial* - [YeisonFjrd](https://github.com/Yeisonfjrd)

## 🎉 Agradecimientos

* Friv por la inspiración
* La comunidad de React
* Todos los contribuidores

## 📸 Capturas de Pantalla

![Vista Principal](screenshots/main.png)
![Modo Oscuro](screenshots/dark-mode.png)
![Vista Móvil](screenshots/mobile.png)

## 🔄 Estado del Proyecto

El proyecto está en desarrollo activo. Consulta la pestaña de [Issues](https://github.com/yeisonfjrd/friv-clone-frontend/issues) para ver las características planificadas y los problemas conocidos.

## 📊 Roadmap

- [ ] Implementar sistema de autenticación
- [ ] Añadir más juegos
- [ ] Mejorar el rendimiento de carga de imágenes
- [ ] Añadir animaciones de transición
- [ ] Implementar PWA
- [ ] Añadir soporte para múltiples idiomas 
