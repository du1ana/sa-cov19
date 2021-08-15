import {Component} from "react";
import axios from "axios";
import NCPMChart from "./new_cases_per_million_chart.component";
import TCPMChart from "./total_cases_per_million_chart.component";
import NDPMChart from "./new_deaths_per_million_chart.component";


export default class Home extends Component {
    constructor() {
      super();
      this.state = {
        data: {},
        loading:true,
        dataerror:false,
        nav:"nc"
      };
      this.getData=this.getData.bind(this);
      this.handleNavigation=this.handleNavigation.bind(this);
    }
    componentDidMount() {
        this.getData();
      }

    getData(){
        this.setState({ loading: true });
        axios.get('https://covid.ourworldindata.org/data/owid-covid-data.json')
        .then((response) => response.data)
        .then((data) => {
            console.log(data);
          if(data){
            //sa_data: South asian data
              var sa_data = [];
              var sa_data_filtered = [];
              sa_data.push(
                  data.LKA.data, 
                  data.AFG.data, 
                  data.BGD.data,
                  data.BTN.data,
                  data.IND.data,
                  data.MDV.data,
                  data.NPL.data,
                  data.PAK.data
                  );
              //filtering data
              sa_data.forEach(country=>{
                let filtered_country=[];
                console.log(country);
                for(let i=0;i<country.length;i++){
                    if((Date.parse(country[i].date)>=Date.parse('2020-03-08'))){
                      if(country[i].new_cases_smoothed_per_million<0)
                        country[i].new_cases_smoothed_per_million=0;
                      if(country[i].new_cases<0)
                        country[i].new_cases=0;
                      filtered_country.push(country[i])
                    }
                }
                sa_data_filtered.push(filtered_country);
              })

              console.log(sa_data_filtered);


              var labels = []
              var 
                lka_new_cases_smoothed_per_million=[],
                lka_new_deaths_smoothed_per_million=[],
                lka_total_cases_per_million=[],
                lka_new_cases=[],
                afg_new_cases_smoothed_per_million=[],
                afg_new_deaths_smoothed_per_million=[],
                afg_total_cases_per_million=[],
                afg_new_cases=[],
                bgd_new_cases_smoothed_per_million=[],
                bgd_total_cases_per_million=[],
                bgd_new_cases=[],
                btn_new_cases_smoothed_per_million=[],
                btn_total_cases_per_million=[],
                btn_new_cases=[],
                ind_new_cases_smoothed_per_million=[],
                ind_new_deaths_smoothed_per_million=[],
                ind_total_cases_per_million=[],
                ind_new_cases=[],
                mdv_new_cases_smoothed_per_million=[],
                mdv_total_cases_per_million=[],
                mdv_new_cases=[],
                npl_new_cases_smoothed_per_million=[],
                npl_new_deaths_smoothed_per_million=[],
                npl_total_cases_per_million=[],
                npl_new_cases=[],
                pak_new_cases_smoothed_per_million=[],
                pak_new_deaths_smoothed_per_million=[],
                pak_total_cases_per_million=[],
                pak_new_cases=[]
                ;

              //labels (taken from MDV dataset)
              data.MDV.data.forEach(element => {
                  labels.push(element.date);
                });
              //Sri Lanka
                sa_data_filtered[0].forEach(element => {
                  lka_new_cases_smoothed_per_million.push(element.new_cases_smoothed_per_million);
                  lka_new_deaths_smoothed_per_million.push(element.new_deaths_smoothed_per_million);
                  lka_total_cases_per_million.push(element.total_cases_per_million);
                  lka_new_cases.push(element.new_cases);
                });
              //afganistan
              sa_data_filtered[1].forEach(element => {
                afg_new_cases_smoothed_per_million.push(element.new_cases_smoothed_per_million);
                afg_new_deaths_smoothed_per_million.push(element.new_deaths_smoothed_per_million);
                afg_total_cases_per_million.push(element.total_cases_per_million);
                afg_new_cases.push(element.new_cases);
              });
              //bangladesh
              sa_data_filtered[2].forEach(element => {
                bgd_new_cases_smoothed_per_million.push(element.new_cases_smoothed_per_million);
                bgd_total_cases_per_million.push(element.total_cases_per_million);
                bgd_new_cases.push(element.new_cases);
              });
              //bhutan
              sa_data_filtered[3].forEach(element => {
                btn_new_cases_smoothed_per_million.push(element.new_cases_smoothed_per_million);
                btn_total_cases_per_million.push(element.total_cases_per_million);
                btn_new_cases.push(element.new_cases);
              });
              //ind
              sa_data_filtered[4].forEach(element => {
                ind_new_cases_smoothed_per_million.push(element.new_cases_smoothed_per_million);
                ind_new_deaths_smoothed_per_million.push(element.new_deaths_smoothed_per_million);
                ind_total_cases_per_million.push(element.total_cases_per_million);
                ind_new_cases.push(element.new_cases);
              });
              //mdv
              sa_data_filtered[5].forEach(element => {
                mdv_new_cases_smoothed_per_million.push(element.new_cases_smoothed_per_million);
                mdv_total_cases_per_million.push(element.total_cases_per_million);
                mdv_new_cases.push(element.new_cases);
              });
              //npl
              sa_data_filtered[6].forEach(element => {
                npl_new_cases_smoothed_per_million.push(element.new_cases_smoothed_per_million);
                npl_new_deaths_smoothed_per_million.push(element.new_deaths_smoothed_per_million);
                npl_total_cases_per_million.push(element.total_cases_per_million);
                npl_new_cases.push(element.new_cases);
              });
              //pak
              sa_data_filtered[7].forEach(element => {
                pak_new_cases_smoothed_per_million.push(element.new_cases_smoothed_per_million);
                pak_new_deaths_smoothed_per_million.push(element.new_deaths_smoothed_per_million);
                pak_total_cases_per_million.push(element.total_cases_per_million);
                pak_new_cases.push(element.new_cases);
              });
              this.setState({
                  labels,
                  lka_new_cases_smoothed_per_million,
                  lka_new_deaths_smoothed_per_million,
                  lka_total_cases_per_million,
                  lka_new_cases,
                  afg_new_cases_smoothed_per_million,
                  afg_new_deaths_smoothed_per_million,
                  afg_total_cases_per_million,
                  afg_new_cases,
                  bgd_new_cases_smoothed_per_million,
                  bgd_total_cases_per_million,
                  bgd_new_cases,
                  btn_new_cases_smoothed_per_million,
                  btn_total_cases_per_million,
                  btn_new_cases,
                  ind_new_cases_smoothed_per_million,
                  ind_new_deaths_smoothed_per_million,
                  ind_total_cases_per_million,
                  ind_new_cases,
                  mdv_new_cases_smoothed_per_million,
                  mdv_total_cases_per_million,
                  mdv_new_cases,
                  npl_new_cases_smoothed_per_million,
                  npl_new_deaths_smoothed_per_million,
                  npl_total_cases_per_million,
                  npl_new_cases,
                  pak_new_cases_smoothed_per_million,
                  pak_new_deaths_smoothed_per_million,
                  pak_total_cases_per_million,
                  pak_new_cases
              }
              )
            this.setState({
              loading: false,
              data: data
            });



          }else{
            this.setState({
              loading: false,
              dataerror: true
            });
          }
        });
    }
  
