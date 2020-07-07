import React from 'react';

export default class App extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        id: this.props.id,
        date: this.props.date,
        content: this.props.content,
        likes: this.props.likes,
        shares: this.props.shares,
        tags: this.props.tags,
        img: this.props.img,
    }


    like = () => {
        this.setState((state)=>{
                return{likes: state.likes + 1};
        })}

    share = () => {
        this.setState(
            prevstate =>{
                return{
                    shares: prevstate.shares + 1
                }
            }
        )};

    componentWillUnmount(){
        console.log("componentWillUnmount() ");
    }
    
    render() {
        return (
            <>
                {/* post */}
                <div className="panel panel-default">
                    <div className="panel-body">
                        <p>{this.props.date}</p>
                        <img src = {this.props.img} width="50%"/>
                    </div>
                    <div className="panel-body">
                        <p>{this.props.content}</p>
                    </div>
                    <div className="panel-footer">
                        <button onClick={this.like } className ="btn btn-default" >Likes: {this.state.likes}</button>
                        <button onClick= {this.share} className="pull-right btn btn-secondary" >Shares: {this.state.shares}</button>
                        {/*  <button id = {this.props.id} className="btn btn-default" action = "onClick{this.props.like}" >LIKE: {this.props.likes} </button>
                        <button className="pull-right btn btn-secondary" action="onClick{this.share}">Shares: {this.props.shares}</button>
                        */}
                    </div>
                </div>
                {/* ./post */}
            </>
        );
    }
}