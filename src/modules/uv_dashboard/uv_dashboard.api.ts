import axios from 'axios';
import * as dashboardData from './uv_dashboard.json';

const getDashboardData = ()=> {
  return axios.get(dashboardData.config.apis.dashboard.urls[0]);
}

const UVDashboardApi = {
  getDashboardData: getDashboardData
};

export default UVDashboardApi;
