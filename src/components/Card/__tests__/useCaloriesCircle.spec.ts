import { useCaloriesCircle } from '@/components/Card/hook';

describe('use calories circle', () => {
  it('should return circleSizesAndColors correct', () => {
    const mockMacroPercentageObject = {
      carb: { text: '70', width: 70, color: 'blue' },
      fat: { text: '20', width: 20, color: 'red' },
      protein: { text: '10', width: 10, color: 'black' }
    };

    const result = useCaloriesCircle(mockMacroPercentageObject);

    expect(result).toStrictEqual({
      circleSizesAndColors: {
        first: { ...mockMacroPercentageObject.protein, width: 118 },
        second: { ...mockMacroPercentageObject.fat, width: 105 },
        third: mockMacroPercentageObject.carb
      }
    });
  });

  it('should return circleTwoSizeEmpty correct', () => {
    const mockMacroPercentageObject = {
      carb: { text: '100', width: 100, color: 'blue' },
      fat: { text: '0', width: 0, color: 'red' },
      protein: { text: '0', width: 0, color: 'black' }
    };

    const result = useCaloriesCircle({
      ...mockMacroPercentageObject
    });

    expect(result).toStrictEqual({
      circleTwoSizeEmpty: {
        first: { ...mockMacroPercentageObject.fat, width: 0 },
        second: { ...mockMacroPercentageObject.protein, width: 0 },
        third: mockMacroPercentageObject.carb
      }
    });
  });

  it('should return circleOneSizeEmpty correct', () => {
    const mockMacroPercentageObject = {
      carb: { text: '70', width: 70, color: 'blue' },
      fat: { text: '0', width: 0, color: 'red' },
      protein: { text: '30', width: 30, color: 'black' }
    };

    const result = useCaloriesCircle({
      ...mockMacroPercentageObject
    });

    expect(result).toStrictEqual({
      circleOneSizeEmpty: {
        first: { ...mockMacroPercentageObject.fat, width: 0 },
        second: { ...mockMacroPercentageObject.protein, width: 106 },
        third: mockMacroPercentageObject.carb
      }
    });
  });
});
