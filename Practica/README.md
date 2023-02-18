Descripción del proyecto
El objetivo del proyecto consiste en entrar en la página de iberia y rellenar el formulario de vuelo.
El origen y destino se elige de forma aleatoria entre 2 listas de ciudades.
En cuanto a la fecha de ida y de vuelta, siempre selecciono el mes siguiente al actual y elijo el primer día, así me aseguro de que está disponible el día de ida,
en cuanto a la vuelta, a partir de la fecha de ida le sumo 7 días y lo introduzco de forma manual.
El tipo de tarifa se selecciona de forma aleatoria cada vez que se realiza el test.
Por último, siempre selecciono el checkbox de pagar los avíos para comprobar que funciona correctamente.

Requisitos previos
Se necesitará tener instalado Node.js y npx

Instrucciones de instalación
Se necesitará hacer npm install para poder tener la carpeta node_modules.
Una vez tengamos la carpeta node_modules con el comando npx cypress open podremos iniciar la herramienta.

Ejecución de pruebas
Al iniciar la herramienta de cypress eligiremos E2E Testing.
Se recomienda usar Chrome como browser para ejecutar las pruebas, ya que da menos problemas que electron por ejemplo, aunque el test pasa con éxito en ambos.
Una vez elegido el browser se nos abrira una pestaña donde aparecerán todos los tests del proyecto, que en este caso solo es uno, para poder iniciar el test solo tendremos que hacer 
click en el archivo llamado iberia.spec.cy.js