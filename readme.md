# Documentation for Password generating API

## Features:

An API that generates secure passwords. 

User inputs:
- Minimum length
- Number of special characters
- Number of numbers
- Number of passwords to be created. 

Return value: Array of passwords.

## Usage:

API call with parameters in {number}
"http://localhost:5000?minLength={number}&specCharNum={number}&numsNum={number}&numOfPasswords={number}"


#### Parameters

Defaults that are in the program to guarantee at least minimum security password: 

* Minimum length = 8
* Number of special characters = 1
* Number of numbers = 1
* Number of passwords to be created = 1

Limitations:
Maximum length of passwords Array per call is 1000.

#### Secure password definition:
A password that is hard to detect both by humans and by the computer. 
Two things make a password stronger: 
(1) a larger number of characters, and 
(2) mixing numeric digits, upper and lower case letters and special characters ($, #, etc.). 


Example of a call:
http://localhost:5000?minLength=8&numberOfNumbers=1&numberOfSpecCharacters=1&numberOfPasswords=3

Example of a response:
["0jU/wKWj","TtF6}nZg","3X{ZpnWi"]


Requirements for running the API:
 - node v14.16.1
 - npm packages:
    * express 4.17.1
    * cors 2.8.5

Requirements for testing:


Command to start the API:
node index.js

Command to run tests:
