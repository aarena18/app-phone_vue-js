import { createStore } from "vuex";

export default createStore({
  state: {
    row1:{
      id: 1,
      keys:["1", "2", "3"]
    },
    row2:{
      id: 2,
      keys:["4", "5", "6"]
    },
    row3:{
      id: 3,
      keys:["7", "8", "9"]
    },
    row4:{
      id: 4,
      keys:["*", "0", "#"]
    },

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
    },
    addCall(state, input){
      state.calls.push(input);
    }
    
    
  },
  actions: {},
  modules: {},
});
