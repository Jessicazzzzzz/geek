module.exports = {

	"parserOptions":{
		"sourceType":"module"
	},
	"extends": ['plugin:testing-library/dom'],
	
	"rules": {
		'testing-library/no-debugging-utils': [
			'error',
			{
				utilsToCheckFor: {
					debug: false,
					logRoles: false,
					logDOM: true,
				},
			},
		],
	
	}
 
 
  
};