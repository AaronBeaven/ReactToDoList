import React,{Component} from 'react';

export default class ToDoList extends Component{
    constructor(props){
        super(props);

        this.state = {
            userInput: '',
            list: [],
            todoToShow: "all",
            buttonColour: '',
            activeLists: []

         }
         this.deleteItem = this.deleteItem.bind(this)

    }
    changeUserInput(input){
        this.setState({
            userInput: input
        })
    }

    addToList(input){
        let listArray = this.state.list;
        listArray.push(input);

        this.setState({
            list: listArray,
            userInput: ''
        })
    }
    
    deleteItem(index) {
        const list = [...this.state.list];
        // console.log(list)
        const updatedList = list.filter(item => item.index !== index);
       
        this.setState({ list: updatedList })
      }
    onButtonPress = (index) =>{
        console.log("button clicked");


            this.setState({ 
                buttonColour: 'green',
                activeLists: [...this.state.activeLists, index]
            })
        
        
      }
    onButtonPressthis = (index) =>{
        console.log("button clicked");
        
   
            this.setState({ 
                buttonColour: 'yellow',
                activeLists: [...this.state.activeLists, index]
            })
        
        
      }
    onButtonPressthisstart = (index) =>{
        console.log("button clicked");
        if(this.state.buttonColour==='yellow'|| 'green')
        {
            this.setState({ 
                buttonColour: 'grey',
                activeLists: [...this.state.activeLists, index]
            })
        }
        else {
          this.setState({ buttonColour: '' }) 
        }
      }


render(){


    console.log(this.state);
    return (
        <div className="to-do-list">
            <h1>My To Do List</h1>
            <input 
                onChange={(e)=> this.changeUserInput(e.target.value)}
                value={this.state.userInput}
                type="text"/>
            <button onClick={()=> this.addToList(this.state.userInput)}>Press me</button>
            <div className="listItems">
                <ul >
                    {this.state.list.map((val, index)=> <li className= {this.state.activeLists.includes(index) 
                        ? this.state.buttonColour 
                        : 'grey'} key={index}> {val}<button onClick={()=> this.onButtonPress(index)} className="done">Complete</button>
                    
                        <button onClick={()=> this.onButtonPressthis(index)} className="done">In Progress</button>
                        <button onClick={()=> this.onButtonPressthisstart(index)} className="done">Not Started</button>
                        <button onClick={() => this.deleteItem(val.li)}> Delete</button>
                        </li>
                    )}
                    
                </ul>
            </div>
            <div>
                Todos left: {this.state.list.length}
            </div>
           
             
        </div>
    );
}

}