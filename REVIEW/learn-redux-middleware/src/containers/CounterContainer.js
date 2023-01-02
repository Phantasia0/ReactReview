import { connect } from "react-redux";
import { increaseAsync, decreaseAsync } from "../modules/counter_saga";
import Counter from "../components/Counter";

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  );
};

export default connect(
  (state) => ({
    number: state.counter_saga,
  }),
  {
    increaseAsync,
    decreaseAsync,
  }
)(CounterContainer);
