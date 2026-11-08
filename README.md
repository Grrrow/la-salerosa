# La Salerosa — Mar Morán · Aurelio Viribay

Micro-landing musical inmersiva a pantalla completa (`100dvh`, `overflow-hidden`) para el lanzamiento del single **"La Salerosa"** (*Canciones Líricas de Cristóbal Oudrid*), interpretado por **Mar Morán** y **Aurelio Viribay** (piano).

## Estructura del Proyecto

```text
/
├── public/
│   ├── favicon.svg                     # Monograma vectorial "LA" sobre fondo caoba
│   ├── logo-la-salerosa.svg            # Logotipo vectorial "LA SALEROSA"
│   ├── portada-la-salerosa-desktop.jpg # Máster 16:9 (2560×1440) centrado para desktop
│   ├── portada-la-salerosa-mobile.jpg  # Máster 9:16 (1080×1920) dedicado para móvil
│   └── portada-la-salerosa.jpg         # Fotografía máster de estudio
├── src/
│   ├── components/
│   │   └── LogoLaSalerosa.astro        # Componente SVG con brillo incandescente y neón cálido
│   ├── layouts/
│   │   └── Layout.astro                # Metadatos SEO/OpenGraph y fuentes de Google Fonts
│   ├── pages/
│   │   └── index.astro                 # Arquitectura en capas + ondas armónicas + 16 canciones
│   └── styles/
│       └── global.css                  # Tema Tailwind CSS v4 y animaciones escénicas
└── package.json
```

## Cómo añadir el vídeo/adelanto de estudio

Coloca el archivo de vídeo en `public/video-estudio.mp4`. El elemento `<video id="ambient-video">` lo detectará automáticamente al cargar (`loadeddata`) y realizará un fundido suave sobre la imagen de portada, activando el audio con *fade-in* progresivo al pulsar **"ACTIVAR SONIDO"**.

## Comandos

| Comando | Acción |
| :--- | :--- |
| `npm install` | Instala las dependencias |
| `npx astro dev --background` | Inicia el servidor de desarrollo en segundo plano |
| `npm run build` | Genera la compilación estática de producción en `./dist/` |
| `npm run preview` | Previsualiza la compilación localmente |
