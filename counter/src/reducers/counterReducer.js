const initialState = {
  count: 0
}

const counterReducer = (state = initialState, action) => {
  switch(action.type){
    case "INCREMENT": {
      return {
        count: state.counter + 1
      }
    }
    case "DECREMENT": {
      return {
        count: state.counter - 1
      }
    }
    case "RESET": {
      return {
        count: 0
      }
    }
    default:  {
      return {
        count: state.counter
      }
    }
  }
}

module.exports = counterReducer
