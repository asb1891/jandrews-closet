import React from "react";
import Search from "./Search";
import ClothingGrid from './ClothingGrid'
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

export default function ClothingPage() {

    const [clothes, setClothes] = useState(useLoaderData())
    const [search, setSearch] = useState('')

    const filteredClothes = clothes.filter(clothing => clothing.designer_name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div>
            <Search search={search} setSearch={setSearch}/>
            <main className="clothingpage">
                <ClothingGrid clothes={filteredClothes}/>
             </main>
        </div>

    )
}

