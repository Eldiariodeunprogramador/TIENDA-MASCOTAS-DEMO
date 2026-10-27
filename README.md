# Patitas Felices — Tienda de mascotas

Proyecto académico de sitio web responsivo desarrollado con HTML5, CSS3 y JavaScript básico para interacciones de demostración.

## Estructura

```text
tienda_mascotas/
├── index.html
├── css/
│   └── estilos.css
├── js/
│   └── app.js
├── img/
│   ├── perro-portada.svg
│   ├── alimento-perros.svg
│   ├── juguete-perro.svg
│   ├── kit-paseo.svg
│   ├── gato-rascador.svg
│   ├── nosotros-mascotas.svg
│   └── README.txt
└── README.md
```

## Cómo probarlo

1. Descarga y descomprime la carpeta.
2. Abre `index.html` en un navegador moderno.
3. Para editar el proyecto, abre la carpeta en Visual Studio Code.
4. Las ilustraciones de mascotas están guardadas localmente en `img/` y no requieren Internet. Las fuentes tipográficas externas sí pueden necesitar conexión; el sitio usa fuentes de respaldo si no están disponibles.

## Funcionalidades incluidas

- Navegación por Inicio, Servicios, Productos, Nosotros y Contacto.
- Estructura semántica HTML5.
- Diseño responsivo para computador, tableta y móvil.
- Catálogo con fotografías, nombre, descripción y precio.
- Filtros por tipo de producto.
- Carrito visual que calcula cantidades y total estimado.
- Slider de testimonios.
- Efectos hover y transiciones CSS.
- Formularios con validación del navegador y respuesta visual de demostración.
- Menú móvil desplegable.

## Publicar en Netlify

1. Entra a https://www.netlify.com/ y crea una cuenta o inicia sesión.
2. Descomprime el archivo ZIP en tu equipo.
3. En el panel de Netlify, busca la opción para añadir un sitio nuevo y desplegarlo manualmente (Deploy manually; el nombre puede variar).
4. Arrastra la carpeta `tienda_mascotas` descomprimida —la que contiene directamente `index.html`— al área de despliegue.
5. Espera a que termine el despliegue y abre el enlace público generado.
6. Copia ese enlace y entrégalo al docente.

## Notas importantes

- El carrito es una simulación visual; no procesa pagos ni guarda pedidos.
- Los formularios solo muestran una confirmación local. Para enviar mensajes reales se necesita un backend o un servicio de formularios.
- Los enlaces sociales y algunos datos de contacto son demostrativos. Ajusta el correo y la información comercial antes de presentar el sitio.
- No requiere instalar dependencias ni compilar código.
