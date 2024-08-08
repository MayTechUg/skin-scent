import React from 'react';

const AnimatedWords = () => {
    const words = ["Skin", "&", "Scent", "", ""];
    
    return (
        <div className="container">
            {words.map((word, index) => {
                const direction = index < words.length / 2 ? 'left' : 'right'; // Determine direction
                return (
                    <div 
                        key={index} 
                        className={`word ${direction}`} 
                        style={{ animationDelay: `${index * 0.5}s` }}
                    >
                        {word}
                    </div>
                );
            })}
        </div>
    );
};

export default AnimatedWords;