'use client';

import { decrement, increment } from "../lib/feature/featureSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../lib/store";

export default function Counter() {
  const dispatch = useDispatch();
  const countState = useSelector((state: RootState) => state.counter.value);
  return (
    <div className="flex gap-8 items-center">
      <div>
          <div className="flex gap-4 justify-center items-center">
            <button
              onClick={() => dispatch(decrement(1))}
              className="w-10 h-10 bg-black text-white"
            >
              -
            </button>
            <h2 className="border rounded h-10 text-center py-1 px-4 font-semibold text-gray-600 ">
              {countState}
            </h2>
            <button
              onClick={() => dispatch(increment(1))}
              className="w-10 h-10 bg-black text-white"
            >
              +
            </button>
        </div>
      </div>
    </div>
  );
}