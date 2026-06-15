# Decisiones técnicas


## Uso de Cloudinary

Decisión:

Utilizar Cloudinary como CDN multimedia.


Justificación:

El proyecto requiere manejar imágenes optimizadas sin implementar
un backend propio para almacenamiento.


Beneficios:

- Optimización automática.
- CDN incluido.
- Reducción de carga del frontend.


## Registro externo mediante Luma

Decisión:

No implementar sistema propio de registro.


Justificación:

El evento ya cuenta con una plataforma especializada.


Implementación:

El sitio únicamente redirige al usuario hacia Luma.
