import '../css/componentes.css';


export const saludar = (nombre) => {
    console.log('creando etiqueta H1, en el html');

    const h1 = document.createElement('h1');
    h1.innerHTML = `Hola ${nombre}`;

    document.body.append(h1);
}
