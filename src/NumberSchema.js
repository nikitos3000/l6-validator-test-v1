export default class NumberSchema{
    isValid(num){
        if(typeof num === 'number'){
            return true
        }
        return false
    }
}