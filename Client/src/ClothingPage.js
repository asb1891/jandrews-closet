import React from "react";
import Search from "./Search";
import ClothingGrid from './ClothingGrid'
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import ClothingForm from "./ClothingForm";

export default function ClothingPage() {

    const [clothes, setClothes] = useState(useLoaderData())
    const [search, setSearch] = useState('')

    const filteredClothes = clothes.filter(clothing => clothing.designer_name.toLowerCase().includes(search.toLowerCase()));

    const onAddClothes = (newClothes) => {
        fetch("/clothes", {
      method: 'POST',
      headers: {
          'Content-Type':'application/json'
      },
      body: JSON.stringify(newClothes)
      })
      .then(res => res.json())
      .then(data => setClothes([...clothes, data]))
      }


    return (
        <div>
            <Search search={search} setSearch={setSearch}/>
            <main className="clothingpage">
                <ClothingGrid clothes={filteredClothes}/>
             </main>
             <footer>
                <ClothingForm onAddClothes={onAddClothes} />
             </footer>
        </div>

    )
}

