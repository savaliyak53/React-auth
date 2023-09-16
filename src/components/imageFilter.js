import React, { useMemo, useState } from "react";
// import IMage from "../../public/image/image1/jeans-1.jpg";

const ImageFilter = () => {
  const [handleFilter, setHandleFilter] = useState("All");
  console.log(handleFilter);
  const images = [
    {
      img: "image/image1/jeans-1.jpg",
      type: "jeans",
    },
    {
      img: "image/image1/jeans-2.webp",
      type: "jeans",
    },
    {
      img: "image/image1/shirt-2.avif",
      type: "shirt",
    },
    {
      img: "image/image1/shirt-3.avif",
      type: "shirt",
    },
    {
      img: "image/image1/shirt-photo1.jpg",
      type: "shirt",
    },
    {
      img: "image/image1/shoes-1.jpeg",
      type: "shoes",
    },
    {
      img: "image/image1/shoes-2.jpg",
      type: "shoes",
    },
    {
      img: "image/image1/shoes-3.jpg",
      type: "shoes",
    },
    {
      img: "image/image1/t-shirt1.jpg",
      type: "t-shirt",
    },
    {
      img: "image/image1/t-shirt2.jpg",
      type: "t-shirt",
    },
    {
      img: "image/image1/t-shirt3.jpg",
      type: "t-shirt",
    },
  ];

  const imageFilter = useMemo(() => {
    if (handleFilter === "All") {
      return images;
    } else {
      const data = images.filter((img) => img.type === handleFilter);
      return data;
    }
  });

  return (
    <div>
      <div className="flex flex-row justify-evenly mt-3">
        <button
          type="button"
          className="button"
          onClick={() => setHandleFilter("All")}
        >
          ALL
        </button>
        <button
          type="button"
          className="button"
          onClick={() => setHandleFilter("jeans")}
        >
          Jeans
        </button>
        <button
          type="button"
          className="button"
          onClick={() => setHandleFilter("shirt")}
        >
          shirt
        </button>
        <button
          type="button"
          className="button"
          onClick={() => setHandleFilter("t-shirt")}
        >
          T-shirt
        </button>
        <button
          type="button"
          className="button"
          onClick={() => setHandleFilter("shoes")}
        >
          Shoes
        </button>
      </div>
      <div className="w-full flex flex-wrap gap-3 justify-center mb-5">
        {imageFilter.map((image, index) => {
          return (
            <img
              src={`${process.env.PUBLIC_URL}/${image.img}`}
              className="w-96 h-96 border-2 border-blue-300 rounded-lg shadow-md shadow-black outline outline-primary-delft-dark p-2"
              alt={image.type}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageFilter;
