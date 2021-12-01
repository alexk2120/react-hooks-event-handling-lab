import Keypad from "./Keypad";

function EyesOnMe(){
    
    function handleFocus (event){
        console.log('Good!')
        }
    function handleBlur (event){
        console.log('Hey! Eyes on me!')
    }

return (  
    <button onFocus={handleFocus}
    onBlur={handleBlur}>Eyes on me</button>
        
     
    //   {(console.log('Good!'))} 
    //  onBlur {(console.log('Hey! Eyes on me!'))}
   
   );

}
export default EyesOnMe;