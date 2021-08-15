import {Component} from "react";
import {Line} from 'react-chartjs-2';


export default class TCPMChart extends Component {
    constructor() {
      super();
      this.state = {
        loading:true,
        labels:null
      };
      this.onHover=this.onHover.bind(this);
    }

    onHover(e) {
       e.target.style.cursor = 'pointer';
    }

    componentDidMount() {
      }


    render(){
            return (
            <div className="chartContainer"> <b>Total cases (per million)</b>
                <br/>
                    <Line
                    data={{
                        labels:this.props.data.labels,
                        datasets: [
                          {
                            label: 'Sri Lanka',
                            fill: false,
                            lineTension: 0.5,
                            backgroundColor: 'rgb(182,96,15)',
                            borderColor: 'rgb(182,96,15)',
                            borderWidth: 2,
                            data: this.props.data.lka_total_cases_per_million,
                            pointRadius:0.1
                          },
                          {
                            label: 'India',
                            fill: false,
                            lineTension: 0.5,
                            backgroundColor: 'rgb(8,132,144)',
                            borderColor: 'rgb(8,132,144)',
                            borderWidth: 2,
                            data: this.props.data.ind_total_cases_per_million,
                            hidden: true,
                            pointRadius:0.1
                          },
                          
                          {
                            label: 'Pakistan',
                            fill: false,
                            lineTension: 0.5,
                            backgroundColor: 'rgb(50,64,8)',
                            borderColor: 'rgb(50,64,8)',
                            borderWidth: 2,
                            data: this.props.data.pak_total_cases_per_million,
                            hidden: true,
                            pointRadius:0.1
                          },
                          {
                            label: 'Bangladesh',
                            fill: false,
                            lineTension: 0.5,
                            backgroundColor: 'rgb(53,132,110)',
                            borderColor: 'rgb(53,132,110)',
                            borderWidth: 2,
                            data: this.props.data.bgd_total_cases_per_million,
                            hidden: true,
                            pointRadius:0.1
                          },
                          {
                            label: 'Afganistan',
                            fill: false,
                            lineTension: 0.5,
                            backgroundColor: 'rgb(128,116,119)',
                            borderColor: 'rgb(128,116,119)',
                            borderWidth: 2,
                            data: this.props.data.afg_total_cases_per_million,
                            hidden: true,
                            pointRadius:0.1
                          },
                          {
                            label: 'Nepal',
                            fill: false,
                            lineTension: 0.5,
                            backgroundColor: 'rgb(180,90,120)',
                            borderColor: 'rgb(180,90,120)',
                            borderWidth: 2,
                            data: this.props.data.npl_total_cases_per_million,
                            hidden: true,
                            pointRadius:0.1
                          },
                          {
                            label: 'Bhutan',
                            fill: false,
                            lineTension: 0.5,
                            backgroundColor: 'rgb(225,50,36)',
                            borderColor: 'rgb(225,50,36)',
                            borderWidth: 2,
                            data: this.props.data.btn_total_cases_per_million,
                            hidden: true,
                            pointRadius:0.1
                          }, 
                          {
                            label: 'Maldives',
                            fill: false,
                            lineTension: 0.5,
                            backgroundColor: 'rgb(35,137,16)',
                            borderColor: 'rgb(35,137,16)',
                            borderWidth: 2,
                            data: this.props.data.mdv_total_cases_per_million,
                            hidden: true,
                            pointRadius:0.1
                          }
                          
                        ]
                      }}
                    options={{
                        responsive:true,
                        maintainAspectRatio: false,
                        title:{
                        display:true,
                        text:'Total cases (per million)',
                        fontSize:20
                        },
                        legend:{
                        display:true,
                        position:'right'
                        },
                        layout:{
                          padding:{

                            bottom:100
                          }
                          
                        }

                    }}
                    />
                </div>
            )
    }

}


