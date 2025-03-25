import { useState } from "react"
import {QRCodeSVG} from 'qrcode.react'

function Url () {
    
    const [qrValue, setQrValue] = useState("");
    const [color, setColor] = useState("#ffffff");
    const [bgColor, setBgColor] = useState("#000000");
    const [imageInt, setImageInt] = useState("");
    const [logoHeight, setLogoHeight] = useState(35);
    const [logoWidth, setLogoWidth] = useState(35);
    const [error, setError] = useState("");

    const [url, setUrl] = useState("");
    const [tempColor, setTempColor] = useState("#ffffff");
    const [tempBgColor, setTempBgColor] = useState("#000000");
    const [tempImageInt, setTempImageInt] = useState("");
    const [tempLogoHeight, setTempLogoHeight] = useState(35);
    const [tempLogoWidth, setTempLogoWidth] = useState(35);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;
    
        const reader = new FileReader();
        reader.onloadend = () => {
            setTempImageInt(reader.result);
        };
        reader.readAsDataURL(file);
      };

      const isValidUrl = (str) => {
        try {
          new URL(str);
          return true;
        } catch {
          return false;
        }
      };

      const handleClick = (e) => {
        e.preventDefault()

        if (!isValidUrl(url)) {
            setError("Veuillez entrer une URL valide.");
            return;
          }
          
        setError("");
        setQrValue(url);
        setColor(tempColor);
        setBgColor(tempBgColor);
        setImageInt(tempImageInt);
        setLogoHeight(tempLogoHeight);
        setLogoWidth(tempLogoWidth);
      };
      
      const options = [
        { value: 'option1', label: <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-4" /> },
        { value: 'option2', label: <label htmlFor="" className="start text-lg font-medium">Hauteur <input type="number" className="border p-2 rounded-md w-72 mb-4" onChange={(e) => setTempLogoHeight(e.target.value)} /></label> },
        { value: 'option3', label: <label htmlFor="" className="text-lg font-medium">Largeur <input type="number" id="" className="border p-2 rounded-md w-72 mb-4" onChange={(e) => setTempLogoWidth(e.target.value)} /> </label> },
        
      ];
    return(
      <section> 
         
        <div className="flex flex-wrap gap-y-5 gap-x-10">
          
            <form className="flex flex-col items-start gap-y-5" action="">
              <h1 className="text-2xl font-bold text-[#0000FF]">Lien/URL</h1>
              <input 
                type="url"
                value={ url}
                className={`text-[#0000FF] border-2 border-[#0000FF] p-2 rounded-md w-80 mb-4 ${error && "border-red-500"}`}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Entrez une URL"
              />
                
                {error && <p className="text-red-500">{error}</p>}

                <button
                    onClick={handleClick}
                    className="bg-[#0000FF] text-white px-4 py-2 rounded-2xl">
                    Générer QR Code
                </button>
            </form>

            <div className="bg-blue-50 rounded-xl  justify-center">
                  
                {qrValue && <QRCodeSVG value={qrValue} fgColor={color} bgColor={bgColor} size={170} imageSettings={
                    imageInt
                    ? {
                        src: imageInt, // Image intégrée en base64
                        height: logoHeight, // Taille de l’image dans le QR Code
                        width: logoWidth,
                        excavate: true, // Garde un espace clair derrière l'image
                      }
                    : undefined
                     } />}
                    

                <div className=" items-center gap-4 mb-4">
                    <label className="text-lg font-medium">Couleur 
                    <input
                    type="color"
                    value={color}
                    onChange={(e) => setTempColor(e.target.value)}
                    className="w-10 h-10 p-1 border rounded-md"/>
                    </label>
                    <label htmlFor="" className="text-lg font-medium">Background Color</label>
                    <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setTempBgColor(e.target.value)}
                    className="w-10 h-10 p-1 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                  <label htmlFor="select" className="block text-sm font-medium text-gray-700">
                    Sélectionnez une option
                  </label>
                  <select
                    id="select"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    <option value="" disabled>Sélectionnez une option</option>
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                    ))}
                  </select>
                </div>     
            </div>
        </div>
      </section>  
    )
}

export default Url