import React, { useEffect, useState } from 'react'

const ImagesSlider = () => {
    const [index, setIndex] = useState(0);

    const images = [
    "https://imgs.search.brave.com/cWRDe-WcJenisrtOvABOopzHVL0N7Zh-h_ku8qPb4ow/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saWZl/bmNvbG9ycy5pbi9j/ZG4vc2hvcC9maWxl/cy9zYWFuamgtYmx1/ZS13YWxscGFwZXIt/bXVyYWwud2VicD92/PTE3NzY2ODczMzIm/d2lkdGg9MzIw",
    "https://imgs.search.brave.com/SFT-L2VPijNQgkQ70lV7mIDEowFGtBUXCBmD-VeIC_Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY21l/ZGlhbmV3Lmd1bWxl/dC5pby9wdWIvbWVk/aWEvY2F0YWxvZy9w/cm9kdWN0L2NhY2hl/L2YyZDQyMTU0NmI4/M2I2NGZiM2Y3YTI3/ZDkwMGVkM2VkLzYw/MTIxMDEzU0QwMDg2/Ny9JbmRpYS1DaXJj/dXMtYnktS3JzbmFh/LU1laHRhLUNyZWFt/LVBvbWUtYW5kLVBy/aW5pYS1XYWxscGFw/ZXItNjAxMjEwMTNT/RDAwODY3LTMuanBn",
    "https://imgs.search.brave.com/M05CjrCFXbUJX-X704Tr-mElBsPtw0oia0aY0D2eL38/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dGFwZXRlbmRlcjcw/ZXIuZGUvbWVkaWEv/aW1hZ2UvMjcvYzgv/ZjUvSW1wZXJpYS1B/Xzg2NDY4Ml81MTh4/Mzg5LmpwZw"
  ];
    useEffect(()=>{
       const interval= setInterval(()=>{
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
       },1000);
       return()=>clearInterval((interval));
    },[])

    return (
        <div>
            <h1>Image Slider</h1>

            <img
                src={images[index]}
                alt="img-here"
                style={{ height: "300px", width: "300px" }}
            />
        </div>
    )
}

export default ImagesSlider