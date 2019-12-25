import React,{Component} from 'react';

class AddForm extends Component{
state = {
    content:''
}

handelChange = (e)=>{
    this.setState({
        content:e.target.value
    })
}
handleSubmit = (e) =>{
    e.preventDefault();
    this.props.addForm(this.state);
    this.setState({
        content:''
    })
}


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add Today's Todo:</label>
                    <input type="text" onChange={this.handelChange} value={this.state.content}/>

                </form>

            </div>
        )
    }
}

export default AddForm