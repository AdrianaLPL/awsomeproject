# Instrucciones para Configurar Google Sheets Integration

## Paso 1: Crear el Google Apps Script

1. Ve a [Google Apps Script](https://script.google.com)
2. Inicia sesión con tu cuenta de Google
3. Haz clic en **"Nuevo proyecto"**
4. Se abrirá un editor con una función vacía

## Paso 2: Pegar el Código

1. Abre el archivo `google-apps-script.js` en este proyecto
2. Copia **todo el contenido** del archivo
3. Pega el código en el editor de Google Apps Script
4. **IMPORTANTE**: El código ya tiene configurado el ID de tu Sheet (`1HAZ2nUIpCL62JPDkWrJUAfvfDMs-z9lyrtghtd1OI7M`), así que no necesitas cambiarlo

## Paso 3: Guardar el Proyecto

1. Haz clic en **"Guardar proyecto"** (Ctrl+S o Cmd+S)
2. Dale un nombre al proyecto, por ejemplo: "FarmaSmart Registration"

## Paso 4: Desplegar como Web App

1. Haz clic en el botón **"Desplegar"** (arriba a la derecha)
2. Selecciona **"Nueva implementación"**
3. En la configuración:
   - **Tipo**: Selecciona "Aplicación web"
   - **Descripción**: "API para guardar registros de FarmaSmart"
   - **Ejecutar como**: "Yo" (tu cuenta de Google)
   - **Quién tiene acceso**: **"Cualquiera"** (importante para que funcione desde tu sitio web)
4. Haz clic en **"Desplegar"**
5. **Autoriza el acceso** cuando te lo solicite:
   - Haz clic en "Revisar permisos"
   - Selecciona tu cuenta de Google
   - Haz clic en "Avanzado" si aparece
   - Haz clic en "Ir a [nombre del proyecto] (no seguro)"
   - Haz clic en "Permitir"

## Paso 5: Obtener la URL de la Web App

1. Después de desplegar, verás una ventana con la **URL de la aplicación web**
2. Copia esa URL completa (debe verse algo como: `https://script.google.com/macros/s/AKfyc.../exec`)
3. **Guarda esta URL**, la necesitarás en el siguiente paso

## Paso 6: Actualizar el Código JavaScript

1. Abre el archivo `script.js` en tu proyecto
2. Busca la línea que dice:
   ```javascript
   const scriptUrl = 'TU_URL_DE_GOOGLE_APPS_SCRIPT_AQUI';
   ```
3. Reemplaza `'TU_URL_DE_GOOGLE_APPS_SCRIPT_AQUI'` con la URL que copiaste en el paso anterior
4. Debe quedar algo así:
   ```javascript
   const scriptUrl = 'https://script.google.com/macros/s/AKfyc.../exec';
   ```

## Paso 7: Probar el Formulario

1. Sube los cambios a GitHub
2. Espera a que Vercel despliegue los cambios
3. Visita tu sitio web
4. Haz clic en el botón **"Regístrate"** en el header
5. Completa el formulario y envía
6. Verifica en tu Google Sheet que los datos se hayan guardado correctamente

## Estructura del Google Sheet

El script automáticamente creará las columnas si no existen:
- **Columna A**: id (ID único generado automáticamente)
- **Columna B**: Nombre
- **Columna C**: Apellido  
- **Columna D**: Correo

## Solución de Problemas

### Error: "No se puede acceder a la aplicación"
- Verifica que en la configuración de despliegue hayas seleccionado **"Cualquiera"** en "Quién tiene acceso"

### Error: "No se pueden guardar los datos"
- Verifica que el ID del Sheet en el código sea correcto
- Verifica que tengas permisos de edición en el Google Sheet

### Los datos no aparecen en el Sheet
- Verifica que la URL del script en `script.js` sea correcta
- Abre la consola del navegador (F12) para ver si hay errores
- Verifica los logs en Google Apps Script (Ver > Registros de ejecución)

## Nota de Seguridad

⚠️ **Importante**: La URL de tu Web App es pública. Cualquiera que tenga la URL puede enviar datos a tu Sheet. Para mayor seguridad en producción, considera:
- Implementar validación adicional en el Google Apps Script
- Agregar un token de autenticación
- Limitar el acceso por dominio

## Soporte

Si tienes problemas, verifica:
1. Que el Google Apps Script esté desplegado correctamente
2. Que la URL en `script.js` sea la correcta
3. Que tengas permisos de edición en el Google Sheet
4. La consola del navegador para errores de JavaScript

