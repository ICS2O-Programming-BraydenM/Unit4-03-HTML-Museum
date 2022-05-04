// Copyright (c) 2022 Brayden MacMillan All rights reserved
//
// Created by: Brayden MacMillan
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

// This function displays a statement to see what movie rating a specific age should be permitted to see
 
function onButtonClick () {
  
	// get user input (age)
	let age = parseInt(document.getElementById('age').value)

  // declare constants 
  const FIRST_THRESHOLD = 18;
  const SECOND_THRESHOLD = 13;
  const THIRD_THRESHOLD = 8;

  // if statements, if you are 18 years old or older, you are permitted to watch an R rated movie alone, if you are 13 years or older, you are permitted to watch a PG-13 rated movie alone, if you are 8 years or older, you are permitted to watch a G rated movie alone, and if you are 7 years or younger, you should not be seeing a movie alone
	if (age >= FIRST_THRESHOLD) {
		let greeting = "You are permitted to watch an R rated movie alone!"
    document.getElementById('display-results').innerHTML = greeting
	}

  else if (age >= SECOND_THRESHOLD) {
    let greeting = "You are permitted to watch a PG-13 rated movie alone."
    document.getElementById('display-results').innerHTML = greeting 
  }

  else if (age >= THIRD_THRESHOLD) {
    let greeting = "You are permitted to watch a G rated movie alone."
    document.getElementById('display-results').innerHTML = greeting 
  }

  else {
    let greeting = "You should not be going to see a movie alone. Parental guidance is extremely encouraged."
    document.getElementById('display-results').innerHTML = greeting 
  }
}