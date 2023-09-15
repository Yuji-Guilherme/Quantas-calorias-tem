import { compareWidthInObj } from '@/functions/compareWidthInObj';

const object1 = { text: 'test1', width: 10, color: 'black' };
const object2 = { text: 'test2', width: 2, color: 'white' };
const object3 = { text: 'test2', width: 5, color: 'red' };

describe('compare width in object', () => {
  it('should fn working correct', () => {
    const objectArray = [object1, object2, object3];

    const resultArray = compareWidthInObj(objectArray);

    expect(resultArray).toStrictEqual([object2, object3, object1]);
  });
});
