# Challenge tuGerente

Desarrollar usando reactjs un componente de tipo dropdown (o combobox)

- Al desplegarlo consultará a un servicio de firebase buscando coincidencias según el texto escrito (o sin filtro, en caso de que no se haya escrito texto).
- El modelo en firebase consistirá de los siguientes atributos:
1. nombre
2. razón social
3. nit
4. teléfono
5. código
- Debe solicitar resultados paginados de 20 en 20, y solo deberá traer la siguiente página cuando se esté scrolleando cerca al final de la lista actual de resultados.
- Debe permitir parametrizar por qué atributo del objeto se buscará. La parametrización se debe hacer por código, no en tiempo de ejecución
- El primer resultado del dropdown debe ser una opción fija que al darle click levante un pequeño pop-up, parte del componente, que permita agregar un nuevo objeto con el texto ya ingresado, pero permitiendo editarlo antes de guardar también.
- El proyecto debe correrse en un contenedor de docker
- Adjuntar también dentro del repositorio, capturas de pantalla de la solución funcionando

## Avance a las 48 hrs

1. Creación de modelo de firebase con los atributos solicitados
2. Configuración de firebase y firestore en React
3. Paginado de 20 elementos, al llegar al final de la página se solicita los siguientes 20 elementos, así sucesivamente hasta recibir toda la información
4. App de React Dockerizada en contenedor usando docker-compose.yml

A continuación se muestra evidencia de avance.

<div align="center">
  <img alt="Logo" src="https://res.cloudinary.com/djbiam1gm/image/upload/v1660514376/Portfolio/gif_mini_gisnzl.gif" />
  
</div>

