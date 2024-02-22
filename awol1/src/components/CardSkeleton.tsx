import React from 'react'
import { CiImageOff } from 'react-icons/ci'

const CardSkeleton = ({ error }: { error?: boolean }) => {
  return (
    <div
        className={`h-[450-hx] md:h-[335px] w-[100%] grid place-item-center bg-primary ${
            !error && "cardSkeleton"
        }`}
    >
        {error && <CiImageOff size={56} />}
    </div>
  );
};

export default CardSkeleton