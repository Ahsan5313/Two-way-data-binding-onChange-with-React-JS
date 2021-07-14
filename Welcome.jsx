import React, {Component} from 'react'



class Welcome extends Component{

     

  state = {


    name : 'Ahsan'

  }

  onChangeHandler = (event) =>{


    this.setState({

      name: event.target.value
    

    })

  }
 
  render(){


    return(

      <div>   

        <input type='text' onChange= {this.onChangeHandler} value={this.state.name}/>
          <h1>Hello {this.state.name}</h1>
         
      </div>
    )
  }

}

export default Welcome;

