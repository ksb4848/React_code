import './App.css';
import styled from 'styled-components';
import Writelist from './components/Todolist/Writelist/Writelist'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <S.Wrapper>
        <Writelist/>
      </S.Wrapper>
    </div>
  );
}

const Wrapper = styled.div` 
  width: 100vw;
  // height:100vh;
`;

const S = {
  Wrapper
}

export default App;
