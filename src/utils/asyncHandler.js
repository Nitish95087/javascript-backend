
const asyncHandler = (requestHandler)=>{
  (req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((err)=> next(err))
  }
}

export {
    asyncHandler
}


/* const middlewarefunction = asyncHandler(()=>{
    console.log("RequestHandler");
})

middlewarefunction().then((res)=>{
   console.log(res);
}).catch(error){
    console.log(error);
} */


/* const asyncHandler = (fn) => async (req, res,next) =>{
    try{

        await fn(req,res,next)
        
    }catch(error){
        res.status(err.code || 500).json({
            success: false,
            message: error.message
        })
    }
} */