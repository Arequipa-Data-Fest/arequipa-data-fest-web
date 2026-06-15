### Módulo 01: Información del Evento (MOD-01)
Este módulo centraliza la identidad y los datos base necesarios para la comprensión del evento por parte del visitante.

| ID | Requerimiento | Descripción | Prioridad | Actores | Criterios de Aceptación |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **RF-001** | **Exposición de información base** | El sistema debe mostrar de forma prominente el nombre, descripción, fecha, hora y ubicación física del evento. | Alta | ACT-01 | - Datos legibles en landing page.<br>- Consistencia total con el contenido oficial.<br>- Accesibilidad en dispositivos móviles. |
| **RF-002** | **Renderizado de identidad visual** | El sistema debe aplicar la línea gráfica oficial (logos, paleta de colores y tipografías) definida en el sistema de diseño. | Alta | ACT-01 | - Carga correcta de estilos CSS.<br>- Activos gráficos sin distorsión.<br>- Fidelidad del 100% con prototipo Figma. |

---

### Módulo 02: Contenido del Evento (MOD-02)
Encapsula la información dinámica y estructurada que detalla la oferta académica y profesional del festival.

| ID | Requerimiento | Descripción | Prioridad | Actores | Criterios de Aceptación |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **RF-003** | **Visualización de la agenda** | El sistema debe listar cronológicamente las actividades, especificando bloques horarios, títulos, ponentes y tipo de sesión. | Alta | ACT-01 | - Orden cronológico ascendente.<br>- Layout responsive para visualización de horarios.<br>- Diferenciación visual por tipo de actividad. |
| **RF-004** | **Directorio de ponentes** | El sistema debe presentar una galería de los expertos participantes, incluyendo foto, nombre, cargo y breve biografía. | Alta | ACT-01 | - Imágenes optimizadas para carga rápida.<br>- Textos descriptivos íntegros (sin truncamiento crítico).<br>- Enlaces a perfiles (opcional si aplica). |

---

### Módulo 03: Interacción del Participante (MOD-03)
Gestiona los flujos de conversión y la entrega de valor tangible (certificación) para los asistentes.

| ID | Requerimiento | Descripción | Prioridad | Actores | Criterios de Aceptación |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **RF-005** | **Redirección a registro externo** | El sistema debe integrar botones de llamada a la acción (CTA) que dirijan al flujo de inscripción en la plataforma Luma. | Alta | ACT-01 | - Redirección a URL oficial de Luma.<br>- Apertura en pestaña independiente (`target="_blank"`).<br>- Tracking de clics operativo. |
| **RF-006** | **Emisión de certificados (Milestone)** | El sistema debe permitir la consulta y descarga de certificados PDF previa validación de identidad del participante. | Media | ACT-02, ACT-03 | - Validación de datos del asistente exitosa.<br>- Generación de PDF con datos dinámicos.<br>- Interfaz de búsqueda clara y funcional. |

---

### Módulo 04: Gestión Multimedia (MOD-04)
Asegura que la entrega de activos pesados no comprometa la experiencia de usuario.

| ID | Requerimiento | Descripción | Prioridad | Actores | Criterios de Aceptación |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **RF-007** | **Optimización de activos via CDN** | El sistema debe consumir todos los recursos visuales pesados desde Cloudinary, aplicando transformaciones automáticas. | Alta | ACT-03 | - Entrega de imágenes en formato WebP/AVIF.<br>- Redimensionamiento dinámico según el dispositivo.<br>- Reducción del peso de la página inicial. |

---

### Módulo 05: Publicación y Calidad Web (MOD-05)
Garantiza que el sistema cumpla con estándares técnicos de visibilidad y rendimiento.

| ID | Requerimiento | Descripción | Prioridad | Actores | Criterios de Aceptación |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **RF-008** | **Configuración de Metadatos SEO** | El sistema debe incluir etiquetas Meta (Title, Description) y Open Graph para optimizar indexación y social sharing. | Media | ACT-03 | - Título y descripción únicos por página.<br>- Previsualización correcta en redes sociales.<br>- Cumplimiento de estándares de accesibilidad básica. |

---

### Resumen de Priorización para Implementación

Esta tabla resume la carga de trabajo y el orden sugerido para el desarrollo:

| Código | Módulo | Prioridad | Impacto en el Negocio |
| :--- | :--- | :--- | :--- |
| **RF-001** | MOD-01 | **Crítica** | Información esencial del evento. |
| **RF-005** | MOD-03 | **Crítica** | Canal de conversión principal (Registros). |
| **RF-002** | MOD-01 | **Alta** | Branding y profesionalismo. |
| **RF-003** | MOD-02 | **Alta** | Utilidad para el asistente. |
| **RF-007** | MOD-04 | **Alta** | Rendimiento y experiencia de usuario. |
| **RF-004** | MOD-02 | **Media** | Valor agregado de los speakers. |
| **RF-008** | MOD-05 | **Media** | Alcance y difusión orgánica. |
| **RF-006** | MOD-03 | **Baja** | Funcionalidad post-evento. |
