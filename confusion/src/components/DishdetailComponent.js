import React,{ Component } from "react";
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';
import { DISHES } from "../shared/dishes";



class DishDetail extends Component{  


    constructor(props){
        super(props);

        this.state = {
            selectedDish :DISHES
    }
}

renderDish(dish){
        
                return(
                    <div className="col-md-6">
                        <Card>
                            <CardImg src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card> 
                    </div>
          );
        } 
    renderComments(comments){
        if(comments!=null)
        {
            const commentListItem = comments.map((comment)=>{
                return(
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>--{comment.author},{comment.date}</p>
                    </li>
                );
            });
            return(
                <div className="col-md-6">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentListItem}
                    </ul>
                </div>
            );
        }else{
            return (<div><h4>Hello RenderComments</h4></div>);
        }

    }
        render(){
            if(this.dish !=null){
                    return(
                        <div className="row">
                            {this.renderDish(this.props.dish)}
                            {this.renderComments(this.props.dish.comments)}
                        </div>
            );
                }
                else{
                    return(<div><h4>Hello Main render </h4></div>);
                }
        } 


}
export default DishDetail;