import { Card } from '@/components/Card';
import { useFoodStore } from '@/store/food';

function CardStack() {
  const {
    state: { foods }
  } = useFoodStore();

  return (
    <ul className="w-[900px] mt-20 mb-10 mx-auto md:w-[820px] md:mt-16 ">
      {foods?.map((food) => <Card {...food} key={food._id} />)}
    </ul>
  );
}

export { CardStack };
