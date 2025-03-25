// AnimationIcônes.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaQrcode, FaLink, FaImage, FaEnvelope, FaFont, FaPhone } from 'react-icons/fa'; // Importation des icônes

const AnimationIcônes = () => {
    const radius = 151.2; // Rayon pour éloigner les icônes à 4 cm (en pixels)
    const numberOfIcons = 5; // Nombre d'icônes à afficher

    return (
        <div className="relative w-72 h-72 mx-auto">
            {/* Icône de code QR */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <FaQrcode className="w-16 lg:w-24 h-16 lg:h-24 text-[#0000FF]" />
            </div>

            {/* Icônes sortantes */}
            <div className="absolute w-full h-full">
                {/** Icônes sortantes */}
                {[{ icon: FaLink, color: "text-blue-600" },
                  { icon: FaImage, color: "text-green-500" },
                  { icon: FaEnvelope, color: "text-red-500" },
                  { icon: FaFont, color: "text-yellow-500" },
                  { icon: FaPhone, color: "text-purple-500" }].map((item, index) => {
                    const angle = (index * (2 * Math.PI / numberOfIcons)); // Calcul de l'angle uniformément réparti
                    const x = Math.cos(angle) * radius; // Calcul de la position X
                    const y = Math.sin(angle) * radius; // Calcul de la position Y

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 0, y: 0 }} // Position initiale au centre
                            animate={{ opacity: 1, x: x, y: y }} // Position finale
                            transition={{ duration: 0.5, delay: index * 0.1 }} // Délai pour chaque icône
                            className={`absolute w-10 h-10`}
                            style={{
                                top: `calc(50% - 20px)`, // Ajustement de la position Y
                                left: `calc(50% - 20px)` // Ajustement de la position X
                            }}
                        >
                            <item.icon className={`w-full h-full ${item.color}`} />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default AnimationIcônes;
