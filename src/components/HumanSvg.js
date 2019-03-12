import React, {Component} from 'react';
import Jaw from './svgComponents/Jaw';
import LWrist from './svgComponents/LWrist'
import RWrist from './svgComponents/RWrist'
import LElbow from './svgComponents/LElbow'
import RElbow from './svgComponents/RElbow'
import LShoulder from './svgComponents/LShoulder'
import RShoulder from './svgComponents/RShoulder'
import LAnkle from './svgComponents/LAnkle'
import RAnkle from './svgComponents/RAnkle'
import LKnee from './svgComponents/LKnee'
import RKnee from './svgComponents/RKnee'
import Hips from './svgComponents/Hips'


export default class HumanSvg extends Component{
    constructor(props){
        super(props)
        this.state={
            color: props.color,
            Jaw:false,
            LWrist:false,
            RWrist:false,
            LElbow:false,
            RElbow:false,
            LShoulder:false,
            RShoulder:false,
            LAnkle:false,
            RAnkle:false,
            LKnee:false,
            RKnee:false,
            Hips:false
        }
    }
    partClicked=(ev)=>{
        console.log(ev.target.id)
        let area=ev.target.id;
        switch(area){
            case 'LShoulder':
            this.setState({
                LShoulder:!this.state.LShoulder
            })
            break;
            case 'LElbow':
            this.setState({
                LElbow:!this.state.LElbow
            })
            break;
            case 'LWrist':
            this.setState({
                LWrist:!this.state.LWrist
            })
            break;
            case 'LKnee':
            this.setState({
                LKnee:!this.state.LKnee
            })
            break;
            case 'LAnkle':
            this.setState({
                LAnkle:!this.state.LAnkle
            })
            break;
            case 'RShoulder':
            this.setState({
                RShoulder:!this.state.RShoulder
            })
            break;
            case 'RElbow':
            this.setState({
                RElbow:!this.state.RElbow
            })
            break;
            case 'RWrist':
            this.setState({
                RWrist:!this.state.RWrist
            })
            break;
            case 'RKnee':
            this.setState({
                RKnee:!this.state.RKnee
            })
            break;
            case 'RAnkle':
            this.setState({
                RAnkle:!this.state.RAnkle
            })
            break;
            case 'LowerBack':
            this.setState({
                LowerBack:!this.state.LowerBack
            })
            break;
            case 'Hips':
            this.setState({
                Hips:!this.state.Hips
            })
            break;
            case 'Jaw':
            this.setState({
                Jaw:!this.state.Jaw
            })
            break;
            default:
            break;
        }
    }
    render(){
        return(
            <div className="SvgButtons">
                 <div className="painZone-svg-center">
                <div className="singles">
                    <h5 onClick={this.partClicked} className="bParts-single" id="Hips">Hips</h5>
                    <h5 onClick={this.partClicked} className="bParts-single" id="Jaw">Jaw</h5>
                </div>
                <div className="sides">
                <div className="Rside">
                    <h5 onClick={this.partClicked} className="bParts" id="LShoulder">L Shoulder</h5>
                    <h5 onClick={this.partClicked} className="bParts" id="LElbow">L Elbow</h5>
                    <h5 onClick={this.partClicked} className="bParts" id="LWrist">L Wrist</h5>
                    <h5 onClick={this.partClicked} className="bParts" id="LKnee">L Knee</h5>
                    <h5 onClick={this.partClicked} className="bParts" id="LAnkle">L Ankle</h5>
                </div>
                <div className="Lside">
                    <h5 onClick={this.partClicked} className="bParts" id="RShoulder">R Shoulder</h5>
                    <h5 onClick={this.partClicked} className="bParts" id="RElbow">R Elbow</h5>
                    <h5 onClick={this.partClicked} className="bParts" id="RWrist">R Wrist</h5>
                    <h5 onClick={this.partClicked} className="bParts" id="RKnee">R Knee</h5>
                    <h5 onClick={this.partClicked} className="bParts" id="RAnkle">R Ankle</h5>
                    </div>
                    
                    </div>
                </div>
            <div className="painZone-svg-left-right">
                
                
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.3 217.4" style={{width:'10vw'}}> <g id="Front"><path id="baseFront" className="cls-1" style={{fill:"none", stroke:'#000'}} d="M47.65,123.47c-.3,3.6,2.1,22.5,3.4,30,.6,3.5,2.2,9.3,1.6,12.3a44.46,44.46,0,0,0-.6,12.9c.3,1.9,1.2,10.9-.1,14.2-.7,1.7-1.9,10.5-1.9,10.5-3.3,8.3-1.4,7.9-1.4,7.9,1,1.2,2.8.1,2.8.1a1.71,1.71,0,0,0,2.2-.2,2.2,2.2,0,0,0,2.5-.1c1.4.7,2.8-.6,2.8-.6.8.4,1-.1,1-.1,2.5-.2-1.4-8.1-1.4-8.1-.16-1.28.76-2.45.75-3.52-.06-4.86.15-7.48.15-7.48,6-17.8,6.3-22.5,3.9-29.2-.7-1.9-.8-2.7-.5-3.5.7-1.9.2-9.7,1.1-12.8,1.7-6,3.4-21.1,4.2-28.2,1.2-9.5-4.1-22.3-4.1-22.3-1.2-5.2.5-23.7.5-23.7,2.4,3.7,2.3,10.2,2.3,10.2-.4,6.9,5.5,17.3,5.5,17.3a28.51,28.51,0,0,1,3.9,8.7c0,1.2-.3,4.3-.3,4.3l.1,2.6c0,.7.4,3,.4,4.1-.4,6.9.6,5.6.6,5.6.9,0,1.9-5.5,1.9-5.5,0,1.4-.3,5.7.4,7.3.9,1.9,1.6-.3,1.6-.8.2-8.7.8-6.4.8-6.4.5,7.1,1.1,8.7,2.3,8.1.9-.4.1-8.5.1-8.5,1.5,4.8,2.6,5.6,2.6,5.6,2.4,1.7.9-3,.6-3.9-1.8-4.9-1.8-6.6-1.8-6.6,2.2,4.4,3.9,4.3,3.9,4.3,2.2-.7-1.9-7-4.3-10a22.14,22.14,0,0,1-3.2-4.8c-.7-2.1-1.3-8.7-1.3-8.7-.2-7.8-2.2-11.2-2.2-11.2C75,77.77,74.35,68,74.35,68l-.1-16.6c-1.2-11.3-9.5-11.4-9.5-11.4-8.5-1.3-9.6-4-9.6-4-1.8-2.6-.8-7.5-.8-7.5,1.5-1.2,2.1-4.4,2.1-4.4,2.5-1.9,2.3-4.7,1.2-4.6-.9,0-.7-.7-.7-.7,1.5-12.6-9.6-13.3-9.6-13.3h-1.7s-11.1.6-9.5,13.1c0,0,.2.8-.7.7-1.1,0-1.2,2.7,1.2,4.6,0,0,.6,3.2,2.1,4.4,0,0,1,4.9-.8,7.5,0,0-1.2,2.7-9.6,4,0,0-8.4.1-9.5,11.4l-.2,16.6s-.6,9.9-3.9,15.1c0,0-1.9,3.4-2.1,11.2,0,0-.6,6.6-1.3,8.7a26.56,26.56,0,0,1-3.2,4.8c-2.4,3-6.5,9.2-4.3,10,0,0,1.7.2,3.9-4.3,0,0,0,1.7-1.8,6.6-.3.9-1.8,5.6.6,3.9,0,0,1.1-.8,2.6-5.6,0,0-.8,8.1.1,8.5,1.1.6,1.8-1,2.3-8.1,0,0,.5-2.3.8,6.4,0,.5.7,2.7,1.6.8.8-1.6.4-5.9.4-7.3,0,0,1,5.5,1.9,5.5,0,0,1.1,1.3.6-5.6a23.71,23.71,0,0,1,.4-4.1l.1-2.6s-.3-3-.3-4.3a28.51,28.51,0,0,1,3.9-8.7s5.9-10.5,5.5-17.3c0,0-.1-6.5,2.3-10.2,0,0,1.7,18.5.5,23.7,0,0-5.3,12.8-4.1,22.3.9,7.1,2.5,22.2,4.2,28.2.9,3.1.4,10.9,1.1,12.8.3.8.2,1.6-.5,3.5-2.4,6.7-2.1,11.4,3.9,29.2a67.63,67.63,0,0,1,.14,8c0,.93.9,1.94.76,3,0,0-3.8,7.9-1.4,8.1,0,0,.2.5,1,.1a2.46,2.46,0,0,0,2.8.6,2,2,0,0,0,2.5.1,1.71,1.71,0,0,0,2.2.2s1.7,1.2,2.8-.1c0,0,1.8.4-1.4-7.9,0,0-1.3-8.8-1.9-10.5-1.3-3.3-.4-12.3-.1-14.2a44.46,44.46,0,0,0-.6-12.9c-.6-3,1-8.8,1.6-12.3,1.2-7.4,3.7-26.4,3.4-30l1,.4A1,1,0,0,0,47.65,123.47Z"/>
{this.state.Jaw&&<Jaw/>}
{this.state.LWrist&&<LWrist/>}
{this.state.RWrist && <RWrist/>}
{this.state.LElbow && <LElbow/>}
{this.state.RElbow && <RElbow/>}
{this.state.LShoulder && <LShoulder/>}
{this.state.RShoulder && <RShoulder/>}
{this.state.LAnkle && <LAnkle/>}
{this.state.RAnkle && <RAnkle/>}
{this.state.LKnee && <LKnee/>}
{this.state.RKnee && <RKnee/>}
{this.state.Hips && <Hips/>}
</g></svg>
                
            </div>
           
           
           
            </div>
        )
    }
}