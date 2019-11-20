//VUEX STORE MUTATIONS
export default {
  SET_SHOW_PROJECT_MODAL(state, toggle) {
    state.isShowProjectModal = toggle;
  },
  SET_PROJECT_MODAL_DATA(state, data) {
    state.projectModalData = data;
    console.log(state.projectModalData);
  }
};
