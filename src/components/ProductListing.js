import axios from 'axios'
import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProduct } from '../redux/actions/producAction'
import ProductComponent from './ProductComponent'

const ProductListing = () => {
    const products = useSelector(state => state)
    const dispatch = useDispatch()

    const fectchproduct = async () =>{
    const response =  await  axios.get("https://fakestoreapi.com/products").catch( error =>{
            console.log(error)
        })
        dispatch(setProduct(response.data))
    };

    
    useEffect(() => {
        fectchproduct()
    })
    console.log("Product: ",products)
    
    return (
        <>
        <div className="ui grid container">
            <ProductComponent/>
        </div>
        </>
    )
}

export default ProductListing
