import Form from '../src/Components/Form'

function App() {
  const dictForGenericPropsProduct=[{"key":"Name Of Product : "},{"key":"Quality : "},{"key":"Used or New : "},{"key":"Type Of Material : "},{"key":"Color : "},{"key":"Size : "}];
  const dictForGenericPropsUser=[{"key":"Username : "},{"key":"Password : "}];
  const dictForGenericPropsRegister=[{"key":"Username : "},{"key":"Email : "},{"key":"Phone Number  : "},{"key":"Password : "},{"key":"Re-Write Password : "}];

  
  return (
    <div>

    <Form genericPropsForm={dictForGenericPropsProduct} variable = {{"backgroundColor" : "silver" , "margin" : "15px" , "borderRadius" : "15px" , "marginLeft" : "7px" , "width" : "500px" , "boxShadow" : "0 1px 10px" , "alignItems" : "center", "textAlign" : "left"}} text = {{"fontWeight" : "bold"}}></Form>
    <Form genericPropsForm={dictForGenericPropsRegister} variable = {{"backgroundColor" : "silver" , "border" : "solid" , "margin" : "15px" , "borderRadius" : "15px", "width" : "500px", "boxShadow" : " 0 1px 10px"}} text = {{"fontWeight" : "bold"}}></Form>
    <Form genericPropsForm={dictForGenericPropsUser}  variable = {{"margin" : "15px" ,  "backgroundColor" : "silver", "borderRadius" : "15px","width" : "500px", "boxShadow" : "0 1px 10px"}} forgot={true} text = {{"fontWeight" : "bold"}}></Form>
    
    
    </div>
  );
}

export default App;
