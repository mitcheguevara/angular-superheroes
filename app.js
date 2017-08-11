(function () {
  angular.module('superheroApp', [])
  .controller('SuperherosController', ['superheros', SuperherosController])
  .factory('superheros', [superherosService])
  .controller('SuperheroFormController', ['superheros', SuperheroFormController])

  function SuperheroFormController (superheros) {
    this.addSuperhero = addSuperhero

    function addSuperhero () {
      superheros.create(this.newSuperhero)
      this.newSuperhero = ''
    }
  }

  function superherosService () {
    const superheros = [
      { name: 'Hero 1', phone_number:"123-222-2345", comics_affilication: "marvel", img:"url"},
      { name: 'Hero 2', phone_number:"123-222-2345", comics_affilication: "dc", img:"url"},
      { name: 'Hero 3', phone_number:"123-222-2345", comics_affilication: "marvel", img:"url"},
      { name: 'Hero 4', phone_number:"123-222-2345", comics_affilication: "dc", img:"url"},
      { name: 'Hero 5', phone_number:"123-222-2345", comics_affilication: "marvel", img:"url"},
      { name: 'Hero 6', phone_number:"123-222-2345", comics_affilication: "dc", img:"url"},
      ]

    return {
      all: all,
      create: create
    }

    function all () {
      return superheros
    }

    function create (title) {
      superheros.push({
        title: title,
        completed: false
      })
    }
  }

  function SuperherosController (superheros) {
    this.superheros = superheros.all()
  }
})()
