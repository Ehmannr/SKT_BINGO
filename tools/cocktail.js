/**
 * CS 310
 * Ryan Ehmann
 * this is the backend for a website that goes to an api and gets Drink name and ingredients
 */
"use strict";
(function () {


  const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";
  var cocktailName;
  var flag = 1

  window.addEventListener("load", init);
  //www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic
  /**
   * TODO: What do we need to initialize?
   */
  function init() {

    const radioButtons = document.querySelectorAll('input[name="cocktail"]');
    for (const radioButton of radioButtons) {
      radioButton.addEventListener('change', showSelected);
    }

    let btn_pick_me = document.getElementById("btn-random")
    btn_pick_me.addEventListener("click", btnHit);

    let checkBox = document.querySelector('input[name = checkbox]')
    checkBox.addEventListener('change', swapDrinkType);
  }

  /**
   * TODO: Fetch data from the CocktailDB api! Remember that this one returns
   * JSON, not plain text!
   */
  function makeRequest() {
    //kills all children nodes from html before adding any new DOM elements
    killChildren()
    let url = BASE_URL;
    //flag == 1 means user wants an alc drink
    if (flag === 1) {
      if (cocktailName) {
        url += "search.php?s=" + cocktailName
      } else {
        url += "random.php"
      }
    }
    // flag == 0 means user does not want an alc drink
    if (flag === 0) {
      url = BASE_URL + 'filter.php?a=Non_Alcoholic'
    }
    //get data uses url to fetch the json data and processes it there
    getdata(url)
  }


  /**
   * get data uses fetch request to api to get information to display on html
   */
  async function getdata(url) {
    const response = await fetch(url)
    const data = await response.json()

    //to get a random number for non alc drinks
    if (flag == 0) {
      // there are 58 non alc drinks in api and im lazy to look up how to make this not hard coded
      var index = getRandomInt(0, 57)
      var idnumber = data.drinks[index].idDrink
      console.log("id number = ", idnumber)
    } 
    else {
      //otherwise use first element returned from fetch(url)
      index = 0
    }

    //getting the data and storing into vars
    var {
      strDrink,
      strInstructions,
      strDrinkThumb,
      idDrink
    } = data.drinks[index]
    console.log("this should be the drink shown: ", strDrink)

    //you have to look up the id number to get the ingedients and mesuremtns for non alc drinks since just using the non-alc filter does not have that information
    if (flag == 0) {
      url = BASE_URL + "lookup.php?i=" + idDrink
      const response = await fetch(url)
      const data = await response.json()
      console.log("drinks = ", data.drinks[0])
      strInstructions = data.drinks[0].strInstructions
      createElements(data.drinks[0])
    } 
    else {
      createElements(data.drinks[0])
    }

    /**
     * this function will create all the elements to be appened to the html 
     * @param array data - the data from the fetch request
     */
    function createElements(data) {
      var parent = document.getElementById('child')

      //make img
      var img = document.createElement('img')
      img.src = strDrinkThumb
      parent.appendChild(img)

      //make the Title
      var child = document.createElement('h1')
      child.innerHTML = strDrink
      parent.appendChild(child)

      //make h3
      child = document.createElement('h3')
      child.innerHTML = "Ingredients"
      parent.appendChild(child)

      //make the instructions
      child = document.createElement('p')
      child.innerHTML = strInstructions
      parent.appendChild(child)

      //make the ing/mesurement list
      makeList(data, parent)
    }
  }

  /**
   *  killChildren(), kills the children from the html before adding new DOM elemetns
   */
  function killChildren() {
    var child = document.querySelector('#child')
    child.remove()

    var remake = document.createElement('div')
    remake.id = "child"

    var parent = document.getElementById('cocktail-area')
    parent.append(remake)
  }

  /**
   *  this shows what radio button is currently selected then makes a request for that name
   */
  function showSelected(e) {
    if (this.checked) {
      cocktailName = this.value
    } else {
      cocktailName = this.value
    }

    //console.log(cocktailName)
    flag = 1
    makeRequest()
    return


  }
  /**
   *  this says if random button hit, make name undefined so url gets to be (url += "random.php")
   */
  function btnHit() {
    cocktailName = undefined;
    makeRequest()
  }
  /**
   *  this swaps from alc dinks to non-alc drinks, 
   * 
   */
  function swapDrinkType() {
    let Box = document.querySelector('input[name = checkbox]')
    if (Box.checked) {
      //non-alc
      flag = 0;

    } else {
      //alc
      flag = 1;
    }
    return
  }
  /**
   * this makes the ul and list items for ingerients and mesuremnts
   * @param data and @param parent  - given the array and parent DOM element
   * 
   */

  function makeList(data, parent) {
    var ul = document.createElement('ul')
    parent.appendChild(ul)

    let i = 1
    let l = 1
    let ingredient = "strIngredient" + i
    let mesurement = "strMeasure" + l
    while (data[ingredient]) {
      let child = document.createElement('li')

      if (data[mesurement]) {
        child.innerHTML = data[ingredient] + " : " + data[mesurement]
      } else {
        child.innerHTML = data[ingredient]
      }
      ul.appendChild(child)

      mesurement = "strMeasure" + ++l
      ingredient = "strIngredient" + ++i
    }
  }
  /**
   * random number generator
   * @param min and @param max  - min and max numbers to choose between
   * @return int - give the random number back 
   */
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  /* ------------------------------ Helper Functions below ------------------------------ */

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} response - response to check for success/error
   * @return {object} - valid response if response was successful, otherwise rejected
   *                    Promise result
   */
  function checkStatus(response) {
    if (!response.ok) {
      throw Error("Error in request: " + response.statusText);
    }
    return response; // a Response object
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @return {object} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} query - CSS query selector.
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qs(query) {
    return document.querySelector(query);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} query - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }

  /**
   * Returns a new element with the given tag name.
   * @param {string} tagName - HTML tag name for new DOM element.
   * @returns {object} New DOM object for given HTML tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }
})();