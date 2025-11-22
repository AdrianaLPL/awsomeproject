/**
 * GOOGLE APPS SCRIPT PARA GUARDAR DATOS EN GOOGLE SHEETS
 * 
 * INSTRUCCIONES:
 * 1. Ve a https://script.google.com
 * 2. Crea un nuevo proyecto
 * 3. Pega este código completo
 * 4. Reemplaza 'TU_SHEET_ID_AQUI' con el ID de tu Google Sheet
 *    (El ID está en la URL: https://docs.google.com/spreadsheets/d/[ESTE_ES_EL_ID]/edit)
 * 5. Guarda el proyecto (Ctrl+S)
 * 6. Haz clic en "Desplegar" > "Nueva implementación"
 * 7. Selecciona tipo: "Aplicación web"
 * 8. Configura:
 *    - Ejecutar como: Yo (tu cuenta)
 *    - Quién tiene acceso: Cualquiera
 * 9. Haz clic en "Desplegar"
 * 10. Copia la URL de la aplicación web
 * 11. Pega esa URL en script.js reemplazando 'TU_URL_DE_GOOGLE_APPS_SCRIPT_AQUI'
 */

function doPost(e) {
  return processRequest(e.postData ? JSON.parse(e.postData.contents) : e.parameter);
}

function doGet(e) {
  return processRequest(e.parameter);
}

function processRequest(data) {
  try {
    // Obtener los datos (pueden venir de POST o GET)
    const nombre = data.nombre || '';
    const apellido = data.apellido || '';
    const correo = data.correo || '';
    
    // Validar que todos los campos estén presentes
    if (!nombre || !apellido || !correo) {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          message: 'Faltan campos requeridos'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // ID de tu Google Sheet
    // El ID está en la URL: https://docs.google.com/spreadsheets/d/[ESTE_ES_EL_ID]/edit
    const SHEET_ID = '1HAZ2nUIpCL62JPDkWrJUAfvfDMs-z9lyrtghtd1OI7M';
    
    // Abrir la hoja de cálculo
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // Verificar si la primera fila tiene headers, si no, agregarlos
    const firstRow = sheet.getRange(1, 1, 1, 4).getValues()[0];
    if (!firstRow[0] || firstRow[0].toString().toLowerCase() !== 'id') {
      // Agregar headers si no existen
      sheet.getRange(1, 1, 1, 4).setValues([['id', 'Nombre', 'Apellido', 'Correo']]);
    }
    
    // Generar ID único (timestamp + número aleatorio)
    const id = new Date().getTime() + Math.floor(Math.random() * 1000);
    
    // Agregar los nuevos datos en la siguiente fila
    const newRow = [
      id,
      nombre,
      apellido,
      correo
    ];
    
    sheet.appendRow(newRow);
    
    // Retornar respuesta exitosa
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Datos guardados correctamente',
        id: id
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Retornar error
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Error al guardar datos: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Función de prueba (opcional)
 * Puedes ejecutar esta función desde el editor de Apps Script para probar
 */
function testDoPost() {
  const mockEvent = {
    postData: {
      contents: JSON.stringify({
        nombre: 'Test',
        apellido: 'Usuario',
        correo: 'test@example.com'
      })
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}

