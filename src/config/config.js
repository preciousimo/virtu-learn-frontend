const development = {
    baseUrl: "http://127.0.0.1:8000/api",
    siteUrl: 'https://myfundz.s3.amazonaws.com',
  };
  
  const production = {
    baseUrl: 'https://virtulearn-api.onrender.com/api',
    siteUrl: 'https://myfundz.s3.amazonaws.com',
  };
  
  const config = process.env.NODE_ENV === 'development' ? development : production;
  
  export default config;
  