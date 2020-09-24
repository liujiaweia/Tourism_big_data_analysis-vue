import axios from "@/libs/api.request";

export function getList(params) {
  return request({
    url: "/vue-admin-template/table/list",
    method: "get",
    params
  });
}

export const getSimilarhotel = (state,citya) => {
  return axios.request({
    url: "/Getsimilarhotel",
    method: "get",
    params: {
      hotel: state,
      city: citya
    }
  });
};

export const Hotel = () => {
  return axios.request({
    url: "/Hotel",
    method: "get"
  });
};

export const getcomment = state => {
  return axios.request({
    url: "/Comment_affect_analyse",
    method: "get",
    params:{
      comment:state
    }
  });
}
// export const getSimilarhotel = () => {
//   return axios.request({
//     url: '/Getsimilarhotel',
//     method: 'get',
//     dataType: 'jsonp',//这里修改成jsonp
//     params: {

//     }
//   })
// }
