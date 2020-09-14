import axios from "@/libs/api.request";

export function getList(params) {
  return request({
    url: "/vue-admin-template/table/list",
    method: "get",
    params
  });
}

export const getSimilarhotel = state => {
  return axios.request({
    url: "/Getsimilarhotel",
    method: "get",
    params: {
      hotel: state
    }
  });
};

export const Hotel = () => {
  return axios.request({
    url: "/Hotel",
    method: "get"
  });
};
// export const getSimilarhotel = () => {
//   return axios.request({
//     url: '/Getsimilarhotel',
//     method: 'get',
//     dataType: 'jsonp',//这里修改成jsonp
//     params: {

//     }
//   })
// }
