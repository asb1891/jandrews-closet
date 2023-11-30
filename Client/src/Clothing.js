import React, { useState } from "react"



function Clothing({ clothing }) {
  const { designer_name, image_url, description, price } = clothing
  const assets_folder_url = "assets/"

  const [frontCard, setFrontCard] = useState(true)

  return (
    <div className="clothingcard" onClick={() => setFrontCard(!frontCard)}>
      {frontCard ?

        <img src={process.env.PUBLIC_URL + image_url} alt={designer_name} />

        :
        <div className="backcard">
          <h3>{designer_name}</h3>
          <h4>{description}</h4>
          <h5>${price}</h5>
        </div>
        }


    </div>

  )


}

export default Clothing