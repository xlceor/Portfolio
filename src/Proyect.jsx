
// { img, Name, description, technologies, gitlink, weblink}
const Proyect = ({img, }) => {
    return (
        <div className="w-full h-96 bg-gray-700 flex rounded-lg">
            <img src={img} alt="" className="w-1/2 p-2 rounded-3xl h-full" />
            <div className="flex flex-col w-3/4 h-full p-2 px-10  justify-around items-center">
                <h4 className="text-gray-300">App Web</h4>
                <h3 className=" text-white font-bold text-4xl">ConIA</h3>
                <p className=" text-justify ">Conia es una app web diseñada para la gestion de proyectos escolares con la ayuda de la Inteligencia Artificial. Dentro, se pueden crear proyectos con tareas propias, asignar miembros y preguntarle a una IA con los datos del proyecto. Usa una auntenticacion OAuth2.0 y es conectada a una base de datos en Firebase dode se guardan los datos de cada proyecto.</p>
                <button className=" bg-sky-500 p-3 mb-1 rounded-full w-2/3">Ir a la App</button>
                <button className=" bg-gray-900 p-3 rounded-full w-2/3">Ir al Codigo</button>

            </div>
        </div>
    )
}

export default Proyect;