const str0 = "";
const str1 = 'We promptly judged antique ivory buckles for the next prize';
const str2 = "abcdefghijklmnopqrstuvwxyz";
const str3 = "the quick brown fox jumps over the lazy dog";
const str4 = "a quick movement of the enemy will jeopardize five gunboats";
const str5 = "the 1 quick brown fox jumps over the 2 lazy dogs ";


//#1
const isPangram = (str = '') => {
   str = str.toLowerCase();
   const { length } = str;
   const alphabets = 'abcdefghijklmnopqrstuvwxyz';
   const alphaArr = alphabets.split('');
   for(let i = 0; i < length; i++){
      const el = str[i];
      const index = alphaArr.indexOf(el);
      if(index !== -1){
         alphaArr.splice(index, 1);
      };
   };
   return !alphaArr.length;
};
console.log(isPangram(str0));


//#2
function pangrams(s) {
   let alphabet = "abcdefghijklmnopqrstuvwxyz";
   let regex = /\s/g;
   let lowercase = s.toLowerCase().replace(regex, "");
  
   for(let i = 0; i < alphabet.length; i++){
    if(lowercase.indexOf(alphabet[i]) === -1){
      return "not pangram";
    }
   }
  
  return "pangram";
}

console.log(pangrams(str5))