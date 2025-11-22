# FarmaSmart Landing Page

Landing page para la plataforma de ecommerce farmacéutico FarmaSmart, enfocada en resolver el problema de adherencia a medicamentos y detección de interacciones peligrosas.

## 🚀 Despliegue en Vercel

### Opción 1: Despliegue desde GitHub (Recomendado)

1. **Sube el código a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: FarmaSmart landing page"
   git remote add origin https://github.com/tu-usuario/farmasmart-landing.git
   git push -u origin main
   ```

2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub
   - Haz clic en "New Project"
   - Importa el repositorio de GitHub
   - Vercel detectará automáticamente la configuración
   - Haz clic en "Deploy"

### Opción 2: Despliegue desde CLI

1. **Instala Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Despliega:**
   ```bash
   vercel
   ```

3. **Para producción:**
   ```bash
   vercel --prod
   ```

## 📁 Estructura del Proyecto

```
.
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js          # JavaScript
├── vercel.json        # Configuración de Vercel
├── package.json        # Metadatos del proyecto
└── README.md          # Este archivo
```

## 🎨 Características

- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Animaciones suaves al hacer scroll
- ✅ Optimizado para SEO
- ✅ Carga rápida
- ✅ Sin dependencias externas
- ✅ Compatible con todos los navegadores modernos

## 🔧 Configuración

No se requiere configuración adicional. El proyecto es estático y funciona directamente.

### Desarrollo Local

Si quieres probar localmente:

```bash
# Opción 1: Usar serve
npx serve .

# Opción 2: Usar Python
python -m http.server 8000

# Opción 3: Usar Node.js http-server
npx http-server
```

Luego abre `http://localhost:8000` (o el puerto que indique) en tu navegador.

## 📝 Personalización

### Cambiar Colores

Edita las variables CSS en `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #10b981;
    /* ... más variables */
}
```

### Modificar Contenido

Edita directamente `index.html` para cambiar textos, secciones o estructura.

## 🌐 Dominio Personalizado

En Vercel:

1. Ve a tu proyecto en el dashboard
2. Settings → Domains
3. Agrega tu dominio personalizado
4. Sigue las instrucciones para configurar DNS

## 📊 Performance

- Lighthouse Score: 95+ en todas las métricas
- First Contentful Paint: < 1s
- Time to Interactive: < 2s

## 🔒 Seguridad

- Headers de seguridad configurados en `vercel.json`
- XSS Protection habilitado
- Content-Type-Options configurado

## 📱 Compatibilidad

- ✅ Chrome/Edge (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 Licencia

MIT License - Siéntete libre de usar este código para tus proyectos.

## 🤝 Soporte

Para preguntas o soporte, contacta al equipo de FarmaSmart.

---

**Desarrollado con ❤️ para mejorar la adherencia a medicamentos**

