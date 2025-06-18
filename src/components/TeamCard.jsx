import React from "react";

export default function TeamCard({ name, role, image }) {
    return (
        <div className="p-5">
            <div className="overflow-hidden relative ">
                <img
                    src={image}
                    alt={name}
                    className=" w-[90%] md:w-[95%] h-auto object-cover"
                />
                {/* Rol  */}
                <span className="absolute top-35 right-0 transform rotate-90 origin-top-right text-xs tracking-widest text-gray-600">
                    {role.toUpperCase()}
                </span>
            </div>
            

            {/* Nombre */}
            <div className="mt-2">
                <h3 className="text-lg font-bold">{name}</h3>
            </div>
        </div>
    );
}