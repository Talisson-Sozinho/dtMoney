import { Container } from "./styles";
import entradaSVG from "../../assets/Entradas.svg";
import saidaSVG from "../../assets/Saidas.svg";
import totalSVG from "../../assets/Total.svg"

export function Summary(){
  return(
    <Container>
      <div>
        <header>
          <h2>Entradas</h2>
          <img src={entradaSVG} alt="Entradas" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>

      <div>
        <header>
          <h2>Saídas</h2>
          <img src={saidaSVG} alt="Entradas" />
        </header>
        <strong>-R$ 500,00</strong>
      </div>

      <div  className="highlight-background">
        <header>
          <h2>Total</h2>
          <img src={totalSVG} alt="Entradas" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
    </Container>
  );
}