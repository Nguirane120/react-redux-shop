import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeSelectedProduct, selectedProduct } from '../redux/actions/producAction'

export const ProductDetails = () => {
  const { productId } =  useParams()
  const dispatch = useDispatch()
  const product = useSelector((state) => state.product)
  console.log(product)

  const fecthProductDetail = async()=>{
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => console.log("ERROR", err))
    dispatch(selectedProduct(response.data))
  }

  useEffect(() =>{
      if(productId && productId !== "") fecthProductDetail()

      return () =>{
          dispatch(removeSelectedProduct())
      }

  }, [])
  const {title, image, category, description, price} = product
    return (
        <>
            <div className="ui grid container">
                {
                    Object.keys(product).length === 0 ?(
                        <div>...Loading</div>
                    ) : (

                <div className="ui placelholder segment">
                    <div className="ui two column stackable center align grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="middle aligned row">
                            <div className="column 1p">
                                <img className="ui fluid" src={image} alt={title}/>
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2>
                                    <a className="ui teal tag label">${price}</a>
                                </h2>
                                <h3 className="ui brown block header">{category}</h3>
                                <p>{description}</p>
                                <div className="ui vertical animated button" tabIndex="0">
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <div className="visible content">Add to card</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    )
                }
            </div>
        </>
    )
}
