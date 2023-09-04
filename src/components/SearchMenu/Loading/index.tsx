import './style.css';

type LoadingProps = {
  withWord?: boolean;
};

function Loading({ withWord = false }: LoadingProps) {
  return (
    <div className="w-fit mt-4 mx-auto flex items-end gap-1 md:mt-2 sm:mt-0">
      {withWord && (
        <p className="h-fit text-lg font-medium text-dark-purple md:text-base sm:text-sm">
          carregando
        </p>
      )}
      <svg
        width="75.999992mm"
        height="16.000002mm"
        viewBox="0 0 75.999992 16.000002"
        version="1.1"
        id="svg1"
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-5 md:w-3 md:h-4 sm:w-[10px] sm:h-[14px]"
      >
        <circle
          style={{
            fill: '#000000',
            stroke: '#ffffff',
            strokeWidth: '0',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            paintOrder: 'markers stroke fill'
          }}
          id="path1"
          cx="8.000001"
          cy="8.0000019"
          r="7.9999995"
          className="circle-l fill-dark-purple"
        />
        <circle
          style={{
            fill: '#000000',
            stroke: '#ffffff',
            strokeWidth: '0',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            paintOrder: 'markers stroke fill'
          }}
          id="path1-5"
          cx="38"
          cy="8.0000019"
          r="7.9999995"
          className="circle-c fill-dark-purple"
        />
        <circle
          style={{
            fill: '#000000',
            stroke: '#ffffff',
            strokeWidth: '0',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            paintOrder: 'markers stroke fill'
          }}
          id="path1-2"
          cx="68"
          cy="8.0000019"
          r="7.9999995"
          className="circle-r fill-dark-purple"
        />
      </svg>
    </div>
  );
}

export { Loading };
