const _ = require('lodash');
const validateNaoStatus = {
    "documentStatus": true,
    "docDetailStatusList": {
		"adoption": false
	},
}

const savedAppResult = {
    "accountType" : "JTWROS"
}
let adoptionStatus = validateNaoStatus.docDetailStatusList.adoption;
console.log('Adoption Status --> ' +adoptionStatus);

if (!validateNaoStatus.documentStatus && !(_.includes(savedAppResult.accountType, "JTWROS") && !adoptionStatus)) {
    console.log('SR creating')
}else{
    console.log('SR not creating')
}