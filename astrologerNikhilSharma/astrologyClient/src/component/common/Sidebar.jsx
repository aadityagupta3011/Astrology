import React from 'react';

const Sidebar = ({ heading, links }) => {
  return (
    <aside className="w-full mt-8 lg:mt-0 flex flex-wrap ">
      <div className="bg-gray-100 p-4 border rounded-md w-full">
        <h2 className="text-xl font-semibold text-red-600 mb-4">{heading}</h2>
        
        {/* Make the list flexible with wrap and full width */}
        <ul className="w-full flex flex-col gap-2 ">
          {links.map((link, index) => (
            <li key={index} className="w-full">
              <a href={link.url} className="block text-gray-700 ">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
