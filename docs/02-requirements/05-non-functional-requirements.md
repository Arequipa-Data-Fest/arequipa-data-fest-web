### 1. Rendimiento y Escalabilidad (Performance & Scalability)
Estos requerimientos aseguran que el sitio sea rápido y capaz de manejar la carga de usuarios durante las etapas de mayor difusión.

| ID | Atributo | Especificación Técnica | Método de Verificación |
| :--- | :--- | :--- | :--- |
| **RNF-001** | **Tiempo de Carga (LCP)** | El *Largest Contentful Paint* (LCP) debe ser inferior a **2.5 segundos** en condiciones de red 4G y dispositivos móviles de gama media. | Auditoría con Google Lighthouse / PageSpeed Insights. |
| **RNF-002** | **Optimización de Activos** | El 100% de las imágenes servidas deben utilizar formatos de última generación (WebP o AVIF) y estar comprimidas sin pérdida de calidad perceptible. | Inspección de red en DevTools y panel de Cloudinary. |
| **RNF-003** | **Escalabilidad de Tráfico** | La arquitectura debe ser capaz de soportar al menos **500 usuarios concurrentes** sin degradación en los tiempos de respuesta del servidor (TTFB). | Pruebas de carga (Load Testing) con herramientas como k6 o JMeter. |

---

### 2. Usabilidad y Compatibilidad (Usability & Compatibility)
Garantizan que el sistema sea inclusivo, accesible y funcione correctamente en el ecosistema de dispositivos de los usuarios.

| ID | Atributo | Especificación Técnica | Método de Verificación |
| :--- | :--- | :--- | :--- |
| **RNF-004** | **Diseño Responsivo** | La interfaz debe adaptarse fluidamente a resoluciones desde **320px** (móvil) hasta **1920px** (desktop), manteniendo la legibilidad y operatividad de los elementos. | Pruebas multi-dispositivo y emuladores de resolución. |
| **RNF-005** | **Accesibilidad (A11y)** | El sitio debe cumplir con el nivel **AA de las pautas WCAG 2.1**, incluyendo contrastes de color adecuados, navegación por teclado y etiquetas ARIA. | Herramientas de evaluación WAVE o Axe DevTools. |
| **RNF-006** | **Compatibilidad Cross-Browser** | El sistema debe ser totalmente funcional en las últimas dos versiones estables de **Chrome, Firefox, Safari y Edge**. | Pruebas de compatibilidad en BrowserStack o similar. |

---

### 3. Seguridad y Disponibilidad (Security & Availability)
Protección de la integridad de los datos y garantía de acceso ininterrumpido al sitio.

| ID | Atributo | Especificación Técnica | Método de Verificación |
| :--- | :--- | :--- | :--- |
| **RNF-007** | **Seguridad de Conexión** | Todo el tráfico de datos debe estar cifrado mediante el protocolo **HTTPS** utilizando un certificado TLS 1.3 o superior. | Verificación de certificado SSL en el navegador. |
| **RNF-008** | **Disponibilidad (Uptime)** | El sitio debe mantener una disponibilidad del **99.9% (SLA)** durante el mes previo y la semana del evento. | Monitoreo externo con herramientas tipo UptimeRobot. |
| **RNF-009** | **Integridad de Certificados** | El acceso a la descarga de certificados (RF-006) debe estar protegido contra ataques de fuerza bruta mediante *rate limiting* en las peticiones. | Pruebas de penetración (Pentesting) básicas sobre el endpoint. |

---

### 4. Mantenibilidad y Calidad de Código (Maintainability)
Asegura que el software sea fácil de evolucionar, documentar y corregir por el equipo técnico.

| ID | Atributo | Especificación Técnica | Método de Verificación |
| :--- | :--- | :--- | :--- |
| **RNF-010** | **Componentización** | El frontend debe seguir una arquitectura basada en componentes (ej. React/Next.js) con una separación clara de responsabilidades (Lógica vs. Presentación). | Revisión de código (Code Review) y análisis estático. |
| **RNF-011** | **Documentación Técnica** | El repositorio debe incluir un archivo `README.md` detallado con instrucciones de instalación, despliegue y arquitectura, además de comentarios en funciones complejas. | Auditoría del repositorio de código. |
| **RNF-012** | **Despliegue Continuo (CI/CD)** | El sistema debe contar con un pipeline automatizado de despliegue que ejecute linters y builds de producción antes de cada liberación. | Verificación de configuración en GitHub Actions o plataforma similar. |

---

### Resumen de Priorización de Atributos de Calidad

Para el éxito del **Arequipa Data Fest 2026**, el orden de relevancia de estos requerimientos es:

1.  **Rendimiento (RNF-001, RNF-002):** Crítico para evitar la deserción de usuarios en la landing page.
2.  **Usabilidad (RNF-004):** Esencial dado que el tráfico principal provendrá de redes sociales (móvil).
3.  **Disponibilidad (RNF-008):** Vital durante la ventana de tiempo donde se realizan las campañas de conversión.
4.  **Mantenibilidad (RNF-010):** Importante para la escalabilidad a futuros "milestones" como el sistema de certificados.
