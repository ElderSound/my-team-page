import React from "react";
import TeamCard from "./TeamCard";
import { team } from "../data/team";

export default function TeamGrid() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid gap-8 grid-cols-2 lg:grid-cols-3">
                {team.map((member, index) => {
                    const offsetMobile = index % 2 === 0 ? "-mt-6 lg:mt-0" : "";
                    const offsetDesktop = index % 3 === 1 ? "lg:mt-6" : "";

                    return (
                        
                        <div
                            key={member.name}
                            className={`${offsetMobile} ${offsetDesktop} h-full`}
                        >
                            <TeamCard
                                name={member.name}
                                role={member.role}
                                image={member.image}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}