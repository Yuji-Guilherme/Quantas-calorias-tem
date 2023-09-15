import { MacroInPercentObject } from '@/components/Card/types';

import { ComponentProps } from 'react';

type MacroPercentageProps = {
  number: number;
  type: 'carb' | 'fat' | 'protein';
  macro: MacroInPercentObject;
} & ComponentProps<'div'>;

function MacroPercentage({
  number,
  type,
  macro,
  ...props
}: MacroPercentageProps) {
  const component = {
    carb: 'carboidrato',
    fat: 'gordura',
    protein: 'proteína'
  };

  return (
    <div role="macro-percent-container" {...props}>
      <p className="card_info_number">{`${number}g`}</p>
      <p className="card_info_desc">
        {component[type]}
        {number > 1 && 's'}
      </p>
      <div role="percent-container" className="flex items-center gap-1 mt-1">
        <span
          role="percentage"
          className="card_percentage"
          style={{ width: macro.width, backgroundColor: macro.color }}
        />
        <p className="card_percentage_text" style={{ color: macro.color }}>
          {macro.text}%
        </p>
      </div>
    </div>
  );
}

export { MacroPercentage };
