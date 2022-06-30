const Product = require('../model/product.model');
exports.deleteProduct = async (request,response,next)=>{
    let product = await Product.findById(request.body.id);
    if(product){
        let result = await Product.deleteOne({_id: request.body.id});
        return response.status(202).json({message: 'success', data: product});
    }
    else
     return response.status(404).json({message: 'Not Found'});
    /*
   let product = await Product.findById(request.body.id);
   if(product){
    Product.deleteOne({_id: request.body.id}).then(result=>{
        if(result.deletedCount)
          return response.status(202).json({message: 'success',data: product});
      }).catch(err=>{
        return response.status(500).json({message: 'failed'});
    });  
   }
   else
     return response.status(404).json({message: 'Not found..'});
   */
     /* 
   Product.findById(request.body.id).then(product=>{
      if(product){
        Product.deleteOne({_id: request.body.id}).then(result=>{
            if(result.deletedCount)
              return response.status(202).json({message: 'success',data: product});
          }).catch(err=>{
            return response.status(500).json({message: 'failed'});
          });     
      }
   }).catch(err=>{
     return response.status(404).json({message: 'Not found..'});
   });
   */
     
}
exports.productList = (request,response,next)=>{
    Product.find().then(result=>{
        return response.status(200).json(result);
    }).catch(err=>{
        return response.status(500).json({error: 'Interal Servver Error....'});
    });
}
exports.save = (request,response,next)=>{
  Product.create({
      name: request.body.name,
      price: request.body.price,
      description: request.body.description
  }).then(result=>{
    return response.status(203).json(result);
  }).catch(err=>{
    return response.status(500).json({error: 'Internal Server Error'});
  });
}