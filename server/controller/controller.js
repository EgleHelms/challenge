
const passGen = (req, res) =>{

    //convert inputs to numbers with json they will come as a string
    const inputs = {
        minLength: Number(req.query.minLength),
        numsNum: Number(req.query.numsNum),
        specCharNum: Number(req.query.specCharNum),
        numOfPasswords: Number(req.query.numOfPasswords)
    }

    //defaults setup
    inputs.minLength < 8 ? inputs.minLength = 8 : null;
    inputs.numsNum < 1 ? inputs.numsNum = 1 : null;
    inputs.specCharNum < 1 ? inputs.specCharNum = 1 : null;
    inputs.numOfPasswords < 1 ? inputs.numOfPasswords = 1 : null;

    // generate final array of passwords
    let finalPassArray = [];

    for (let i=1; i<=inputs.numOfPasswords; i++){
      let password = passStringGen(inputs.minLength, inputs.numsNum, inputs.specCharNum);
        finalPassArray.push(password);
    }

    res.status(200).json({YourPasswordArray: finalPassArray});
}

//creating one password

function passStringGen(minLength, numNums, specCharNum){

    let letterNum = minLength - numNums - specCharNum;
    if (letterNum < 2) letterNum = 2;


    let randomCharArray = [];

        for (let j=1; j<=numNums; j++){
            let num = getRandomNumber();
            randomCharArray.push(num);
        }

        for (let j=1; j<=specCharNum; j++){
            let char = getRandomSymbol();
            randomCharArray.push(char);
        }

        for (let j=1; j<=letterNum; j++){
            let letterLower = getRandomLower();
            randomCharArray.push(letterLower);
            let letterUpper = getRandomUpper();
            randomCharArray.push(letterUpper);

        }

    //to shuffle
      return randomCharArray.sort(() => Math.random() - 0.5).join("");
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

exports.passGen = passGen;