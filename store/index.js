export const state = () => ({
  font: 1, // Define state variables
});

export const mutations = {
  changeFont(state) {
    if (state.font === 3) {
      state.font = 1
    } else {
      state.font++;
    }
  },
};