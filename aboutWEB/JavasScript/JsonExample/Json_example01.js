var example = {
    "stringify": "please",
    "andParseMe": "thankYou"
};

var string = JSON.stringify(example);
console.log(string);

var parsed = JSON.parse(string); // to string
console.log(parsed) // string to json