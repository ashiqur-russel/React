import React,{ Component } from "react";
import { Card, CardImg, CardImgOverlay,CardTitle } from 'reactstrap';
import DishDetail from "./DishdetailComponent";


class Menu extends Component{

    constructor(props){
        super(props);

        this.state = {
            selectedDish :null
    }
}

    onDishSelect(dish){
        this.setState({selectedDish:dish});
    }


    render(){
            
        const menu=this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-xs-6">
                    <Card onClick = {()=> this.onDishSelect(dish)}>
                            <CardImg src={dish.image} alt={dish.name} />
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                    </Card>
                </div>
            )
        });
        return (
            <div className="comtainer">
                <div className="row">
                        {menu}
                    
                </div>

                <div className ="row">
                    <DishDetail dish ={(this.state.selectedDish)}/>
                </div>
            </div>
        );
    }
}

export default Menu;