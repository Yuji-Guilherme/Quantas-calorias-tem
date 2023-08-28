import { Card } from '@/components/Card';
import { useFoodStore } from '@/store/food';

function CardStack() {
  const {
    state: { foods }
  } = useFoodStore();

  return (
    <ul className="mt-20 mb-10 mx-auto w-[900px]">
      {foods?.map((food) => <Card {...food} key={food._id} />)}
    </ul>
  );
}

export { CardStack };
