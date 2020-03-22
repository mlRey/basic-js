const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(samAct) {
  if(typeof(samAct)==='string' && parseFloat(samAct)<MODERN_ACTIVITY && parseFloat(samAct)>0){
    return Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(samAct)) /(0.693/HALF_LIFE_PERIOD)); 
 }else{
   return false;
 }
};
