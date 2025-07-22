import { useState } from "react";

const ImagePlaceholder = ({ src, alt = "", className = "", placeholderColor = "from-gray-300 to-gray-500" }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Placeholder Overlay */}
            {!loaded && (
                <div className={`absolute inset-0 bg-gradient-to-br ${placeholderColor} animate-pulse rounded`} />
            )}

            {/* Main Image */}
            <img
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)}
                className={` w-full h-full transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
            />
        </div>
    );
};

export default ImagePlaceholder;
