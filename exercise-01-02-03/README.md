### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

------------
Crea dos componentes. Cada uno de estos componentes tendrá sus propias características.

Componente A: Este componente va a tener un contacto(crea una clase para ello), con las siguientes características:
    - Nombre: que será un String.
    - Apellido: también un String.
    - Email: de nuevo un String.
    - Conectado: será un booleano que nos indicará si la persona está conectada o no.

Componente B: Por otro lado, tenemos el componente B que va a recibir por props un contacto y va a poder cambiar su estado de conectado a desconectado y viceversa.
    Si el contacto está conectado, se debe mostrar: Contacto En Línea
    Si el contacto no está conectado, se debe mostrar: Contacto No Disponible

Renderizado de componentes en la solución:
    - El Componente A debe ser renderizado dentro del componenet App.js del proyecto.
    - El Componente B debe ser renderizado desde el componte A y recibir los props adecuadamente

Recordatorio: Haz uso de Proptypes adecuadamente