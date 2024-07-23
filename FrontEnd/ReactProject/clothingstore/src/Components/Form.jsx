import React from 'react';
import edit from "../Styling/edit.css"

function Form({ genericPropsForm, variable, forgot , text, option}) {
  const variablescss = {
    backgroundColor: variable && variable.backgroundColor ? variable.backgroundColor : 'initialValue',
    border: variable && variable.border ? variable.border : 'defaultBorder',
    borderRadius: variable && variable.borderRadius ? variable.borderRadius : 'defaultBorderRadius',
    margin: variable && variable.margin ? variable.margin : 'defaultMargin',
    padding: variable && variable.padding ? variable.padding : 'defaultPadding',
    boxShadow: variable && variable.boxShadow ? variable.boxShadow : 'defaultBoxShadow',
    marginLeft: variable && variable.marginLeft ? variable.marginLeft : 'defaultMarginLeft',
    marginRight: variable && variable.marginRight ? variable.marginRight : 'defaultMarginRight',
    width: variable && variable.width ? variable.width : 'defaultwidth', 
    alignItems : variable && variable.alignItems ? variable.alignItems : 'defaultalignItems',
    textAlign : variable && variable.textAlign ? variable.textAlign : 'defaulttextAlign'

  };

  const texts = {

            fontWeight : text , marginLeft : text , marginBottom : text
            

            
  }

  return (
    <div style={variablescss} id="style1">
      <form>
        {genericPropsForm.map((item, index) => (
          <div key={index}>
            <div>
              <label style={text} className="edits" htmlFor={`Name-${index}`}>
                {item.key}
              </label>
              <input
                type="text"
                name={`Name-${index}`}
                value={item.val}
                id='boxedit'
                style={option}
              />
              
            </div>
          </div>
        ))}
        {forgot ? <a href="" style={text} id='forgot'>Forgot Password?</a> : " "}
        {option ? <select> 
          <option>S</option>
          <option>M</option>
          <option>L</option>
        </select> : " "}

        <button type="submit" id='editsbutton'>Save</button>
        <button type="submit" id='editsbutton'>Cancel</button>

        
        
      </form>
    </div>
  );
}

export default Form;
