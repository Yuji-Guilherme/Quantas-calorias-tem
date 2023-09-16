import { Card } from '@/components/Card';
import { useFoodStore } from '@/store/food';

function CardStack() {
  const {
    state: { foods }
  } = useFoodStore();

  return (
    <ul
      role="card-stack-list"
      className="w-[900px] mt-20 mb-10 mx-auto md:w-11/12 md:max-w-[820px] md:mt-16 sm:w-[302px] sm:mt-10 sm:mb-10"
    >
      {foods?.map((food) => <Card {...food} key={food._id} />)}
    </ul>
  );
}

export { CardStack };
