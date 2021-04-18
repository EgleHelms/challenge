
exports.passwordArrayGenerator = (req, res) =>{
    try {
        //convert inputs to numbers. With json they will come as a string
        const inputs = {
            minLength: Number(req.query.minLength),
            numberOfNumbers: Number(req.query.numberOfNumbers),
            numberOfSpecCharacters: Number(req.query.numberOfSpecCharacters),
            numberOfPasswords: Number(req.query.numberOfPasswords)
        }

        //defaults setup
        inputs.minLength < 8 || isNaN(inputs.minLength) ? inputs.minLength = 8 : null;
        inputs.numberOfNumbers < 1 || isNaN(inputs.numberOfNumbers) ? inputs.numberOfNumbers = 1 : null;
        inputs.numberOfSpecCharacters < 1 || isNaN(inputs.numberOfSpecCharacters) ? inputs.numberOfSpecCharacters = 1 : null;
        inputs.numberOfPasswords < 1 || isNaN(inputs.numberOfPasswords) ? inputs.numberOfPasswords = 1 : null;
        inputs.numberOfPasswords >= 1000 ? inputs.numberOfPasswords = 1000 : null;

        // generate final array of passwords
        let finalPasswordArray = [];
        for (let i=1; i<=inputs.numberOfPasswords; i++){
            let password = passwordGenerator(inputs.minLength, inputs.numberOfNumbers, inputs.numberOfSpecCharacters);
            finalPasswordArray.push(password);
        }
        res.status(200).json(finalPasswordArray);
    } catch (error){
        res.status(400).send("Bad request.");
    }
}

//creating one password

function passwordGenerator(minLength, numberOfNumbers, numberOfSpecCharacters){

    let numberOfLetters = minLength - numberOfNumbers - numberOfSpecCharacters;
    if (numberOfLetters < 1) numberOfLetters = 1;

    let arrayOfCharacters = [];
        for (let j=1; j<=numberOfNumbers; j++){
            let number = getRandomNumber();
            arrayOfCharacters.push(number);
        }

        for (let j=1; j<=numberOfSpecCharacters; j++){
            let specialCharacter = getRandomSymbol();
            arrayOfCharacters.push(specialCharacter);
        }

        for (let j=1; j<=numberOfLetters; j++){
            if (j % 2){
                let letterLower = getRandomLower();
                arrayOfCharacters.push(letterLower);  
            }
            else{
                let letterUpper = getRandomUpper();
                arrayOfCharacters.push(letterUpper);  
            }
        }

    //to shuffle
      return arrayOfCharacters.sort(() => Math.random() - 0.5).join("");
}

// randomization funcitions //characters are randomly selected usign this Char Browser Set : https://net-comber.com/charset.html 

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}
