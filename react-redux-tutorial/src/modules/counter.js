// 액션 타입
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 초기 상태
const initialState = {
  number: 0,
};

// 리듀서

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
