const processors = [
	{ name: "No of Anonymous Functions", processor: require("./noOfAnonymousFunctions") },
	{ name: "No of Arrow Functions", processor: require("./noOfArrowFunctions") },
	{ name: "No of Constants", processor: require("./noOfConstants") },
	{ name: "No of Filters", processor: require("./noOfFilters") },
	{ name: "No of ForEach", processor: require("./noOfForEach") },
	{ name: "No of ForLoops", processor: require("./noOfForLoops") },
	{ name: "No of Function Expressions", processor: require("./noOfFunctionExpressions") },
	{ name: "No of Ifs", processor: require("./noOfIfs") },
	{ name: "No of Lets", processor: require("./noOfLets") },
	{ name: "No of Maps", processor: require("./noOfMaps") },
	{ name: "No of Named Functions", processor: require("./noOfNamedFunctions") },
	{ name: "No of Sort", processor: require("./noOfSort") },
	{ name: "No of Switchs", processor: require("./noOfSwitchs") },
	{ name: "No of Variables", processor: require("./noOfVariables") },
	{ name: "No of Vars", processor: require("./noOfVars") },
	{ name: "No of While Loops", processor: require("./noOfWhileLoops") }
];

module.exports = processors;