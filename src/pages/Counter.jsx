import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/slices/counterSlice";
import "./Counter.css";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <section className="counter-page">
      <div className="counter-card">
        <h2 className="counter-title">Counter</h2>
        <div className="counter-value">{count}</div>
        <div className="counter-actions">
          <button
            type="button"
            className="counter-button counter-button-decrement"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <button
            type="button"
            className="counter-button counter-button-increment"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
        </div>
      </div>
    </section>
  );
}

export default Counter;