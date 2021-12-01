
function Keypad(){
    function handleChange(event) {
        console.log('Entering password...');
    
      }
return (  
      
        
       
       (<input type="password" name="password" placeholder="Enter password..." onChange={handleChange} />)
    );
}
 
export default Keypad
;