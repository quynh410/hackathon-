"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
interface Products {
  id: number;
  name: string;
  image: string;
  price: number;
}
export default function ProductList() {
  const route = useRouter();
  const [searchItem,setSearchItem]= useState<Products>();
  const [products, setProducts] = useState<any>();
  // gọi API lấy data và render ra màn hình
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((response) => {
        console.log(1111111111, response.data);
        setProducts(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
const handleClick = ()=>{

}

  return (
    <>
      <table className="w-[90pc] bg-white border border-gray-300 absolute">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b border-gray-300 text-left">
              STT
            </th>
            <th className="py-2 px-4 border-b border-gray-300 text-left">
              Tên Sản Phẩm
            </th>
            <th className="py-2 px-4 border-b border-gray-300 text-left">
              Hình Ảnh
            </th>
            <th className="py-2 px-4 border-b border-gray-300 text-left">
              Giá
            </th>
            <th className="py-2 px-4 border-b border-gray-300 text-left">
              Số Lượng
            </th>
            <th className="py-2 px-4 border-b border-gray-300 text-left">
              Chức năng
            </th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product: any, index: any) => (
              <tr key={product.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-gray-300">
                  {index + 1}
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  {product.name}
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-auto rounded"
                  />
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  {product.price.toLocaleString()}đ
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  {product.quantity}
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  <button className="border border-gray-300 bg-gray-300 text-black rounded px-2 py-1 mr-2">
                    Sửa
                  </button>
                  <button className="border border-red-500 bg-red-500 text-white rounded px-2 py-1">
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table> <br />
      <div className="border border-black p-4 max-w-md mx-auto mr-[10px] relative bottom-6">
        <h1 className="text-xl font-semibold mb-4">Thêm mới sản phẩm</h1>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Tên</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Hình ảnh</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"

          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Giá</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"

          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Số lượng</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"

          />
        </div>
        <button onClick={handleClick} className="border border-gray-400 bg-gray-400 text-white w-[300px] px-4 py-2 rounded hover:bg-gray-500 hover:border-gray-500 transition duration-200 ml-[4pc]">
          Thêm
        </button>
      </div>
    </>
  );
}
