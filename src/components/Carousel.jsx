import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor(){
        super()
        this.state = {
         count : 0
        }
        this.forward = this.forward.bind(this)
        this.backward = this.backward.bind(this)
    }

forward(){
    let imageIndex = this.state.count
    if(imageIndex==2){
        this.setState({count:0})
    }
    else{
    this.setState({
        count:this.state.count + 1
    })
}
}

backward(){
    let imageIndex = this.state.count
    if(imageIndex==0){
        this.setState({count:2})
    }
    else{
    this.setState({
        count:this.state.count - 1
    })
}
}

    render(){
        let imageIndex = this.state.count
        let image = images[imageIndex].img
        return(
            <div className="container">
                <ArrowBackIosIcon onClick={this.backward}/>
               <img src={image} alt="" style={{height:"400px",width:"400px"}}/>
                <ArrowForwardIosIcon onClick={this.forward} />
            </div>
        )
    }
}

export default Carousel;