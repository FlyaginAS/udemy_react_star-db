import './bootstrap.min.css';

const getResource = async (url)=>{
   const res = await  fetch(url);
   if (!res.ok){
       throw  new Error('Could not fetch');
   }
   const body = await  res.json();
   return body;
};
getResource('https://swapi.co/api/people/123123/')
    .then((body)=>{
        console.log(body);
    })
    .catch((err)=>{
        console.log('Could not fetch',err);
    });
