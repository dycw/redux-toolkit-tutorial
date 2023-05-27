import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ordered, restocked } from "./cakeSlice";

export const CakeView = () => {
  const dispatch = useAppDispatch();
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock cakes</button>
    </div>
  );
};
