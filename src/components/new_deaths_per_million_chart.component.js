import {Component} from "react";
import {Line} from 'react-chartjs-2';


export default class NDPMChart extends Component {
    constructor() {
      super();
      this.state = {
        loading:true,
        labels:null
      };

    }
    componentDidMount() {
      }


    render(){
            return (
            <div className="chartContainer"> <b>New deaths (per million)</b>
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
                            data: this.props.data.lka_new_deaths_smoothed_per_million,
                            pointRadius:0.1
                          },
                          {
                            label: 'India',
                            fill: false,
                            lineTension: 0.5,
                            backgroundColor: 'rgb(8,132,144)',
                            borderColor: 'rgb(8,132,144)',
                            borderWidth: 2,
                            data: this.props.data.ind_new_deaths_smoothed_per_million,
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
                            data: this.props.data.pak_new_deaths_smoothed_per_million,
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
                            data: this.props.data.afg_new_deaths_smoothed_per_million,
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
                            data: this.props.data.npl_new_deaths_smoothed_per_million,
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
                        text:'New deaths (per million)',
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


