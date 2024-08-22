"use client"
import axios from 'axios';
import { log } from 'console';
import React, { useEffect, useState } from 'react'
const products = [
    {
        id: 1,
        name: 'Cam',
        image: 'https://cdn-i.vtcnews.vn/resize/th/upload/2022/03/20/screen-shot-2022-03-20-at-092653-09272666.png',
        price: 12000,
        quantity: 10
    },
    {
        id: 2,
        name: 'Nho',
        image: 'https://www.conngongvang.com/wp-content/uploads/2019/01/nho_den_ninh_thuan-431x431.jpg',
        price: 34000,
        quantity: 5
    },
    {
        id: 3,
        name: 'Táo',
        image: 'https://baohanam-fileserver.nvcms.net/IMAGES/2021/06/23/tai-sao-qua-tao-co-the-de-duoc-10-thang-ma-khong-h-56-0.jpg',
        price: 56000,
        quantity: 8
    },
    {
        id: 4,
        name: 'Xoài',
        image: '',
        price: 78000,
        quantity: 12
    }
]
export default function page() {
    const [products,setProducts] = useState<any>();
    // gọi API lấy data và render ra màn hình
    useEffect(()=>{
        axios.get("http://localhost:3000/api/products")
        .then((response)=>{
            console.log(111111111111111,response.data);
            setProducts(response.data.data);
        })
        .catch((err)=>{
            console.log(err);
            
        })
    },[])
  return (
    <>
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên Sản Phẩm</th>
          <th>Hình Ảnh</th>
          <th>Giá</th>
          <th>Số Lượng</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        {
            products && products.map((product:any,index:any)=>(
                <tr key={product.id}>
                  <td>{index+1}</td>
                  <td>{product.name}</td>
                  <td>
                    <img src={product.image} alt={product.name} width="100" />
                  </td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    {/* <button onClick={()=>handleDeleteProduct(product.id)}>Xóa</button> */}
                  </td>
                </tr>
            ))
        }
      </tbody>
    </>
  )
}
