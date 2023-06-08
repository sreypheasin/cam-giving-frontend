import Image from 'next/image'

export default function Home() {
  return (
    <main className="home flex min-h-screen flex-col items-center justify-between p-24">
      <div className="carousel carousel-end rounded-box h-100">
        <div className="carousel-item">
          <img
            src="https://i.pinimg.com/564x/f6/10/fe/f610feb7dda0168bb968a8830fd16b9c.jpg"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.pinimg.com/564x/40/fa/53/40fa53af7d72b153c48fb476513274e2.jpg"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.pinimg.com/564x/bf/51/08/bf5108ecfc772e8c5395dd0a92e81cb9.jpg"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.pinimg.com/564x/1f/d4/ea/1fd4eaacaa11f85562d20c48d5e77855.jpg"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.pinimg.com/564x/82/57/80/82578061bd2eda9d87e2005c6e8c2436.jpg"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.pinimg.com/564x/93/11/05/931105d308e7f219f0f96945d7c93b20.jpg"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.pinimg.com/564x/40/a5/91/40a59113c071d0d88823dfc3b9cefbf1.jpg"
            alt="Drink"
          />
        </div>
      </div>
      {/* <CardComponent/> */}
    </main>
  );
}
