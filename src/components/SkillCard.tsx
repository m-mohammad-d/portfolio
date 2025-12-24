import React from "react";

const colors = [
  "#61DAFB",
  "#0070f3",
  "#3178C6",
  "#06B6D4",
  "#FFFFFF",
  "#E535AB",
  "#0C344B",
];

export default function SkillCard({
  skills = [],
}: {
  skills?: { name: string; icon?: string }[];
}) {
  return (
    <ul className="grid grid-cols-2 gap-4 lg:gap-0 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {skills.map((skill, index) => {
        const color = colors[index % colors.length];
        return (
          <li
            key={index}
            style={{ "--clr": color } as React.CSSProperties}
            className="
              inline-flex items-center justify-center gap-2 p-4 w-full h-16
              text-base md:text-lg font-bold text-(--clr-txt)
              
              transition-colors duration-500 ease-in-out
              
              hover:bg-(--clr) hover:text-(--clr-comp) hover:transition-none
              cursor-pointer rounded-lg
            "
          >
            {skill.icon && (
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-5 h-5 object-contain"
              />
            )}
            <span className="truncate">{skill.name}</span>
          </li>
        );
      })}
    </ul>
  );
}
