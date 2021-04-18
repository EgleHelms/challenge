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

Minimum length = 8
Number of special characters = 1
Number of numbers = 1
Number of passwords to be created = 1

#### Secure password definition:
A password that is hard to detect both by humans and by the computer. 
Two things make a password stronger: 
(1) a larger number of characters, and 
(2) mixing numeric digits, upper and lower case letters and special characters ($, #, etc.). 
