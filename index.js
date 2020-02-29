import React , {Component} from 'react';
import ReactDOM from 'react-dom';


class App extends Component{
  constructor(props){
    super(props);
    this.state = { progress : 0};
    this.startProgress = this.startProgress.bind(this);
    this.clearProgress = this.clearProgress.bind(this);
  }
  
  startProgress(e){
      this.start = setInterval(() =>{
        if(this.state.progress < 100) {
            this.setState(state => ({
                progress : state.progress + 1
            }));
        }
      }, 100);
  }
  
  clearProgress(e){
      clearInterval(this.start);
      this.setState(state => ({
        progress : 0
      }));   
  }

  render(){
    return(
      <div>
          <h1>Progress bar</h1>
          <div className="progress_bar"> 
              <div style={{width : this.state.progress + "%"}}  className="progress" ></div> 
          </div>
          <button className = "success" onClick={this.startProgress}> start progress </button>
          <button className = "failure" onClick={this.clearProgress}> clear progress </button>
      </div>
    )
  } 
}

ReactDOM.render(<App/>, document.getElementById('root'));