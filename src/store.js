import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dogs: []
  },
  mutations: {
    setDogs(state, dogs){
      state.dogs = dogs
    },
    upvoteDog(state, id){
      const dog = state.dogs.find(dog => dog.id == id)
      dog.votes++
    }
  },
  actions: {
    fetchDogs({ commit }){
      Promise.resolve()  //fetch goes here
        .then(() => {
            commit("setDogs", [{
                id: 1,
                name: "Fido",
                imageURL: "https://thehappypuppysite.com/wp-content/uploads/2017/10/Cute-Dog-Names-HP-long.jpg",
                votes: 0
              },{
                id: 2,
                name: "Bowser",
                imageURL: "https://thehappypuppysite.com/wp-content/uploads/2017/10/Cute-Dog-Names-HP-long.jpg",
                votes: 0
              },{
                id: 3,
                name: "Percy",
                imageURL: "https://thehappypuppysite.com/wp-content/uploads/2017/10/Cute-Dog-Names-HP-long.jpg",
                votes: 0
            }])
        })
    },
    upvoteDog({ commit }, id){
      commit("upvoteDog", id)
    }
  }
})
