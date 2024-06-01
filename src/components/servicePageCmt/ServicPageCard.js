import Image from 'next/image'
import React from 'react'

const ServicPageCard = (props) => {
 
  return (
    <>
    {props.data.map(data => (
      props.imgside == "left" ? (
      <div  key={data.id}  className="flex flex-col md:flex-row justify-center items-center ">
        <div className="text-white m-2 bg-orange-300 p-6">
          <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
          <p className="mb-4">
           {data.description1}
          </p>
          <p className="mb-4">
            {data.description2}
          </p>
          <p className="mb-4">
            {data.description3}
          </p>
        </div>
        <div className="flex justify-center items-center w-full">
          <Image src={data.image} alt={data.image} width={500} height={500}  />
        </div>
      </div>)
      : 
      ( <div  key={data.id}  className="flex flex-col md:flex-row justify-center items-center ">
        <div className="flex justify-center items-center w-full">
          <Image src={data.image} alt={data.image} width={500} height={500}  />
        </div>
        <div className="text-white m-2 bg-orange-300 p-6">
          <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
          <p className="mb-4">
           {data.description1}
          </p>
          <p className="mb-4">
            {data.description2}
          </p>
          <p className="mb-4">
            {data.description3}
          </p>
        </div>
       </div>
        )
      ))}
      </>
  )
}

export default ServicPageCard
