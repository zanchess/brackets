module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 === 0) {
    for (let i = 0; i < bracketsConfig.length;) {
    	let bracket = bracketsConfig[i].join('')
  		if (str.includes(bracket)) {
        str = str.replace(bracket, '');
        i = 0;
    	} else{
        i++;
    	}
    
		}  
		if (str) {
  		return false;
		}else{
    	return true;
		}
	} else{
    return false;
	}
}
