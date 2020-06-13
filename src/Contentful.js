import {createClient} from 'contentful';

export default createClient({
   // space:'flonhqe9z7wh',
   // accessToken:'vQX_1WYJiHF7ExD64_eXkzgPiANZjIymnp7hi5Iqgl8'
space:process.env.REACT_APP_API_SPACE,
accessToken:process.env.REACT_APP_ACCESS_TOKEN
});