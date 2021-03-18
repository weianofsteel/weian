import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/public.module.css';
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//     icon: {
//         fontSize:'1.5rem',
//         color:'#8F8F8F',
//         "&:hover":{
//             color:'#1F1F1F'
//         }
//     },
//     title: {
//         color:'blue'
//     }
// });

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }

        this.handleTimer = this.handleTimer.bind(this);
        this.timer = this.timer.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    componentDidMount() {
        this.handleTimer();
    }

    componentWillUnmount() {
        clearInterval(this.handleTimer);
    }

    handleTimer() {
        setInterval(()=>{this.timer();},1000);
    }

    timer() {
        this.setState((prevState)=>({
            count: prevState.count + 1
        }));
    }

    handleNext() {
        if(!this.props.rotateBy) {
            this.setState((prevState)=>({
                count: prevState.count + 3
            }));
        }else {
            this.setState((prevState, props)=>({
                count: prevState.count + props.rotateBy
            }));
        }
    }

    handleBack() {
        if(!this.props.rotateBy) {
            if(this.state.count > 3) {
                this.setState((prevState)=>({
                    count: prevState.count - 3
                }));
            }else {
                this.setState({count: 0});
            }
        }else {
            if(this.state.count > 3) {
                this.setState((prevState, props)=>({
                    count: prevState.count - props.rotateBy
                }));
            }else {
                this.setState({count: 0});
            }
            
        }
    }

    render() {
        
        const {
            imgsrc,
            rotateBy,
            width,
            height,
            classes
        } = this.props;

        const list = [];

        if(!imgsrc) {
            return list
        }else {
            if(!rotateBy) {
                for(let i = 0; i <= imgsrc.length - 1; i++) {
                    list.push(
                        <div key={i}>
                            {parseInt( this.state.count / 3) % imgsrc.length === i ?
                                <div style={{width:width?width:'600px', height:height?height:'500px'}}>
                                    <img src={imgsrc[i]} style={{margin: '0 auto', width:'100%', height:'100%'}}/>
                                </div>
                            :''}        
                        </div>
                    )
                }
            }else {
                for(let i = 0; i <= imgsrc.length - 1; i++) {
                    list.push(
                        <div key={i}>
                            {parseInt( this.state.count / rotateBy) % imgsrc.length === i ?
                                <div style={{width:width?width:'600px', height:height?height:'500px'}}>
                                    <img src={imgsrc[i]} style={{margin: '0 auto', width:'100%', height:'100%'}}/>
                                </div>
                            :''}        
                        </div>
                    )
                }
            }
        }

        return(
            <React.Fragment>

                <Grid container justify="center" alignItems="center">

                
                    {list}
                
                </Grid>

            </React.Fragment>
        )
    }
}

export default Carousel;