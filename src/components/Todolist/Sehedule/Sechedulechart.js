import { styled } from "styled-components";
import Chart from "./Circlechart"
import { useSelector } from 'react-redux';

function Sehedulemain() {

  // const dateNow = new Date();
  // const today = dateNow.toISOString().slice(0, 10);
  // const [saleStartDate, setSaleStartDate] = useState(today);
  const listData = useSelector( (state) => state);

  return(
    <L.Wrapper>
      <h1>Todo Sehedule</h1>
      <Chart listData={listData} />
    </L.Wrapper>
  );
}

export default Sehedulemain;

const Wrapper = styled.div`
  width: 40%;
  padding: 2%;
  border-right: 1px solid rgb(51, 51, 51, .2);
  font-weight: 800;
  font-size: calc(10px + 1.2vmin);

  h1 {padding: 4%;}
  @media (max-width: 900px) {
    width: 100vw;
    height: 40vh;
    overflow: hidden;
    padding: 10px;
    border: 0;

    h1 {padding: 1%;}
  }
`

const L = {
  Wrapper,
}