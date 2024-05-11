const Base_URL = "http://localhost:3000"

export const fetcher = async (url) => {
  let responseObject = {errorMssg: " ", responseData:[]}
  try{
    const urlResponse = await fetch(Base_URL + url)
    if (!urlResponse.ok) {
      throw new Error(`HTTP Error ${urlResponse.status}`)
    }
      const data = await urlResponse.json()
      responseObject.errorMssg = ""
      responseObject.responseData = data
      return responseObject;
  }
  catch(err){
    responseObject.errorMssg = err.message;
    return responseObject;

  }
};


export const getCategories = () =>{
  return fetcher("/categories")
}

export const getProducts = (id) =>{
  return fetcher("/products?catId=" + id)
}

export const getProductDetailById = (id) =>{
  return fetcher("/products/" + id)  
}