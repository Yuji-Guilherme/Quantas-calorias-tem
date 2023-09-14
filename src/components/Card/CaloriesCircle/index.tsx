import { MacroInPercentObject } from '@/components/Card/types';

import { ComponentProps } from 'react';

type CaloriesCircleProps = {
  circleProps: {
    first: MacroInPercentObject;
    second: MacroInPercentObject;
    third: MacroInPercentObject;
  };
} & ComponentProps<'li'>;

function CaloriesCircle({ circleProps }: CaloriesCircleProps) {
  const { first, second, third } = circleProps;
  return (
    <svg
      viewBox="-8 0 56 41"
      version="1.1"
      id="svg1"
      style={{
        transform: 'scaleX(-1) rotate(180deg)'
      }}
      className="w-40 h-28 md:w-32 md:h-24 md:mt-1 sm:w-32 sm:h-24 sm:mt-[7px]"
      role="cal-circle-svg"
    >
      <g id="layer1" transform="translate(-83.126863,-72.639906)">
        <circle
          style={{
            fill: 'none',
            stroke: third.color,
            strokeWidth: '2',
            strokeDasharray: '124',
            strokeDashoffset: '62',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            paintOrder: 'markers stroke fill'
          }}
          role="cal-circle-3"
          id="path1"
          cx="103.12686"
          cy="92.639908"
          r="20"
        />
        {second.width && (
          <circle
            style={{
              fill: 'none',
              stroke: second.color,
              strokeWidth: '2',
              strokeDasharray: '124',
              strokeDashoffset: second.width,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              paintOrder: 'markers stroke fill'
            }}
            role="cal-circle-2"
            id="path2"
            cx="103.12686"
            cy="92.639908"
            r="20"
          />
        )}
        {first.width && (
          <circle
            style={{
              fill: 'none',
              stroke: first.color,
              strokeWidth: '2',
              strokeDasharray: '124',
              strokeDashoffset: first.width,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              paintOrder: 'markers stroke fill'
            }}
            role="cal-circle-1"
            id="path3"
            cx="103.12686"
            cy="92.639908"
            r="20"
          />
        )}
      </g>
    </svg>
  );
}

export { CaloriesCircle };