    handleNavigation(str){
      this.setState({nav:str});
    }
    

    render(){
        if(this.state.loading){
            return (<div>Loading</div>)
        }
        else if(this.state.dataerror){
            return (<div>Data error</div>)
        }else{
            return (
  <div className="home container">
    <div className="header row">
      <div className="col-md-7 col-sm-12">
        <h3>South Asian COVID-19 statistics</h3>
      </div> 
      <div className="btn-group btn-group-sm col-md-5 col-sm-12" role="group" aria-label="Basic example">

          <button type="button" 
            onClick={() => this.handleNavigation("nc")}
            className={(this.state.nav==='nc')?"btn btn-sm btn-primary active":"btn btn-sm btn-primary"} >
            New Cases
          </button>

          <button type="button" 
            onClick={() => this.handleNavigation("tc")}
            className={(this.state.nav==='tc')?"btn btn-sm btn-primary active":"btn btn-sm btn-primary"} >
              Total Cases
          </button>

          <button type="button" 
            onClick={() => this.handleNavigation("nd")}
            className={(this.state.nav==='nd')?"btn btn-sm btn-primary active":"btn btn-sm btn-primary"} >
              New Deaths
            </button>

      </div>
  </div>
  
 
  {(this.state.nav==='nc')?<NCPMChart className="chartcontainer" data={this.state}/>:null}
  {(this.state.nav==='tc')?<TCPMChart className="chartcontainer" data={this.state}/>:null}
  {(this.state.nav==='nd')?<NDPMChart className="chartcontainer" data={this.state}/>:null}
</div>
                
            )
        }

    }

}
