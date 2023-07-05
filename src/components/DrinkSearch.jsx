import { useState } from "react"
import TextInput from "./ui/TextInput"

export const DrinkSearch = () => {
    const [searchField, setSearchField] = useState('Display the Search')
    return (
        <>
        <label>Search for the Drink : </label>
            <TextInput />
            <p>{searchField}</p>
        </>
    )
}