import axios from "axios";

const ScholarshipServices = axios.create({
  baseURL: "https://testapi.io/api/redealumni/scholarships"
});

export default ScholarshipServices;
