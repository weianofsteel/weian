import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/public.module.css';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            isBoxHover: false
        }

        this.handleTimer = this.handleTimer.bind(this);
        this.timer = this.timer.bind(this);
        this.handleBoxHover = this.handleBoxHover.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
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

    handleBoxHover() {
        this.setState({isBoxHover:true});
        console.log(this.props.mode, 999);
    }

    handleMouseLeave() {
        this.setState({isBoxHover:false})
    }

    render() {
        
        const {
            imgsrc,
            rotateBy,
            width,
            height,
            mode
        } = this.props;

        const list = [];

        if(!imgsrc) {
            return list
        }else {
            if(!rotateBy) {
                for(let i = 0; i <= imgsrc.length - 1; i++) {
                    list.push(
                        <div 
                            key={i} 
                            className={mode=='day'?styles.imgBox:styles.imgBoxNight} 
                            onMouseEnter={this.handleBoxHover} 
                            onMouseLeave={this.handleMouseLeave}
                            // style={{width:'100%', height:'100%'}}
                        >
                            {parseInt( this.state.count / 3) % imgsrc.length === i ?
                                <div>
                                    {/* {
                                        this.state.isBoxHover==false && */}
                                        <img src={imgsrc[i]} style={{margin: '0 auto', width:'100%', height:'100%'}}/>
                                    {/* } */}
                                    {/* {
                                        this.state.isBoxHover==true &&
                                        <p className={mode=='day'?styles.imgDescription:styles.imgDescriptionNight}>hello</p>
                                    } */}
                                </div>
                            :''}        
                        </div>
                    )
                }
            }else {
                for(let i = 0; i <= imgsrc.length - 1; i++) {
                    list.push(
                        <div 
                            key={i}
                            className={styles.imgBox} 
                            onMouseEnter={this.handleBoxHover} 
                            onMouseLeave={this.handleMouseLeave}
                        >
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

                    {/* {this.state.isBoxHover==false&&
                        {list}
                    }
                    {this.state.isBoxHover==true&&
                        <div>hllo</div>
                    } */}
                    {list}
                
                </Grid>

            </React.Fragment>
        )
    }
}

export default Carousel;