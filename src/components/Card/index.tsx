import { useCard } from './hook';

function Card() {
  const { foods } = useCard();

  return (
    <ul>
      {foods?.map((food, index) => <li key={index}>{food.description}</li>)}
    </ul>
  );
}

export { Card };
