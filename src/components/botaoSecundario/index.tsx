import { Container } from "./styles";

type botaoPrimarioProps = {
  title: string;
  icon?: any;
};

const botaoPrimario = ({ title, icon }: botaoPrimarioProps) => {
  return (
    <>
      <Container>
        {icon}
        {title}
      </Container>
    </>
  );
};

export default botaoPrimario;
