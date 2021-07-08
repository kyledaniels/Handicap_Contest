import React from  'react';

class Edit extends React.Component {
    state = {
        text:'Edit',
        editing:false,
        input:false,
        number:''

     }

     handleChange = (event) => {
      this.setState({
         [event.target.name]:event.target.value
       });
      }

     changeText = (text)=>{
      this.setState({text})
      this.getInputValue()
               }
               
     getInputValue = ()=>{
      this.setState({editing:true})
                 } 
   
     submitForm = (event,text)=>{
      event.preventDefault()
      this.setState({editing:false})
      this.setState({text})

      
     
      this.setState ({
        number:''
        })
      
     }

   
              


        render(){
        if(this.state.editing){
            return (
               <div>
               <div><form><div><input type="text" value={this.state.number} name="number"onChange={event=>this.handleChange(event)} placeholder="$0"/></div> 
               <div><button type="submit" onClick={this.submitForm}>Save</button></div>
               </form>
               
               
               </div>
   
               </div>
            )
        } 

      //   if(!this.state.editing){
      //      this.submitForm()  
      //   }
            return (
                <React.Fragment>
                <button onClick={()=>{this.changeText('save')}}>{this.state.text}</button>
               </React.Fragment>
            )
        }

}

export default Edit

{/* <div className="input">{this.state.editing?<form onSubmit={this.submitForm}><input></input></form>:null}</div><button className="edit-button" onClick={this.getInputValue} onClick={()=>{this.changeText('save')}}>{this.state.text}</button> */}