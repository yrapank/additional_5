module.exports = function check(str, bracketsConfig) { 
  let arr1 =[]; 
  let arr2 = []; 
  var answer;  
  for(let i = 0, arrLength =bracketsConfig.length;i<arrLength;i++ ){ 
    arr1.push(bracketsConfig[i][0]);  
    arr2.push(bracketsConfig[i][1]); 
  } 
  for(let j =0;j<str.length;j++){  
    for(let i = 0; i<arr1.length;i++){ 
      if(str[j]===arr1[i]){ 
        break; 
      } 
      else if(j == 0){ 
        return answer = false; 
      } 
      else if(str[j]===arr2[i]){ 
        break; 
      } 
      return answer = false; 
    } 
  return answer = true; 
  } 
  return answer; 
  };
  