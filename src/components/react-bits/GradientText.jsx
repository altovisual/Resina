import React from 'react';

const GradientText = ({
    children,
    className = "",
    colors = ["#00ff62ff", "#50a4bbff", "#00ffbfff", "#50bb8eff", "#00fbffff"],
    animationSpeed = 8,
    showBorder = false,
}) => {
    const gradientStyle = {
        backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
        animationDuration: `${animationSpeed}s`,
    };

    return (
        <div className={`relative inline-block ${className}`}>
            {showBorder && (
                <div
                    className="absolute -inset-[1px] rounded-lg animate-gradient-slow opacity-30"
                    style={gradientStyle}
                ></div>
            )}
            <div
                className="relative bg-clip-text text-transparent animate-gradient-slow bg-[length:300%_100%]"
                style={gradientStyle}
            >
                {children}
            </div>
        </div>
    );
};

export default GradientText;
