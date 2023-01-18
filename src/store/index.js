import { createStore } from "vuex";

export default createStore({
  state: {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        tel: 330606060606,
      },
      {
        id: 2,
        name: "Anna Wintour",
        tel: 330645672349,
      },
      {
        id: 3,
        name: "Johnny Cage",
        tel: 330612345678,
      },
    ],
  },
  getters: {},
  mutations: {
    addContact(state, contact) {
      state.contacts.push(contact);
    }
  },
  actions: {},
  modules: {},
});
