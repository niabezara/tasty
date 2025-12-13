import { SVGProps } from "react";

type SvgExtendedProps = SVGProps<SVGSVGElement> & {
  active?: boolean;
};

export const Icons = {
  Heart: ({
    width = "24",
    height = "24",
    color = "#734060",
    ...props
  }: SvgExtendedProps) => (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      width={width}
      height={height}
      fill={color}
    >
      <g>
        <path
          d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
          fillRule="evenodd"
        ></path>
      </g>
    </svg>
  ),
  arrow: ({ className }: SvgExtendedProps) => (
    <svg viewBox="0 0 100 100" className={className}>
      <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path>
    </svg>
  ),
  search: ({}) => (
    <svg
      className="h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18.5 18.5"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            d="M17.2,18.5l-4.9-4.9a8.1,8.1,0,0,1-4.7,1.6A7.9,7.9,0,0,1,2.2,13,7.9,7.9,0,0,1,0,7.6,7.9,7.9,0,0,1,2.2,2.2,7.9,7.9,0,0,1,7.6,0,7.9,7.9,0,0,1,13,2.2a7.9,7.9,0,0,1,2.2,5.4,8.1,8.1,0,0,1-1.6,4.7l4.9,4.9ZM7.6,13.3a6.2,6.2,0,0,0,4.1-1.6,6.2,6.2,0,0,0,1.6-4.1,6.2,6.2,0,0,0-1.6-4.1,5.8,5.8,0,1,0-8.2,8.2A6.2,6.2,0,0,0,7.6,13.3Z"
            fill="#734060"
          ></path>
        </g>
      </g>
    </svg>
  ),
};
