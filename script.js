let pedidoActual = [];
const determinaciones = [
  // SECTOR HEMATOLOGÍA
 { nombre: "Eritrosedimentación", area: "Hematología", muestra: "Sangre entera con EDTA", tubo: "Lila (EDTA)", toma: "Ayuno 8hs", urgencia: "Media", procesamiento: "Dentro de las 4hs", obs: "Temperatura ambiente." },
  { nombre: "Hemograma", area: "Hematología", muestra: "Sangre entera con EDTA", tubo: "Lila (EDTA)", toma: "Ayuno 8hs", urgencia: "Alta", procesamiento: "Dentro de las 4hs", obs: "Conservación Temperatura ambiente." },
  { nombre: "Gota Gruesa", area: "Hematología", muestra: "Punción capilar", tubo: "Extendido", toma: "Ayuno 8hs", urgencia: "Alta", procesamiento: "Inmediato", obs: "Enviar en recipiente seco (sin hielo)." },
  { nombre: "Recuento de reticulocitos", area: "Hematología", muestra: "Sangre entera con EDTA", tubo: "Lila (EDTA)", toma: "Ayuno 8hs", urgencia: "Media", procesamiento: "Antes de 1h", obs: "Procesar en el momento o antes de la hora de extracción." },
  
  // SECTOR HEMOSTASIA
  {// ==========================================
nombre: "Tiempo de Protrombina (TP / TPCS2)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Antes de 5 hs", obs: "Centrifugar y separar en tubo de plástico. Volver a centrifugar. Conservar a Temp. Ambiente. Refrigerar si se demora." },
{ nombre: "Tiempo de Protrombina - Método Manual (TP M)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Antes de 5 hs", obs: "Método manual. Centrifugar y separar en tubo de plástico. Volver a centrifugar. Temp. Ambiente (Refrigerar si se demora)." },
{ nombre: "KPTT (Tiempo de Tromboplastina Parcial Activado / KPTTCS2)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Antes de 5 hs", obs: "Temperatura ambiente. Centrifugar y separar en tubo de plástico. Refrigerar si demora." },
{ nombre: "KPTT - Método Manual (KPTTM)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Antes de 5 hs", obs: "Método manual. Temperatura ambiente. Centrifugar y separar en tubo de plástico." },
{ nombre: "Dímeros D (DIMD)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Antes de 5 hs", obs: "Centrifugar y separar en tubo de plástico. Temperatura ambiente." },
{ nombre: "Fibrinógeno (FIB)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente. Centrifugar y separar en tubo de plástico." },
{ nombre: "Anticoagulante Lúpico (Screning y Confirmatorio - Código 2709)", area: "Hemostasia", muestra: "Plasma citratado MUY pobre en plaquetas", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "CRÍTICO: Doble centrifugado estricto para eliminar plaquetas. Separar en tubo de plástico. Temp. ambiente o congelar si se deriva." },
{ nombre: "Dosaje de von Willebrand: Funcional / Inmunológico (FVWF / 5119)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario / Derivación", obs: "Centrifugar y separar en tubo de plástico. Volver a centrifugar. Temperatura ambiente para procesamiento inmediato." },
{ nombre: "Dosaje Factores de Coagulación (FV, FVII, FVIII, FIX, FX, FXI, FXII, FXIII)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario / Derivación", obs: "Especificar factor solicitado. Centrifugar y separar en tubo plástico. Volver a centrifugar. Temperatura ambiente." },
{ nombre: "Proteína C (PROCCR)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Centrifugar y separar en tubo de plástico. Volver a centrifugar. Temperatura ambiente." },
{ nombre: "Proteína S (PROTSFL)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Centrifugar y separar en tubo de plástico. Volver a centrifugar. Temperatura ambiente." },
{ nombre: "Inhibidores: Antitrombina / Anti Factor VIII / Anti Factor IX (FVIIIBTD / FIXBTD)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario / Derivación", obs: "Centrifugar y separar en tubo de plástico. Volver a centrifugar. Temperatura ambiente." },
{ nombre: "Tiempo de Reptilasa (TR)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Centrifugar y separar del paquete celular en tubo plástico. Volver a centrifugar. Freezar rápidamente a -20°C hasta su procesamiento/derivación." },
  { nombre: "Anticoagulante Lúpico", area: "Hemostasia", muestra: "Plasma citratado Pobre en Plaquetas", tubo: "Celeste (Citrato)", toma: "Ayuno 8hs", urgencia: "Baja", procesamiento: "Especial", obs: "Centrifugar dos veces para eliminar plaquetas." },
  
  // SECTOR QUÍMICA CLÍNICA
  // =========================================================================
{ nombre: "Glucemia (GLU)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Uremia / Urea (URE)", area: "Química clínica", muestra: "Suero o Plasma", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Creatinina Sérica (CRE)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Ionograma Sérico (ION)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Hemoglobina Glicosilada (HBGLIC)", area: "Química clínica", muestra: "Sangre entera", tubo: "Lila (EDTA)", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Ácido Úrico (URI)", area: "Química clínica", muestra: "Suero o Plasma", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "En el día", obs: "Temperatura ambiente. De lo contrario, refrigerar a 4°C." },
{ nombre: "Ácido Úrico Urinario (URIU)", area: "Química clínica", muestra: "Orina de 24 hs", tubo: "Frasco de Orina (24 hs)", toma: "Recolectar orina de 24 hs", urgencia: "Baja", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Mantener el frasco en lugar fresco durante la recolección. Conservar a Temp. ambiente." },
{ nombre: "Albúmina Sérica (ALB)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente o refrigerar." },
{ nombre: "Amilasa Sérica (AMI)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente o refrigerar." },
{ nombre: "Bilirrubina Total y Directa (111)", area: "Química clínica", muestra: "Suero o Plasma", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "PROTEGER DE LA LUZ. Temperatura ambiente o refrigerar." },
{ nombre: "Calcemia / Calcio Sérico (CA)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente o refrigerar." },
{ nombre: "Calcio Urinario / Calciuria 24 hs (CAU)", area: "Química clínica", muestra: "Orina de 24 hs", tubo: "Frasco de Orina (24 hs)", toma: "Recolectar orina de 24 hs", urgencia: "Baja", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Clearence de Creatinina (CL CREL)", area: "Química clínica", muestra: "Suero y Orina de 24 hs", tubo: "Rojo/Amarillo + Frasco de 24 hs", toma: "Punción venosa + Recolección 24 hs", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí (Suero)", separar: "Sí (Suero)", procesamiento: "Diario", obs: "CRÍTICO: Requiere el peso y la talla exacta del paciente, además del volumen total de la orina." },
{ nombre: "Complemento C3 (C3 AUT)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Complemento C4 (C4 AUT)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Creatinina Urinaria (CRE U)", area: "Química clínica", muestra: "Orina de 24 hs", tubo: "Frasco de Orina (24 hs)", toma: "Recolectar orina de 24 hs", urgencia: "Baja", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Creatinquinasa Total / CK (CPK)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente. Evitar inyecciones intramusculares previas." },
{ nombre: "Fosfatasa Alcalina (FAL)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Fósforo Sérico (P)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Fósforo Urinario (PUR)", area: "Química clínica", muestra: "Orina de 24 hs", tubo: "Frasco de Orina (24 hs)", toma: "Recolectar orina de 24 hs", urgencia: "Baja", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Gamma Glutamil Transpeptidasa (GGT)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Glucosa en Orina / Glucosuria 24 hs (GLUR)", area: "Química clínica", muestra: "Orina de 24 hs", tubo: "Frasco de Orina (24 hs)", toma: "Recolectar orina de 24 hs", urgencia: "Baja", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Hierro Sérico / Sideremia (FE)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Índice Albuminuria/Creatinuria (IAB2)", area: "Química clínica", muestra: "Primer Orina de la Mañana", tubo: "Frasco de Orina Limpio", toma: "Recolectar primer chorro medio matutino", urgencia: "Baja", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Índice Proteinuria/Creatininuria (IPC2)", area: "Química clínica", muestra: "Primer Orina de la Mañana", tubo: "Frasco de Orina Limpio", toma: "Recolectar primer chorro medio matutino", urgencia: "Baja", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Inmunoglobulina A (IGA)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Inmunoglobulina G (IGG)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Inmunoglobulina M (IGM)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Ionograma Urinario (ION U)", area: "Química clínica", muestra: "Orina de 24 hs", tubo: "Frasco de Orina (24 hs)", toma: "Recolectar orina de 24 hs", urgencia: "Baja", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Lactato Deshidrogenasa (LDH)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente. No refrigerar (se inactiva a bajas temperaturas)." },
{ nombre: "Magnesio Sérico (MG)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Magnesio Urinario 24 hs (MGUR)", area: "Química clínica", muestra: "Orina de 24 hs", tubo: "Frasco de Orina (24 hs)", toma: "Recolectar orina de 24 hs", urgencia: "Baja", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Microalbuminuria (MICAL)", area: "Química clínica", muestra: "Orina de 24 hs", tubo: "Frasco de Orina (24 hs)", toma: "Recolectar orina de 24 hs", urgencia: "Baja", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Proteína C Reactiva (PCRRE)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Proteínas Totales Séricas (PT)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Test de Tolerancia Oral a la Glucosa (P75)", area: "Química clínica", muestra: "Suero o Plasma", tubo: "Rojo/Amarillo (Múltiples extracciones)", toma: "Protocolo de carga de Glucosa (ASAD)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "RECOMENDACIÓN ASAD:\n• 3 días antes: Ingerir carbohidratos comunes. Evitar estrés, infecciones o fiebre.\n• Concurrir con 8 hs de ayuno exactas y 75g de glucosa de farmacia.\n• Se mide glucemia basal (debe ser <125 mg/dL). Se ingieren 75g de glucosa diluidos en 375ml de agua en 5 min.\n• Reposo sentado estricto por 2 hs para la segunda extracción. Náuseas o vómitos suspenden la prueba." },
{ nombre: "Proteinuria de 24 hs (PT U)", area: "Química clínica", muestra: "Orina de 24 hs", tubo: "Frasco de Orina (24 hs)", toma: "Recolectar orina de 24 hs", urgencia: "Baja", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Transaminasa GOT / AST", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Transaminasa GPT / ALT", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Transferrina (TRAN)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Urea Urinaria (UREU)", area: "Química clínica", muestra: "Orina de 24 hs", tubo: "Frasco de Orina (24 hs)", toma: "Recolectar orina de 24 hs", urgencia: "Baja", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Capacidad Total de Fijación de Hierro (IBCT)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Ácidos Biliares (ACBIL)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Factor Reumatoideo (FRE)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Antiestreptolisina O / ASTO (ASTOE)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Ciclosporina (CSA)", area: "Química clínica", muestra: "Sangre Entera", tubo: "Lila (EDTA)", toma: "Punción venosa (Consignar hora última toma médica)", urgencia: "Alta", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario / Monitoreo", obs: "CRÍTICO: Enviar SANGRE ENTERA. No centrifugar, no enviar suero ni plasma. Temperatura ambiente." },
{ nombre: "Tacrolimus (TACROQ)", area: "Química clínica", muestra: "Sangre Entera", tubo: "Lila (EDTA)", toma: "Punción venosa (Consignar hora última toma médica)", urgencia: "Alta", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario / Monitoreo", obs: "CRÍTICO: Enviar SANGRE ENTERA. No centrifugar, no enviar suero ni plasma. Temperatura ambiente." },
{ nombre: "Fructosamina (FRU)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Jueves", obs: "Corte de procesamiento semanal: días Jueves. Temperatura ambiente." },
{ nombre: "Colesterol Total (COL)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Sector Lípidos. Temperatura ambiente." },
{ nombre: "Triglicéridos (TRI)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Sector Lípidos. Respetar estrictamente el ayuno para evitar sueros lipémicos." },
{ nombre: "Colesterol HDL (HDL)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Sector Lípidos. Temperatura ambiente." },
{ nombre: "Colesterol LDL (LDL)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Sector Lípidos. Temperatura ambiente." },
{ nombre: "Proteinograma Electroforético (PTG)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "En el día", obs: "Sector Proteínas. Temperatura ambiente. Procesamiento diario." },
{ nombre: "Electroforesis de Hemoglobina (EHEM)", area: "Química clínica", muestra: "Sangre Entera", tubo: "Lila (EDTA)", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "En el día", obs: "Sector Proteínas. Temperatura ambiente. Procesamiento diario." },

// SECTOR HEMOSTASIA
// =========================================================================
{ nombre: "Tiempo de Protrombina (TP / TPCS2)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Antes de 5 hs", obs: "Centrifugar y separar en tubo de plástico. Volver a centrifugar. Conservar a Temp. Ambiente. Refrigerar si se demora." },
{ nombre: "Tiempo de Protrombina - Método Manual (TP M)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Antes de 5 hs", obs: "Método manual. Centrifugar y separar en tubo de plástico. Volver a centrifugar. Temp. Ambiente (Refrigerar si se demora)." },
{ nombre: "KPTT (Tiempo de Tromboplastina Parcial Activado / KPTTCS2)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Antes de 5 hs", obs: "Temperatura ambiente. Centrifugar y separar en tubo de plástico. Refrigerar si demora." },
{ nombre: "KPTT - Método Manual (KPTTM)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Antes de 5 hs", obs: "Método manual. Temperatura ambiente. Centrifugar y separar en tubo de plástico." },
{ nombre: "Dímeros D (DIMD)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Antes de 5 hs", obs: "Centrifugar y separar en tubo de plástico. Temperatura ambiente." },
{ nombre: "Fibrinógeno (FIB)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente. Centrifugar y separar en tubo de plástico." },
{ nombre: "Anticoagulante Lúpico (Screning y Confirmatorio - Código 2709)", area: "Hemostasia", muestra: "Plasma citratado MUY pobre en plaquetas", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "CRÍTICO: Doble centrifugado estricto para eliminar plaquetas. Separar en tubo de plástico. Temp. ambiente o congelar si se deriva." },
{ nombre: "Dosaje de von Willebrand: Funcional / Inmunológico (FVWF / 5119)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario / Derivación", obs: "Centrifugar y separar en tubo de plástico. Volver a centrifugar. Temperatura ambiente para procesamiento inmediato." },
{ nombre: "Dosaje Factores de Coagulación (FV, FVII, FVIII, FIX, FX, FXI, FXII, FXIII)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario / Derivación", obs: "Especificar factor solicitado. Centrifugar y separar en tubo plástico. Volver a centrifugar. Temperatura ambiente." },
{ nombre: "Proteína C (PROCCR)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Centrifugar y separar en tubo de plástico. Volver a centrifugar. Temperatura ambiente." },
{ nombre: "Proteína S (PROTSFL)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Centrifugar y separar en tubo de plástico. Volver a centrifugar. Temperatura ambiente." },
{ nombre: "Inhibidores: Antitrombina / Anti Factor VIII / Anti Factor IX (FVIIIBTD / FIXBTD)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario / Derivación", obs: "Centrifugar y separar en tubo de plástico. Volver a centrifugar. Temperatura ambiente." },
{ nombre: "Tiempo de Reptilasa (TR)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Centrifugar y separar del paquete celular en tubo plástico. Volver a centrifugar. Freezar rápidamente a -20°C hasta su procesamiento/derivación." },

// =========================================================================
// SECTOR SEROLOGÍA
// =========================================================================
{ nombre: "VDRL Cualitativa (VDRL)", area: "Serología", muestra: "Suero / LCR", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana (En el día)", obs: "Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "HIV Elisa (HIV)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Chagas Elisa (CHAE)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana (En el día)", obs: "Procesar en el día, de lo contrario mantener en refrigeración (4°C)." },
{ nombre: "Chagas HAI (CHAH)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Temperatura ambiente. Procesar en el día o refrigerar a 4°C." },
{ nombre: "Chagas Microstrout (CHAST)", area: "Serología", muestra: "Sangre Entera", tubo: "Verde (Heparina)", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Alta", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Antes de las 6 hs", obs: "CRÍTICO: No centrifugar. Mantener a temperatura ambiente y procesar antes de las 6 horas de extracción de forma estricta." },
{ nombre: "Citomegalovirus IgG (CMVGQ)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Citomegalovirus IgM (CMVMQ)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Hepatitis A IgM Elisa (HAVM)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Hepatitis B Ac anti-Core (ACORETQ)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Hepatitis B Ag S / Antígeno de Superficie (HBSAG)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Hepatitis B Core M (AHBCM)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Hepatitis B Ac anti-HBsAg / Anti Antígeno de Superficie (AHBSQ)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Monitoreo de anticuerpos (Post-vacunación). Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Hepatitis C Elisa (HCV)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Reacción de Widal (WID)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Diagnóstico de Salmonelosis. Conservar a temperatura ambiente." },
{ nombre: "Reacción de Huddleson (HUD)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Diagnóstico de Brucelosis. Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Reacción de Paul-Bunnell (PB)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Mononucleosis infecciosa. Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Sífilis TPPA (TPPA)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Prueba treponémica confirmatoria. Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Toxoplasmosis IgG (TOXOG)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Toxoplasmosis IgM (TOXOM)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Virus Epstein-Barr IgG (BARGQ)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Virus Epstein-Barr IgM (BARMQ)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Temperatura ambiente o refrigerar a 4°C." },

  // SECTOR ORINA Y MATERIA FECAL
  { nombre: "Orina Completa", area: "Orina", muestra: "Orina (chorro medio)", tubo: "Frasco limpio", toma: "Higiene previa", urgencia: "Media", ayuno: "Ayuno 8 hs", centrifugar: "No", separar: "No", procesamiento: "2 hs", obs: "Primera orina de la mañana. Procesar en el día o refrigerar." },
  { nombre: "Parasitológico Directo", area: "Parasitología", muestra: "Materia fecal", tubo: "Frasco limpio", toma: "Muestra espontánea", urgencia: "Baja", ayuno: "No", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Sin conservantes. Temperatura ambiente." },
  
  // =========================================================================
// SECTOR ENDOCRINOLOGÍA
// =========================================================================
{ nombre: "Cortisol Sérico (CORTISOL)", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (8:00 AM EXACTA)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Especial", obs: "HORARIO ESTRICTO: Extracción a las 8 AM. Previo ayuno de 8 hs. Consignar medicación. Refrigerar a 4°C hasta 48 hs. Interfiere lipemia e ictericia severa." },
{ nombre: "ACTH / Adenocorticotrofina", area: "Endocrinología", muestra: "Plasma (EDTA)", tubo: "Lila (EDTA)", toma: "Punción venosa (Mañana, antes de las 9 AM)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Inmediato", obs: "CRÍTICO: Usar tubo lila. Centrifugar inmediatamente después de la extracción y llevar directo al sector." },
{ nombre: "Hormona de Crecimiento / Somatotrofina (GH)", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Mañana, antes de las 9 AM)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Inmediato", obs: "Centrifugar inmediatamente después de obtenida la muestra." },
{ nombre: "Factor de Crecimiento Insulínico Tipo 1 (IGF-1)", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Mañana, antes de las 9 AM)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Refrigerar a 4°C hasta 24 hs o congelar." },
{ nombre: "Parathormona Intacta (PTHi)", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Mañana, antes de las 9 AM)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Inmediato", obs: "CRÍTICO: Centrifugar inmediatamente. Refrigerar hasta 48 hs o congelar." },
{ nombre: "Progesterona", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "FISIOLÓGICO: Si menstrual normalmente, recolectar entre los días 21 a 23 del ciclo. Preguntar y anotar FUM. Si no menstrúa, en cualquier día. Interfiere lipemia." },
{ nombre: "Prolactina", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (8:00 AM EXACTA / En reposo)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Especial", obs: "FISIOLÓGICO: Si menstrúa normalmente, recolectar entre días 3 a 5 del ciclo. Anotar FUM. Evitar estrés. Sin relaciones sexuales ni alcohol 48 hs antes. Consignar medicación." },
{ nombre: "Perfil Gonadotrófico: LH / FSH / Estradiol", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Mañana, antes de las 9 AM)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "FISIOLÓGICO: Recolectar entre los días 3 a 5 del ciclo menstrual. Preguntar y anotar FUM de forma obligatoria." },
{ nombre: "Andrógenos: Testosterona (Total/Bio/Libre) / DHEAS / Androstenediona", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Refrigerar hasta 48 hs o congelar." },
{ nombre: "Perfil Tiroideo: TSH / T3 / T4 / T4 Libre", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Mañana, antes de las 9 AM)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Consignar medicación (hormonas tiroideas). Refrigerar hasta 48 hs o congelar." },
{ nombre: "Hormonas y Vitaminas: HCG total / SHBG / Ac. Fólico / Vitamina B12 / Vitamina D / Ferritina / IgE / ATG / ATPO", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Refrigerar hasta 48 hs o congelar." },
{ nombre: "Insulina", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Refrigerar hasta 24 hs o congelar." },
{ nombre: "Péptido C", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Inmediato", obs: "Centrifugar inmediatamente el suero tras la retracción del coágulo y llevar directo al sector." },
{ nombre: "Tiroglobulina", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Refrigerar hasta 3 días. Interfiere la hemólisis de manera estricta." },
{ nombre: "Homocisteína", area: "Endocrinología", muestra: "Plasma con EDTA", tubo: "Lila (EDTA)", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Inmediato", obs: "CRÍTICO: Usar tubo lila. Centrifugar inmediatamente y separar. El plasma separado es estable hasta 14 días refrigerado." },
{ nombre: "Marcador Tumoral CA 19.9", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "No requiere", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Refrigerar hasta 48 hs o congelar." },
{ nombre: "Monitoreo Terapéutico: Vancomicina", area: "Endocrinología", muestra: "Suero o Plasma EDTA", tubo: "Rojo/Amarillo o Lila", toma: "Punción venosa", urgencia: "Media", ayuno: "No requiere", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "CRÍTICO: Consignar de forma obligatoria en la orden si la muestra se tomó en VALLE (justo antes de la dosis) o en PICO (post-infusión)." },
{ nombre: "Marcador Tumoral AFP (Alfa Feto Proteína)", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "No requiere", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Refrigerar hasta 3 días." },
{ nombre: "Marcador Tumoral CA 125", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "No requiere", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "CRÍTICO: No realizar la extracción si la paciente se encuentra menstruando." },
{ nombre: "Marcador Tumoral CA 15-3", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "No requiere", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Refrigerar hasta 5 días." },
{ nombre: "Marcador Tumoral CEA (Antígeno Carcinocembrionario)", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "No requiere", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Refrigerar hasta 7 días." },
{ nombre: "Deoxipiridinolina / Resorción Ósea (DPYR)", area: "Endocrinología", muestra: "Primer orina de la mañana o de 2 hs", tubo: "Frasco de Orina Limpio", toma: "Recolectar antes de las 10:00 AM", urgencia: "Baja", ayuno: "No requiere", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Pegar la etiqueta identificatoria directo en el cuerpo del frasco. Interfiere la bilirrubina y la hemólisis." },
{ nombre: "PSA / PSA Libre (Antígeno Prostático)", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "CRÍTICO PACIENTE: No tener relaciones sexuales 2 días antes. Esperar 3 semanas si se realizó ecografía transrectal, tacto rectal o uso de sonda. Sin diarrea/estreñimiento exagerado 1 semana antes. No ingerir alcohol la noche anterior. Sin ejercicio el día anterior. No extraer si cursa infección urinaria o fiebre." },
{ nombre: "Subunidad Beta de HCG Libre (Screening 1° Trimestre)", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Semanas 8 a 13)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Especial", obs: "Screening del primer trimestre (preferentemente semana 11 o 12). OBLIGATORIO: Consignar en el sistema Fecha de toma, FUM y semanas de embarazo exactas. Almacenar hasta 24 hs a 2-8°C, luego congelar a -20°C." },
{ nombre: "PAPP-A / Proteína Plasmática Asociada al Embarazo", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Semanas 8 a 13)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Especial", obs: "Screening del primer trimestre (preferentemente semana 11 o 12). OBLIGATORIO: Consignar en el sistema Fecha de toma, FUM y semanas de embarazo exactas. Almacenar hasta 24 hs a 2-8°C, luego congelar a -20°C." },
  // =========================================================================
// SECTOR PESQUISA NEONATAL
// =========================================================================
{ nombre: "17OH Progesterona Neonatal / Hiperplasia Suprarrenal (17OHPN)", area: "Pesquisa Neonatal", muestra: "Sangre seca en papel de filtro", tubo: "Tarjeta de Papel de Filtro", toma: "Punción del talón (Neonatal)", urgencia: "Alta", ayuno: "No aplica", centrifugar: "No", separar: "No", procesamiento: "Especial", obs: "CRÍTICO: El neonato debe tener 48 hs de vida cumplidas de forma estricta. Conservar a temperatura ambiente." },
{ nombre: "Biotinidasa (BIO)", area: "Pesquisa Neonatal", muestra: "Sangre seca en papel de filtro", tubo: "Tarjeta de Papel de Filtro", toma: "Punción del talón (Neonatal)", urgencia: "Alta", ayuno: "No aplica", centrifugar: "No", separar: "No", procesamiento: "Especial", obs: "CRÍTICO: El neonato debe tener 48 hs de vida cumplidas de forma estricta. Conservar a temperatura ambiente." },
{ nombre: "Fenilalanina / PKU / Fenilcetonuria (PKU)", area: "Pesquisa Neonatal", muestra: "Sangre seca en papel de filtro", tubo: "Tarjeta de Papel de Filtro", toma: "Punción del talón (Neonatal)", urgencia: "Alta", ayuno: "Requiere alimentación previa", centrifugar: "No", separar: "No", procesamiento: "Especial", obs: "CRÍTICO: El neonato debe tener 48 hs de vida cumplidas y haber recibido alimentación (lactancia/fórmula) para activar el metabolismo. Temp. ambiente." },
{ nombre: "Galactosemia (GAL)", area: "Pesquisa Neonatal", muestra: "Sangre seca en papel de filtro", tubo: "Tarjeta de Papel de Filtro", toma: "Punción del talón (Neonatal)", urgencia: "Alta", ayuno: "Requiere alimentación previa", centrifugar: "No", separar: "No", procesamiento: "Especial", obs: "CRÍTICO: El neonato debe tener 48 hs de vida cumplidas y haber recibido alimentación (lactancia/fórmula). Conservar a temperatura ambiente." },
{ nombre: "Carga Viral Hepatitis B (Plan Nacional)", area: "Pesquisa Neonatal", muestra: "Plasma con EDTA (Libre de RNasas/DNasas)", tubo: "Lila (EDTA) - ENVIAR 2 TUBOS DE 5ML", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Derivación (Malbrán)", obs: "CRÍTICO: Centrifugar dentro de las 2 hs de extracción de forma obligatoria. Enviar acompañado de la planilla específica del INSTITUTO MALBRÁN. Estabilidad: 24 hs a (8-25°C)." },
{ nombre: "Carga Viral Hepatitis C (Plan Nacional)", area: "Pesquisa Neonatal", muestra: "Plasma con EDTA (Libre de RNasas/DNasas)", tubo: "Lila (EDTA) - ENVIAR 1 TUBO DE 5ML", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Derivación (Malbrán)", obs: "CRÍTICO: Centrifugar dentro de las 2 hs de extracción de forma obligatoria. Enviar acompañado de la planilla específica del INSTITUTO MALBRÁN. Estabilidad: 24 hs a (8-25°C)." },
{ nombre: "Genotipificación de Hepatitis C (Plan Nacional)", area: "Pesquisa Neonatal", muestra: "Plasma con EDTA (Libre de RNasas/DNasas)", tubo: "Lila (EDTA) - ENVIAR 1 TUBO DE 5ML", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Derivación (Malbrán)", obs: "CRÍTICO: Centrifugar dentro de las 2 hs de extracción de forma obligatoria. Enviar acompañado de la planilla específica del INSTITUTO MALBRÁN. Estabilidad: 24 hs a (8-25°C)." },
{ nombre: "Chagas por PCR (Hijos de madres positivas)", area: "Pesquisa Neonatal", muestra: "Sangre entera con EDTA (1ml)", tubo: "Lila Pediatric / Microtainer EDTA", toma: "Punción venosa o talón", urgencia: "Alta", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Especial", obs: "Protocolo para hijos de madres positivas hasta los 10 meses de vida. Mantener a temperatura ambiente (refrigerar a 4°C únicamente durante el transporte)." },
{ nombre: "Tripsina Inmunoreactiva / Fibrosis Quística (TIR)", area: "Pesquisa Neonatal", muestra: "Sangre seca en papel de filtro", tubo: "Tarjeta de Papel de Filtro", toma: "Punción del talón (Neonatal)", urgencia: "Alta", ayuno: "No aplica", centrifugar: "No", separar: "No", procesamiento: "Especial", obs: "CRÍTICO: El neonato debe tener 48 hs de vida cumplidas de forma estricta. Conservar a temperatura ambiente." },
{ nombre: "TSH Neonatal / Hipotiroidismo Congénito (TSHN)", area: "Pesquisa Neonatal", muestra: "Sangre seca en papel filtro", tubo: "Tarjeta de Papel de Filtro", toma: "Punción del talón (Neonatal)", urgencia: "Alta", ayuno: "No aplica", centrifugar: "No", separar: "No", procesamiento: "Especial", obs: "CRÍTICO: El neonato debe tener 48 hs de vida cumplidas de forma estricta. Conservar a temperatura ambiente." },
{ nombre: "Fibrosis Quística - Mutación Delta F 508", area: "Pesquisa Neonatal", muestra: "Sangre entera (Filtro / EDTA) o Hisopado mucosa yugal", tubo: "Tarjeta / Lila (EDTA) / Tubo de Hisopado", toma: "Punción / Raspado de mucosa bucal", urgencia: "Baja", ayuno: "No requiere", centrifugar: "No", separar: "No", procesamiento: "Especial / Estudio Genético", obs: "Muestra aceptada en múltiples soportes: Sangre entera en papel de filtro, sangre entera con anticoagulante EDTA o hisopado de mucosa yugal (boca)." },
  // =========================================================================
// SECTOR AUTOINMUNIDAD
// =========================================================================
{ nombre: "ANA / Factor Antinúcleo (FAN)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Estabilidad: Procesar en el día a temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Anti DNA nativo / de doble cadena", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Estabilidad: Procesar en el día a temperatura ambiente o refrigerar a 4°C." },
{ nombre: "ANCA C / Anticuerpos anti-citoplasma de neutrófilos c", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Estabilidad: Procesar en el día a temperatura ambiente o refrigerar a 4°C." },
{ nombre: "ANCA P / Anticuerpos anti-citoplasma de neutrófilos p", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Estabilidad: Procesar en el día a temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Anti Endomisio IgA (ENDOA)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Marcador de Celiaquía. Procesar en el día o refrigerar a 4°C." },
{ nombre: "Anti Transglutaminasa IgA (TRAN_A_V)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Marcador de Celiaquía. Procesar en el día o refrigerar a 4°C." },
{ nombre: "Anti Péptido Deaminado de Gliadina IgG (DGPG)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Marcador de Celiaquía. Procesar en el día o refrigerar a 4°C." },
{ nombre: "AMA / Anticuerpos Anti-Mitocondriales / M2", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Asociado a Cirrosis Biliar Primaria. Procesar en el día o refrigerar a 4°C." },
{ nombre: "ASMA / Anticuerpos Anti-Músculo Liso (LISO)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Asociado a Hepatitis Autoinmune. Procesar en el día o refrigerar a 4°C." },
{ nombre: "Anti Jo-1 IgG (JO1 / JO)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Marcador de miositis. Procesar en el día o refrigerar a 4°C." },
{ nombre: "Anti CCP / Anticuerpo anti-péptido citrulinado cíclico (PEP / PCP)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Alta especificidad para Artritis Reumatoidea. Procesar en el día o refrigerar a 4°C." },
{ nombre: "Anti Sm IgG (SM)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Altamente específico para Lupus (LES). Procesar en el día o refrigerar a 4°C." },
{ nombre: "Anti Histonas IgG (HISTONAS / HISTO)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Asociado a Lupus inducido por drogas. Procesar en el día o refrigerar a 4°C." },
{ nombre: "Anti U1-smRNP IgG (RNP)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Marcador de Enfermedad Mixta del Tejido Conectivo. Procesar en el día o refrigerar." },
{ nombre: "APCA / Anticuerpo anti-célula parietal IgG", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Asociado a Anemia Perniciosa/Gastritis Atrófica. Procesar en el día o refrigerar." },
{ nombre: "Anti SCL-70 IgG (SCL70)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Asociado a Esclerodermia sistémica. Procesar en el día o refrigerar." },
{ nombre: "Anti SSa-La IgG (SSB)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Asociado a Síndrome de Sjögren. Procesar en el día o refrigerar." },
{ nombre: "Anti SSa-Ro IgG (SSA)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "No especifica", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Asociado a Síndrome de Sjögren y Lupus neonatal. Procesar en el día o refrigerar." },
{ nombre: "Anti Ribosomal P IgG (PO)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Asociado a Psicosis lúpica / LES activo. Procesar en el día o refrigerar." },
{ nombre: "Anti Membrana Basal Glomerular IgG (MBG)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Asociado a Síndrome de Goodpasture. Procesar en el día o refrigerar." },
{ nombre: "Anti Mieloperoxidasa / ANCA p específico (MPO)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Procesar en el día o refrigerar a 4°C." },
{ nombre: "Anti Proteinasa 3 / ANCA c específico (PR3)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Procesar en el día o refrigerar a 4°C." },
{ nombre: "Anticardiolipinas IgG (CARDIOGL)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Síndrome Antifosfolipídico (SAF). Procesar en el día o refrigerar." },
{ nombre: "Anticardiolipinas IgM (CARDIOML)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Síndrome Antifosfolipídico (SAF). Procesar en el día o refrigerar." },
{ nombre: "Anti Beta-2 Glicoproteína I IgG (B2GPG)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Síndrome Antifosfolipídico (SAF). Procesar en el día o refrigerar." },
{ nombre: "Anti Beta-2 Glicoproteína I IgM (B2GPM)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Síndrome Antifosfolipídico (SAF). Procesar en el día o refrigerar." },
{ nombre: "Anti Nucleosoma IgG (NUCLE)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Marcador predictivo de nefropatía lúpica. Procesar en el día o refrigerar." },
{ nombre: "Anti LKM1 / Microsomas de Hígado y Riñón tipo 1", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Asociado a Hepatitis Autoinmune tipo 2. Procesar en el día o refrigerar." },
{ nombre: "Anti SLA / Proteínas Solubles Hepáticas", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Asociado a Hepatitis Autoinmune. Procesar en el día o refrigerar." },
{ nombre: "Anti GP210 / Glicoproteína nuclear de membrana 210", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Especificidad para Cirrosis Biliar Primaria. Procesar en el día o refrigerar." },
{ nombre: "Anti SP-100 / Proteína nuclear SP100", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Asociado a Cirrosis Biliar Primaria. Procesar en el día o refrigerar." },
{ nombre: "Anti LC1 / Citosol Hepático tipo 1", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Marcador de Hepatitis Autoinmune tipo 2. Procesar en el día o refrigerar." },
{ nombre: "Anti Mi-2 / Dermatomiositis específica", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Altamente específico para Dermatomiositis. Procesar en el día o refrigerar." },
{ nombre: "Anti PL-12 / Alanil-tRNA Sintetasa", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Asociado a Síndrome Antisintetasa. Procesar en el día o refrigerar." },
{ nombre: "Anti PL-7 / Treonil-tRNA Sintetasa", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Asociado a Síndrome Antisintetasa. Procesar en el día o refrigerar." },
{ nombre: "Calprotectina en materia fecal (cpf)", area: "Autoinmunidad", muestra: "Materia fecal sin aditivos", tubo: "Frasco de Orina Estéril (Común)", toma: "Muestra espontánea de heces", urgencia: "Baja", ayuno: "No aplica", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "CRÍTICO MUESTRA: Entregar muestra en frasco limpio sin aditivos. Procesar en el día o mantener refrigerado." },
{ nombre: "Crioglobulinas / Protocolo Térmico (CRIOGLOB2)", area: "Autoinmunidad", muestra: "Suero (Protocolo Estricto 37°C)", tubo: "Rojo (Sin Gel Separador, precalentado)", toma: "Punción venosa con jeringa a 37°C", urgencia: "Alta", ayuno: "No especifica", centrifugar: "Sí", separar: "Sí", procesamiento: "Inmediato / Especial", obs: "CRÍTICO EXTRACCIÓN: Extraer con jeringa precalentada a 37°C. Colocar en tubo seco y mantener a 37°C de forma constante hasta su coagulación completa (ej: baño termostático, cuidando que todo el volumen quede rodeado por el agua). Centrifugar en centrífuga precalentada (operada previamente 20-30 min). Aspirar el suero con pipeta precalentada y pasar a tubo seco." },
  
  // =========================================================================
// SECTOR MICROBIOLOGÍA
// =========================================================================
{ nombre: "Urocultivo / Cultivo de Orina (URO)", area: "Microbiología", muestra: "Orina (Chorro Medio)", tubo: "Frasco Estéril", toma: "Higiene previa con agua y jabón, descartar primer chorro", urgencia: "Media", ayuno: "No requiere (Retención mínima 3-4 hs)", centrifugar: "No", separar: "No", procesamiento: "Dentro de las 2 hs", obs: "Hombre: retraer prepucio para higiene. Mujer: colocar tapón vaginal. Si demora >2 hs, refrigerar obligatoriamente a 4°C (puerta de heladera) rodeado de hielo. No congelar." },
{ nombre: "Exudado de Fauces / Cultivo faríngeo (FAU)", area: "Microbiología", muestra: "Secreción faríngea", tubo: "Hisopo seco con medio (Stuart/Amies)", toma: "Hisopado de fauces con bajalengua (En Laboratorio)", urgencia: "Media", ayuno: "8 hs (Sin higiene bucal, gárgaras, pastillas ni chicles)", centrifugar: "No", separar: "No", procesamiento: "12 hs", obs: "CRÍTICO: No estar tomando antibióticos (ATB). No usar antisépticos bucales antes de la toma." },
{ nombre: "Hemocultivo Manual / Automatizado (H1 / H2 / H3)", area: "Microbiología", muestra: "Sangre entera", tubo: "Frasco de hemocultivo específico (Adulto/Pediátrico)", toma: "Asepsia estricta con clorhexidina (Muestra de paciente internado)", urgencia: "Alta", ayuno: "No requiere", centrifugar: "No", separar: "No", procesamiento: "Inmediato", obs: "CRÍTICO: Mantener SIEMPRE a temperatura ambiente o en estufa a 35-37°C. NO REFRIGERAR JAMÁS (inactiva las bacterias)." },
{ nombre: "Coprocultivo / Leucocitos en Materia Fecal (COP)", area: "Microbiología", muestra: "Materia fecal diarreica", tubo: "Frasco Estéril", toma: "Muestra fresca espontánea (elegir zonas con moco o sangre)", urgencia: "Media", ayuno: "No requiere", centrifugar: "No", separar: "No", procesamiento: "Inmediato", obs: "No usar laxantes ni aceites. Conservar en heladera hasta su transporte inmediato." },
{ nombre: "Espermocultivo", area: "Microbiología", muestra: "Semen", tubo: "Frasco Estéril", toma: "Masturbación (previo lavado de manos y genitales)", urgencia: "Media", ayuno: "Abstinencia sexual de 3 a 5 días", centrifugar: "No", separar: "No", procesamiento: "Inmediato", obs: "CRÍTICO: Conservar a temperatura ambiente. Traer al laboratorio inmediatamente antes de que transcurra 1 hora de la eyaculación." },
{ nombre: "Exudado / Flujo Vaginal (EXVAG)", area: "Microbiología", muestra: "Secreción vaginal (Flujos)", tubo: "Hisopo (Muestra tomada en laboratorio)", toma: "Higiene externa únicamente. Concurrir entre días 11-25 del ciclo", urgencia: "Baja", ayuno: "No requiere", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "RESTRICCIONES: 48 hs antes: No tener relaciones sexuales, no colocarse óvulos, tabletas ni cremas vaginales. No realizar duchas vaginales. Conservar a temp. ambiente o estufa a 35°C." },
{ nombre: "Exudado Uretral (EXURE)", area: "Microbiología", muestra: "Secreción uretral o 1° chorro de orina", tubo: "Hisopo de secreción / Frasco estéril", toma: "Hisopado uretral. Si no hay secreción: recolectar el primer chorro de orina", urgencia: "Media", ayuno: "No requiere (Sin orinar por lo menos 2 hs antes)", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "CRÍTICO: No estar tomando antibióticos (ATB). Conservar y transportar calente (entre 35°C y 37°C)." },
{ nombre: "Hisopado Nasal (HISN)", area: "Microbiología", muestra: "Secreción nasal (Hisopado de las 2 narinas)", tubo: "Hisopo seco", toma: "Introducir el hisopo rotando en ambas fosas nasales", urgencia: "Media", ayuno: "No requiere", centrifugar: "No", separar: "No", procesamiento: "Inmediato", obs: "Conservar a temperatura ambiente. Traer inmediatamente al laboratorio." },
{ nombre: "Hisopado Rectal (HISR)", area: "Microbiología", muestra: "Materia fecal / Secreción rectal", tubo: "Hisopo con medio de transporte", toma: "Introducción rectal pasando el esfínter anal", urgencia: "Media", ayuno: "No requiere", centrifugar: "No", separar: "No", procesamiento: "Inmediato", obs: "Conservar en heladera. Traer inmediatamente al laboratorio." },
{ nombre: "Streptococcus beta hemolítico Grupo B - Screening Embarazadas (SGB)", area: "Microbiología", muestra: "Hisopado vaginal-anal", tubo: "Caldo Todd Hewitt / Medio de transporte", toma: "Hisopado doble (vagina y luego región anal)", urgencia: "Media", ayuno: "No requiere", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "CRÍTICO PACIENTE: No realizarse higiene genital en las 12 horas previas a la toma de la muestra. Mantener a temperatura ambiente." },
{ nombre: "Líquido Cefalorraquídeo Bacteriológico (LCR)", area: "Microbiología", muestra: "Líquido Cefalorraquídeo", tubo: "Tubo estéril de punción", toma: "Punción lumbar (Médica)", urgencia: "Alta", ayuno: "No aplica", centrifugar: "No", separar: "No", procesamiento: "Inmediato", obs: "URGENCIA BIOLÓGICA: Traer inmediatamente al laboratorio. Mantener a temperatura ambiente. NO REFRIGERAR (salvo sospecha viral o micótica específica)." },
{ nombre: "Líquidos Biológicos de Punción (PLE / ASCÍTICO / PERICARDIO / ARTICULAR)", area: "Microbiología", muestra: "Líquido Pleural, Ascítico, Pericárdico, Sinovial", tubo: "Jeringa o Frasco de Hemocultivo / Tubo estéril", toma: "Punción estéril ecoguíada (Médica)", urgencia: "Alta", ayuno: "No aplica", centrifugar: "No", separar: "No", procesamiento: "Inmediato", obs: "Traer inmediatamente. Conservar a temperatura ambiente." },
{ nombre: "Cultivos de Tejidos y Quirúrgicos (ÓSEO / MUSCULAR / BLANDAS / PLACENTA / VÁLVULAS)", area: "Microbiología", muestra: "Tejido, hueso, músculo, restos trofoblásticos, córnea", tubo: "Frasco estéril con solución fisiológica estéril (pocas gotas) o jeringa", toma: "Muestra quirúrgica o biopsia (Médica)", urgencia: "Alta", ayuno: "No aplica", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Mantener a temperatura ambiente para bacteriología. No dejar secar la muestra." },
{ nombre: "Punción Aspiración de Heridas / Abscesos / Celulitis / Pie Diabético (PAS)", area: "Microbiología", muestra: "Pus / Material aspirado profundo", tubo: "Jeringa tapada (sin aguja) o frasco estéril", toma: "Aspiración con aguja de bordes profundos de la lesión", urgencia: "Alta", ayuno: "No requiere", centrifugar: "No", separar: "No", procesamiento: "Inmediato", obs: "CRÍTICO: El hisopado superficial no sirve (se contamina con flora de piel). Conservar a temperatura ambiente y traer urgente." },
{ nombre: "Punta de Catéter / Marcapaso", area: "Microbiología", muestra: "Segmento de catéter distal (5 cm)", tubo: "Frasco Estéril Seco", toma: "Retiro aséptico de catéter y corte con tijera estéril", urgencia: "Media", ayuno: "No aplica", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Conservar a temperatura ambiente o heladera." },
{ nombre: "Secreciones Respiratorias / Esputo / BAL / Mini BAL (RES / BRO / TRA)", area: "Microbiología", muestra: "Esputo, Lavado Broncoalveolar, Aspirado Traqueal", tubo: "Frasco estéril de boca ancha", toma: "Expectoración profunda matutina (no saliva) o aspirado clínico", urgencia: "Media", ayuno: "Ayuno de 8 hs (Higiene bucal previa solo con agua)", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Conservar en heladera hasta su transporte inmediato al laboratorio." },
{ nombre: "Micosis Superficiales: Directo y Cultivo (SUPD / SUPC)", area: "Microbiología", muestra: "Piel, Uñas, Cuero cabelludo, Hisopados de mucosa", tubo: "Placas de Petri o frascos estériles secos / Hisopo seco", toma: "Raspado de escamas o detritus ungueal por personal entrenado", urgencia: "Baja", ayuno: "No requiere", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "PREPARACIÓN: Piel/Pelo: Lavar con jabón blanco, sin cremas ni talcos. Uñas: Cepillar 3 días antes, suspender cremas/talcos, sin esmalte. Concurrir con zapatos cerrados y medias. Suspender antifúngico local 1 semana y oral 1 mes antes." },
{ nombre: "Micosis Profundas: Directo y Cultivo (PRFD / PRFC)", area: "Microbiología", muestra: "Esputo, LBA, Aspirado, Biopsias, Líquidos, Hemocultivo x lisis", tubo: "Frasco estéril / Tubo de lisis centrifugación", toma: "Muestras clínicas profundas, respiratorias o quirúrgicas", urgencia: "Alta", ayuno: "Según tipo de muestra", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Investigación de hongos dimórficos o levaduras oportunistas. Conservar muestras respiratorias refrigeradas." },
{ nombre: "Tinta China (Tchina)", area: "Microbiología", muestra: "Líquido Cefalorraquídeo (LCR)", tubo: "Tubo estéril de punción", toma: "Punción lumbar (Médica)", urgencia: "Alta", ayuno: "No aplica", centrifugar: "No", separar: "No", procesamiento: "Inmediato", obs: "Búsqueda directa de Cryptococcus neoformans. Traer urgente. Conservar a temperatura ambiente." },
{ nombre: "Serología para Micosis Profundas (*mprof)", area: "Microbiología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Especial", obs: "Detección de anticuerpos contra Aspergillus, Histoplasma, Paracoccidioides. OBLIGATORIO: Solicitar y adjuntar planilla epidemiológica del sector." },
{ nombre: "Antígenos de Galactomananos (galacto)", area: "Microbiología", muestra: "Suero o LBA (Lavado Broncoalveolar)", tubo: "Rojo/Amarillo o Frasco Estéril", toma: "Punción venosa / Procedimiento médico", urgencia: "Alta", ayuno: "8 hs (para suero)", centrifugar: "Sí (Suero)", separar: "Sí (Suero)", procesamiento: "Especial", obs: "CRÍTICO: Pacientes neutropénicos febriles. Solo se recibe con la firma y autorización obligatoria del servicio de INFECTOLOGÍA." },
{ nombre: "Antigenuria de Histoplasma (aghisto)", area: "Microbiología", muestra: "Orina (Chorro Medio)", tubo: "Frasco Estéril", toma: "Primera orina de la mañana con 4 hs de retención mínima", urgencia: "Alta", ayuno: "No requiere", centrifugar: "No", separar: "No", procesamiento: "Especial", obs: "CRÍTICO: Enviar muestra refrigerada de forma inmediata. Solo se recibe con la firma y autorización obligatoria del servicio de INFECTOLOGÍA." },
{ nombre: "Antígeno de Cryptococcus (agcrypto)", area: "Microbiología", muestra: "Suero o LCR", tubo: "Rojo/Amarillo o Tubo Estéril", toma: "Punción venosa / Punción lumbar", urgencia: "Alta", ayuno: "8 hs (para suero)", centrifugar: "Sí (Suero)", separar: "Sí (Suero)", procesamiento: "Especial", obs: "CRÍTICO: Orientado a pacientes con VIH o inmunodeprimidos. Solo se recibe con la firma y autorización obligatoria del servicio de INFECTOLOGÍA." },
{ nombre: "Sensibilidad a Antifúngicos en Levaduras (ATF)", area: "Microbiología", muestra: "Cepas de levaduras aisladas (Candida spp.)", tubo: "Tubo con medio de cultivo de aislamiento", toma: "Derivación interna de colonia positiva", urgencia: "Baja", ayuno: "No aplica", centrifugar: "No", separar: "No", procesamiento: "Especial", obs: "Estudio de resistencia auxanográfica o automatizada sobre aislamientos microbiológicos previos." } // 
]; // 
  

// Inyectar el contenedor del pedido dinámicamente si no existe (Con diseño mejorado)
if (!document.getElementById('pedido-status')) {
    const pedidoHTML = `
        <div id="pedido-status" class="pedido-container">
            <span><i class="fas fa-clipboard-list"></i> Pedido: <strong id="contador-pedido">0</strong></span>
            <div>
                <button onclick="enviarWhatsApp()" class="btn-ws">
                    <i class="fab fa-whatsapp"></i> Enviar Indicaciones
                </button>
                <button onclick="vaciarPedido()" class="btn-clear">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>`;
    document.querySelector('.search-section').insertAdjacentHTML('beforebegin', pedidoHTML);
}

// 1. RENDERIZADO DE LA LISTA DE EXÁMENES (Estilo Tarjeta)
function render() {
    const list = document.getElementById("examList");
    const search = document.getElementById("searchInput").value.toLowerCase();
    const areaFilter = document.getElementById("areaSelect").value;
    list.innerHTML = "";

    if (search.trim() === "" && areaFilter === "") return;

    // Filtrado de determinaciones
    const filtered = determinaciones.filter(d => {
        const matchText = d.nombre.toLowerCase().includes(search);
        const matchArea = areaFilter === "" || d.area === areaFilter;
        return matchText && matchArea;
    });

    filtered.forEach(d => {
        const li = document.createElement("li");
        
        // Asignación automática de clases para los colores de tubos en base al texto
        let claseTubo = "color-rojo"; // Por defecto
        const tuboTexto = (d.tubo || "").toLowerCase();
        
        if (tuboTexto.includes("lila") || tuboTexto.includes("edta")) claseTubo = "color-lila";
        else if (tuboTexto.includes("celeste") || tuboTexto.includes("citrato 1:9")) claseTubo = "color-celeste";
        else if (tuboTexto.includes("negro") || tuboTexto.includes("citrato 1:4")) claseTubo = "color-negro";
        else if (tuboTexto.includes("verde") || tuboTexto.includes("heparina")) claseTubo = "color-verde";
        else if (tuboTexto.includes("frasco") || tuboTexto.includes("estéril") || tuboTexto.includes("materia")) claseTubo = "color-esteril";

        // Semaforización de Urgencias usando tus clases CSS
        const nivelUrgencia = d.urgencia ? d.urgencia.toLowerCase() : "baja";
        const claseUrgencia = `urgencia-${nivelUrgencia}`;

        // Construcción de la tarjeta de la lista alineada al nuevo CSS
        li.innerHTML = `
            <div class="wrapper-izquierdo">
                <span class="tubo-color ${claseTubo}"></span>
                <div>
                    <strong style="display: inline-block; margin-bottom: 2px;">${d.nombre}</strong>
                    <span class="badge ${claseUrgencia}">${d.urgencia || 'Rutina'}</span>
                    <br><small style="color: #64748b; font-weight: 500;"><i class="fas fa-tags" style="font-size:0.75rem;"></i> ${d.area}</small>
                </div>
            </div>
            <i class="fas fa-chevron-right" style="color: #cbd5e1; font-size: 0.9rem;"></i>
        `;
        
        li.onclick = () => mostrarDetalle(d);
        list.appendChild(li);
    });
}

// 2. DETALLE DEL MODAL PREMIUM CON SISTEMA DE PESTAÑAS INTERACTIVAS
function mostrarDetalle(d) {
    const modal = document.getElementById("modal");
    const modalData = document.getElementById("modalData");
    
    const centrifugado = d.centrifugar ? d.centrifugar : "No requiere / No especifica";
    const separacion = d.separar ? d.separar : "No requiere / No especifica";

    // Detectar color de tubo para la cabecera
    let claseTuboModal = "color-rojo";
    const tTexto = (d.tubo || "").toLowerCase();
    if (tTexto.includes("lila") || tTexto.includes("edta")) claseTuboModal = "color-lila";
    else if (tTexto.includes("celeste")) claseTuboModal = "color-celeste";
    else if (tTexto.includes("negro")) claseTuboModal = "color-negro";
    else if (tTexto.includes("verde")) claseTuboModal = "color-verde";
    else if (tTexto.includes("frasco") || tTexto.includes("estéril") || tTexto.includes("materia")) claseTuboModal = "color-esteril";

    modalData.innerHTML = `
        <div class="modal-header-analisis" style="margin-bottom: 12px;">
            <h2 class="modal-title">${d.nombre}</h2>
            <div style="display: flex; gap: 12px; align-items: center; margin-top: 6px; flex-wrap: wrap;">
                <span class="modal-sector">${d.area}</span>
                <span style="font-size: 0.85rem; font-weight: 700; color: #475569; display: inline-flex; align-items: center;">
                    <span class="tubo-color ${claseTuboModal}" style="margin-right: 6px;"></span> 
                    ${d.tubo}
                </span>
            </div>
        </div>

        <div class="modal-tabs">
            <button class="tab-btn active tab-paciente" onclick="cambiarPestaña('paciente')">
                <i class="fas fa-user"></i> Paciente
            </button>
            <button class="tab-btn tab-tecnico" onclick="cambiarPestaña('tecnico')">
                <i class="fas fa-flask"></i> Técnico
            </button>
        </div>

        <div id="tab-paciente-content" class="tab-content active">
            <div class="seccion-modal-paciente" style="margin-bottom: 16px;">
                <h3 class="modal-subtitulo paciente" style="margin-bottom: 8px;"><i class="fas fa-user-check"></i> Preparación y Ayuno</h3>
                <p class="modal-texto">
                    <strong>Ayuno requerido:</strong> ${d.ayuno || "No requiere ayuno."}<br><br>
                    ${d.prepPaciente || `${d.toma} ${d.ayuno || ''}`}
                </p>
            </div>
        </div>

        <div id="tab-tecnico-content" class="tab-content">
            <div class="seccion-modal-tecnico" style="margin-bottom: 16px;">
                <h3 class="modal-subtitulo tecnico" style="margin-bottom: 8px;"><i class="fas fa-vial"></i> Control de Procesamiento</h3>
                <p class="modal-texto">
                    <strong>Muestra biológica:</strong> ${d.muestra}<br>
                    <strong>Centrifugar:</strong> ${centrifugado}<br>
                    <strong>Separar suero/plasma:</strong> ${separacion}<br>
                    <strong>Estabilidad / Conservación:</strong> ${d.procesamiento || "No especifica."}
                </p>
                
                ${d.obsTecnicas || d.obs ? `
                    <div class="alerta-tecnica" style="margin-top: 12px; background-color: #fffbeb; border: 1px solid #fef3c7; color: #92400e; font-size: 0.8rem; padding: 10px; border-radius: 8px;">
                        <i class="fas fa-exclamation-triangle"></i> <strong>Manejo de Mesada:</strong> ${d.obsTecnicas || d.obs}
                    </div>
                ` : ''}
            </div>
        </div>

        <button onclick='agregarAlPedido(${JSON.stringify(d).replace(/"/g, '&quot;')})' class="btn-whatsapp-premium" style="background-color: var(--primary); box-shadow: 0 4px 12px rgba(2, 132, 199, 0.2);">
            <i class="fas fa-plus"></i> Añadir a la Orden de WhatsApp
        </button>
    `;
    
    modal.style.display = "flex";
}

// FUNCIÓN AUXILIAR INTERACTIVA PARA INTERCAMBIAR LAS PESTAÑAS
function cambiarPestaña(tipo) {
    const btnPaciente = document.querySelector('.tab-btn.tab-paciente');
    const btnTecnico = document.querySelector('.tab-btn.tab-tecnico');
    const contentPaciente = document.getElementById('tab-paciente-content');
    const contentTecnico = document.getElementById('tab-tecnico-content');

    if (tipo === 'paciente') {
        btnPaciente.classList.add('active');
        contentPaciente.classList.add('active');
        btnTecnico.classList.remove('active');
        contentTecnico.classList.remove('active');
    } else {
        btnTecnico.classList.add('active');
        contentTecnico.classList.add('active');
        btnPaciente.classList.remove('active');
        contentPaciente.classList.remove('active');
    }
}

// 3. LOGICA DEL COMPORTAMIENTO DEL PEDIDO, WHATSAPP Y TXT
function agregarAlPedido(estudio) {
    if (!pedidoActual.some(e => e.nombre === estudio.nombre)) {
        pedidoActual.push(estudio);
        actualizarInterfaz();
    }
    cerrarModal();
}

function actualizarInterfaz() {
    const status = document.getElementById("pedido-status");
    document.getElementById("contador-pedido").innerText = pedidoActual.length;
    status.style.display = pedidoActual.length > 0 ? "flex" : "none";
}

function vaciarPedido() { 
    pedidoActual = []; 
    actualizarInterfaz(); 
}

function enviarWhatsApp() {
    if (pedidoActual.length === 0) return;

    let mensaje = "*GUÍALAB - INDICACIONES PARA TUS ESTUDIOS* 🔬\n";
    mensaje += "========================================\n\n";
    mensaje += "Hola, para garantizar la validez de los resultados de tus análisis clínicos, por favor seguí minuciosamente estas instrucciones previas:\n\n";

    pedidoActual.forEach((est, index) => {
        mensaje += `📌 *${est.nombre.toUpperCase()}*\n`;
        
        if (est.prepPaciente) {
            mensaje += `• *Preparación:* ${est.prepPaciente}\n`;
            if (est.ayuno && est.ayuno.toLowerCase() !== "no requiere") {
                mensaje += `• *Ayuno:* ${est.ayuno}\n`;
            }
        } else {
            mensaje += `• *Preparación:* ${est.toma} ${est.ayuno || ''}\n`;
            if (est.obs) mensaje += `• *Nota Importante:* ${est.obs}\n`;
        }
        
        mensaje += "----------------------------------------\n";
    });

    mensaje += "\n📍 *Posadas, Misiones*\n";
    mensaje += "_Recordá presentarte en el horario de extracción asignado con tu DNI y la Orden Médica correspondiente._";

    const textoCodificado = encodeURIComponent(mensaje);
    window.open(`https://wa.me/?text=${textoCodificado}`, '_blank');
}

// NUEVA FUNCIÓN: Generación Dinámica y Descarga de Archivo TXT
function descargarTXT() {
    if (pedidoActual.length === 0) return;

    let texto = "========================================\n";
    texto += "   GUÍALAB - INDICACIONES DE LABORATORIO\n";
    texto += "========================================\n\n";
    texto += "Hola, para garantizar la validez de los resultados de tus análisis clínicos, por favor seguí minuciosamente estas instrucciones previas:\n\n";

    pedidoActual.forEach((est, index) => {
        texto += `📌 [${index + 1}] ${est.nombre.toUpperCase()}\n`;
        
        if (est.prepPaciente) {
            texto += `   • Preparación: ${est.prepPaciente}\n`;
            if (est.ayuno && est.ayuno.toLowerCase() !== "no requiere") {
                texto += `   • Ayuno: ${est.ayuno}\n`;
            }
        } else {
            texto += `   • Preparación: ${est.toma} ${est.ayuno || ''}\n`;
            if (est.obs) texto += `   • Nota Importante: ${est.obs}\n`;
        }
        
        texto += "----------------------------------------\n";
    });

    texto += "\n📍 Posadas, Misiones\n";
    texto += "Recordá presentarte en el horario de extracción asignado con tu DNI y la Orden Médica correspondiente.";

    // Conversión de datos planos a objeto Blob descargable
    const blob = new Blob([texto], { type: "text/plain;charset=utf-8" });
    
    // Disparador invisible de descarga en el navegador
    const enlace = document.createElement("a");
    enlace.href = URL.createObjectURL(blob);
    enlace.download = `indicaciones-laboratorio.txt`;
    
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
}

// 4. CONTROLADORES DE CIERRE DEL MODAL
function cerrarModal() { 
    document.getElementById("modal").style.display = "none"; 
}

document.getElementById("closeModal").onclick = cerrarModal;
window.onclick = (e) => { 
    if (e.target == document.getElementById("modal")) cerrarModal(); 
};

// Event Listeners vinculados
document.getElementById("searchInput").addEventListener("input", render);
document.getElementById("areaSelect").addEventListener("change", render);
