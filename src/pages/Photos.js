import { DataContext } from "../contextCustom"
import React, { useContext } from "react"
import Image from "../components/Image"

function Photos() {
    const {photos} = useContext(DataContext)
    const photosHTML = photos.map((photo, index) => {
        return (
            <Image photo={photo} index={index} key={photo.id}/>
        )
    })
    return (
        <main className="photos">
            {photosHTML}
        </main>
    )
}

export default Photos