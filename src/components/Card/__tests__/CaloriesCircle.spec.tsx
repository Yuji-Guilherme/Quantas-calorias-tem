import { render, screen } from '@testing-library/react';

import { CaloriesCircle } from '@/components/Card/CaloriesCircle';

const caloriesCircleProps = {
  first: { text: 'test1', width: 1, color: 'blue' },
  second: { text: 'test2', width: 2, color: 'red' },
  third: { text: 'test3', width: 3, color: 'black' }
};

describe('<CaloriesCircle>', () => {
  it('should component elements is visible', () => {
    render(<CaloriesCircle circleProps={caloriesCircleProps} />);

    const svgElement = screen.getByRole('cal-circle-svg');
    const firstCircleElement = screen.getByRole('cal-circle-1');
    const secondCircleElement = screen.getByRole('cal-circle-2');
    const thirdCircleElement = screen.getByRole('cal-circle-3');

    expect(svgElement).toBeVisible();
    expect(firstCircleElement).toBeVisible();
    expect(secondCircleElement).toBeVisible();
    expect(thirdCircleElement).toBeVisible();
    expect(svgElement).toContainElement(firstCircleElement);
    expect(svgElement).toContainElement(secondCircleElement);
    expect(svgElement).toContainElement(thirdCircleElement);
  });

  it('should component elements have correct classes and styles', () => {
    render(<CaloriesCircle circleProps={caloriesCircleProps} />);

    const svgElement = screen.getByRole('cal-circle-svg');
    const firstCircleElement = screen.getByRole('cal-circle-1');
    const secondCircleElement = screen.getByRole('cal-circle-2');
    const thirdCircleElement = screen.getByRole('cal-circle-3');

    expect(svgElement).toHaveClass(
      'w-40 h-28 md:w-32 md:h-24 md:mt-1 sm:w-32 sm:h-24 sm:mt-[7px]'
    );
    expect(svgElement).toHaveStyle({ transform: 'scaleX(-1) rotate(180deg)' });
    expect(firstCircleElement).toHaveStyle({
      //   fill: 'none',
      stroke: caloriesCircleProps.first.color,
      strokeWidth: '2',
      strokeDasharray: '124',
      strokeDashoffset: caloriesCircleProps.first.width,
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    });
    expect(secondCircleElement).toHaveStyle({
      fill: 'none',
      stroke: caloriesCircleProps.second.color,
      strokeWidth: '2',
      strokeDasharray: '124',
      strokeDashoffset: caloriesCircleProps.second.width,
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    });
    expect(thirdCircleElement).toHaveStyle({
      fill: 'none',
      stroke: caloriesCircleProps.third.color,
      strokeWidth: '2',
      strokeDasharray: '124',
      strokeDashoffset: '62',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    });
  });

  it('should not render first circle element if first width no exist', () => {
    render(
      <CaloriesCircle
        circleProps={{
          ...caloriesCircleProps,
          first: { text: 'test1', width: 0, color: 'blue' }
        }}
      />
    );

    expect(screen.queryByRole('cal-circle-1')).not.toBeInTheDocument();
  });

  it('should not render second circle element if second width no exist', () => {
    render(
      <CaloriesCircle
        circleProps={{
          ...caloriesCircleProps,
          second: { text: 'test2', width: 0, color: 'red' }
        }}
      />
    );

    expect(screen.queryByRole('cal-circle-2')).not.toBeInTheDocument();
  });
});
