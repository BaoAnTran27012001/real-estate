import { postRentTypes, postSoldTypes } from "@/lib/constants";
import { pathname } from "@/lib/pathname";


const navigations = [
  {
    id:1,
    name:'Nhà đất bán',
    pathname:pathname.publics.soldProperties,
    hasSub:true,
    subs:postSoldTypes
  },
  {
    id:2,
    name:'Nhà đất cho thuê',
    pathname:pathname.publics.rentProperties,
    hasSub:true,
    subs:postRentTypes
  },
  {
    id:3,
    name:'Tin tức',
    pathname:pathname.publics.news,
    hasSub:false,
  },
]
export default navigations;