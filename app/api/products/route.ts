import { log } from 'console';
import { NextRequest, NextResponse } from 'next/server'
import {products }from '../../database/route'

// const products = [
//     {
//       id: 1,
//       name: 'Cam',
//       image: 'https://cdn-i.vtcnews.vn/resize/th/upload/2022/03/20/screen-shot-2022-03-20-at-092653-09272666.png',
//       price: 12000,
//       quantity: 10
//     },
//     {
//       id: 2,
//       name: 'Nho',
//       image: 'https://www.conngongvang.com/wp-content/uploads/2019/01/nho_den_ninh_thuan-431x431.jpg',
//       price: 34000,
//       quantity: 5
//     },
//     {
//       id: 3,
//       name: 'Táo',
//       image: 'https://baohanam-fileserver.nvcms.net/IMAGES/2021/06/23/tai-sao-qua-tao-co-the-de-duoc-10-thang-ma-khong-h-56-0.jpg',
//       price: 56000,
//       quantity: 8
//     },
//     {
//       id: 4,
//       name: 'Xoài',
//       image: 'https://vnn-imgs-f.vgcloud.vn/2019/06/01/14/tu-vu-be-9-tuoi-suyt-chet-vi-an-xoai-chuyen-gia-canh-bao-khong-an-xoai-neu-co-dau-hieu-sau.jpg',
//       price: 78000,
//       quantity: 12
//     }
//   ];
export async function GET(request:NextRequest, res:any) {

  return NextResponse.json({
    message:"Lấy sản phẩm !",
    data:products,
  })
}
export async function POST(request:NextRequest){
    let dataClient = await request.json()
    products.push(dataClient)
    return NextResponse.json({
      message:"thêm dữ liệu ",
      newProducts: products,
    })
}

