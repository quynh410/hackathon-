import { NextRequest, NextResponse } from 'next/server'
import {products }from '../../../database/route'
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
    let findItem = products.find((item)=>{
        return item.id == res.params.idProducts
    })
  return NextResponse.json({
    message:"Lấy sản phẩm !",
    data:findItem,
  })
}
// export async function PUT(request:NextRequest, params :{params:{id:string,name:string,image:string,price:number,quantity:number}}) {
//   const idProducts = params.params.id
//   const dataClient = await request.json();
//   const findItem = products.findIndex((item)=>{
//     return item.id == +idProducts
//   })
//   if(findItem !== -1){
//     products[findItem].name = dataClient.name
//     products[findItem].image = dataClient.image
//     products[findItem].price = dataClient.price
//     products[findItem].quantity = dataClient.quantity
//     return NextResponse.json({
//       message:"Cập nhật sản phẩm thành công!",
//       data:products,
//     })
//   }
// }
export async function PUT(req: any) {
  const data = await req.json();
  return NextResponse.json({
      message: "Cập nhật sản phẩm thành công",
      product: data
  })
}
// export async function DELETE(request:NextRequest, params :{params:{id:string,name:string,image:string,price:string,quantity:string}}){
//   const idProducts = params.params.id;
//   console.log(idProducts);
  
//   const dataClient = await request.json();
//   const productsFilter = products.filter((item)=> item.id == +idProducts)
//   console.log(22222,productsFilter);
  
//   return NextResponse.json({
//     message:"Xóa sản phẩm thành công",
//     newProducts:productsFilter,
//   })
// }
export async function DELETE(request: NextRequest) {
  const url = new URL(request.url);
  const idProducts = url.pathname.split('/').pop(); 
  if (!idProducts) {
    return NextResponse.json({
      message: "Không thấy ID sản phẩm",
    });
  }
  const idNumber = parseInt(idProducts, 10);
  const productsFilter = products.filter((item) => item.id !== idNumber);
  if (productsFilter.length === products.length) {
    return NextResponse.json({
      message: "Không thấy sản phẩm",
    });
  }
  return NextResponse.json({
    message: "Xóa sản phẩm thành công",
    newProducts: productsFilter,
  });
}