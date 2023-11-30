import React, { useState } from "react"


function ClothingForm({ onAddClothes }) {

    const [formData, setFormData] = useState({
        designer_name: "",
        image_url: "",
        description: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        onAddClothes(formData)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="ui-segment">
          <form className="ui form" onSubmit={handleSubmit}>
            <div className="inline fields">
              <input type="text" name="designer-name" placeholder="name" value={formData.designer_name} onChange={handleChange}/>
              <input type="text" name="image" placeholder="image-url" value={formData.image_url} onChange={handleChange}/>
              <input type="text" name="description" placeholder="description" value={formData.description} onChange={handleChange}/>
            </div>
            <button className="ui button" type="submit">
              Add To Inventory
            </button>
          </form>
        </div>
      );
    }

export default ClothingForm