import PropTypes from "prop-types";
const Card = ({name, birthday}) => {
    const date = new Date(birthday)
    let diaSemana;
    let mes;
    let ano;
    const dateSis = new Date();
    if(date.getDate() <= dateSis.getDate() && date.getMonth() <= dateSis.getMonth()){
        ano = dateSis.getFullYear() - date.getFullYear();
    }else if(date.getMonth() < dateSis.getMonth()){
        ano = dateSis.getFullYear() - date.getFullYear();
    }else
    ano = (dateSis.getFullYear() - date.getFullYear()) - 1;
    switch(date.getDay()){
        case 1: diaSemana = "Lunes";
        break;
        case 2: diaSemana = "Martes";
        break;
        case 3: diaSemana = "Miércoles";
        break;
        case 4: diaSemana = "Jueves";
        break;
        case 5: diaSemana = "Viernes";
        break;
        case 6: diaSemana = "Sabado";
        break;
        case 0: diaSemana = "Domingo";
        break
    };
    switch(date.getMonth()){
        case 0: mes = "Enero";
        break;
        case 1: mes = "Feberero";
        break;
        case 2: mes = "Marzo";
        break;
        case 3: mes = "Abril";
        break
        case 4: mes = "Mayo";
        break;
        case 5: mes = "Junio";
        break;
        case 6: mes = "Julio";
        break;
        case 7: mes = "Agosto";
        break;
        case 8: mes = "Septiembre";
        break;
        case 9: mes ="Octubre";
        break;
        case 10: mes ="Noviembre";
        break;
        case 11: mes = "Diciembre";
        break;
    };
    return (
        <>
        <div className="CajaPadre">
            <div className="Caja">
                <p className="Titulo">Información</p>
                <p><b>Nombre: </b> {name}</p>
                <p><b>Fecha de nacimiento: </b> {date.toLocaleDateString()}</p>
                <p><b>Día: </b>{diaSemana + ', ' + date.getDate() + ' de ' + mes}</p>
                <p><b>Edad: </b>{ano}<b> años</b></p>
            </div>
        </div>
        </>
    );
};
Card.propTypes = {
    name: PropTypes.string.isRequired,
    birthday: PropTypes.string
}
export default Card;