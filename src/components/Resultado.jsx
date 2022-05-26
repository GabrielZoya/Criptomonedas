import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
`;

const Texto = styled.p``;

const Precio = styled.p``;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Contenedor>
      {/* <Imagen 
                src={`https://cryptocompare.com/${IMAGEURL}`} 
                alt="imagen cripto" 
            /> */}
      <div>
        <Precio>
          El Precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          Precio más alto del día: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          Precio más bajo del día: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Última Actualización: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  );
};

export default Resultado;
