function iterativeLog(array){
    array.forEach(function(element, index){
      console.log(`${index}: ${element}`)
    })
}
function iterate(callback) {
   var array = ["hockey", "baseball", "golf"]
   array.forEach(callback)
   return array
}
function doToArray(array, callback){
    array.forEach(callback);
    
}
