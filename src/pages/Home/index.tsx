import React, { useState } from 'react';
import { Container, Hello } from './style';

const Home: React.FC = () => {
  const [itemA, setItemA] = useState('0');
  const [itemB, setItemB] = useState('0');

  function Sum(a: number, b: number) {
    let result = a + b;
    return result;
  }
  return (
    <Container>
      <Hello>Hello World</Hello>
      <Hello>
        <input
          type='text'
          className='a'
          value={itemA}
          onChange={(event) => {
            setItemA(event.target.value);
          }}
        />{' '}
        +{' '}
        <input
          type='text'
          className='b'
          value={itemB}
          onChange={(event) => {
            setItemB(event.target.value);
          }}
        />
      </Hello>

      <Hello>Resultado: {Sum(Number(itemA), Number(itemB))}</Hello>
    </Container>
  );
};

export default Home;
