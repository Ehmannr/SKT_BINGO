/**
 * CS 310
 * Cocktails (Starter Template)
 */
"use strict";
(function () {


  const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";
  var cocktailName;
  var flag = 1;
  
  window.addEventListener("load", init);
  // www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
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

    


  }


  /**
   * TODO: Fetch data from the CocktailDB api! Remember that this one returns
   * JSON, not plain text!
   */
  function makeRequest() {
    // TODO
    killChildren()
    let url = BASE_URL;

    if(flag === 1){
      if (cocktailName) {
        url += "search.php?s=" + cocktailName
      } else {
        url += "random.php"
      }

    }
    else{
      url = BASE_URL+ 'filter.php?a=Non_Alcoholic'
      console.log(url)
    }
   

    
    getdata(url)
    //make a fetch request to https://www.thecocktaildb.com/api/json/v1/1/random.php
  }

  /**
   * TODO: Implement any other functions you need
   */


  async function getdata(url) {
    //Getting json for name and instructions
    const response = await fetch(url)
    const data = await response.json()
    const {
      strDrink,
      strInstructions,
      strDrinkThumb
    } = data.drinks[0]

    console.log("GETTING DATA FOR", cocktailName, "...")
    var parent = document.getElementById('child')

    //make img
    var img = document.createElement('img')
    img.src = strDrinkThumb
    parent.appendChild(img)

    //make the Title
    var child = document.createElement('h1')
    child.innerHTML = strDrink
    parent.appendChild(child)

    //make the instructions
    child = document.createElement('p')
    child.innerHTML = strInstructions
    parent.appendChild(child)

    //make the ing list
    makeList(data.drinks[0], parent)
  }


  function killChildren() {
    var child = document.querySelector('#child')
    child.remove()

    var remake = document.createElement('div')
    remake.id = "child"

    var parent = document.getElementById('cocktail-area')
    parent.append(remake)
  }

  function showSelected(e) {
    if (this.checked) {
      cocktailName = this.value
    }
      else {
        cocktailName = this.value
      }

      console.log(cocktailName)
      makeRequest()
      return

    
  }

  function btnHit() {
    cocktailName = undefined;
    makeRequest()
  }

  function makeList(data, parent) {
    console.log(data)
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