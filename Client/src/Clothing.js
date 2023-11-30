import React, { useState } from "react"



function Clothing({ clothing }) {
  const { designer_name, image_url, description, price, clothes_id } = clothing
  const assets_folder_url = "assets/"

  const [frontCard, setFrontCard] = useState(true)


  return (
    <div className="clothingcard" id={clothes_id} onClick={() => setFrontCard(!frontCard)}>
      {frontCard ?

        <img src={process.env.PUBLIC_URL + image_url} alt={designer_name} />

        :
        <div className="backcard">
          <h3>{designer_name}</h3>
          <h4>{description}</h4>
          <h5>${price}</h5>
          <button onClick={() => {console.log(clothes_id)}}>X</button>
        </div>
        }
    </div>
  )
}

 

export default Clothing