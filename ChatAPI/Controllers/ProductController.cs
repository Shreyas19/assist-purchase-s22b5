﻿using System.Net;
using DataAccessLayer;
using DataModel;
using Microsoft.AspNetCore.Mvc;

namespace ChatAPI.Controllers
{
    [Route("api/product")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductManagement _product;
        public ProductController(IProductManagement product)
        {
            _product = product;
           
        }
        // GET: api/product
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                //return StatusCode(500);
                    return Ok(_product.GetAllProducts());
            }
            catch
            {

                return StatusCode(500);
            }
            
        }
        [HttpPost]
        public HttpStatusCode AddProduct([FromBody] ProductDataModel product)
        {
            
            return _product.AddProduct(product);
        }

        [HttpPut]
        public HttpStatusCode UpdateProduct([FromBody] ProductDataModel product)
        {
            return _product.UpdateProduct(product);
        }

        [HttpDelete]
        public HttpStatusCode RemoveProduct([FromBody] ProductDataModel product)
        {
            return _product.RemoveProduct(product);
        }
    }
    
}
