import { REACT_APP_API_KEY, API_URL, IMG_URL, API_SEARCH} from "./constans";

export const generateUrl = path =>`${API_URL}${path}?api_key=${REACT_APP_API_KEY}`;
export const generateSearch =  query =>`${API_SEARCH}?api_key=${REACT_APP_API_KEY}&query=${query}`;
export const calculatePopularity = popularity => Math.round(popularity *10)+'%';
export const convertDate = date => {
    let [_,b,c, d] = new Date(date).toString().split(' ');
    return `${b} ${c}, ${d}`
}
export const generateImageUrl = poster_path => IMG_URL+poster_path;
export const generateHref = href => `/details/${href}`;