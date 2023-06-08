import React from "react";

export default function CardComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.pinimg.com/564x/25/bb/41/25bb413b369ed3f1cba9f13f80f87985.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
}
