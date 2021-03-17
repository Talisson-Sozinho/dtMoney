import logoSVG from "../../assets/Logo.svg"
import { Container, Content } from "./styles"

export function Header(){
  return(
    <Container>
      <Content>
        <img src={ logoSVG } alt="Logo dtmoney"/>
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  )
}