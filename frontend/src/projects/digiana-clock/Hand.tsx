import { HTMLAttributes, forwardRef } from "react";

interface HandProps extends HTMLAttributes<HTMLDivElement> {
  rotation: number;
  time: number;
}

export const Hand = forwardRef<HTMLDivElement, HandProps>(
  ({ ...props }, ref) => {
    return (
      <div
        {...props}
        style={{
          rotate: `${props.rotation}deg`,
        }}
        ref={ref}
      >
        {formatTime(props.time)}
      </div>
    );
  },
);

const formatTime = (num: number) => {
  return Math.floor(num).toString().concat(" ").repeat(100);
};
