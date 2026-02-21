# Feliz Cumpleaños Brayan — 22/02/2026

Página de cumpleaños hecha con **Angular** (TypeScript + JavaScript), organizada en carpetas y lista para verse en el navegador con una dirección local.

## Estructura del proyecto

```
├── src/
│   ├── app/
│   │   ├── components/          # Componentes reutilizables
│   │   │   ├── hero/
│   │   │   ├── message/
│   │   │   ├── gallery/
│   │   │   ├── closing/
│   │   │   ├── music-control/
│   │   │   └── image-modal/
│   │   ├── pages/
│   │   │   └── home/
│   │   ├── services/
│   │   │   └── music.service.ts
│   │   ├── models/
│   │   │   └── gallery-photo.model.ts
│   │   ├── directives/
│   │   │   └── reveal.directive.ts
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   └── app.component.ts
│   ├── assets/
│   │   └── images/              # Fotos (photo1.png ... photo8.png)
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
├── tsconfig.json
└── vercel.json
```

## Cómo ver la página en el navegador (con dirección)

1. **Instalar dependencias**
   ```bash
   npm install
   ```

2. **Arrancar el servidor de desarrollo**
   ```bash
   npm start
   ```

3. **Abrir en el navegador**
   - La app se sirve en: **http://localhost:4200**
   - Abre esa dirección para ver la página de cumpleaños.

## Desplegar en Vercel

1. Sube el proyecto a GitHub.
2. En [vercel.com](https://vercel.com) crea un proyecto e importa el repositorio.
3. Vercel detectará Angular. Si no, en *Build and Output*:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist/feliz-cumpleanos-brayan/browser`
4. Despliega. Tu página quedará en una URL como `https://tu-proyecto.vercel.app`.

## Tecnologías

- **Angular 17** (framework)
- **TypeScript** y **JavaScript** (lógica y plantillas)
- **CSS** (diseño y animaciones)

---

Hecho con cariño para Brayan. ¡Feliz cumpleaños!
