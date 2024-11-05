import React from "react";

const services = [
    {
        id: 1,
        title: "Web design",
        description: "Creating visually appealing and user-friendly web designs"
    },
    {
        id: 2,
        title: "Frontend Development",
        description: "Building responsive anad interractive user interface",
    },
    {
        id: 3,
        title: "Backend development",
        description: "Developing robust servere-side logic and database",
    },
];

const Myservice = () => {
return (
    <div className="bg-black text-white py-20" id="services">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map(service => (
                    <div className="bg-gray-500 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105" key={service.id}>
                        <div className="text-right text-2xl font-bold text-tranasparent bg-clip-text bg-gradient-to-r  from-green-600 to-blue-600">{service.id}</div>
                        <h3 className="mt-2 text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-r  from-green-400 to-blue-500">{service.title}</h3>
                        <p className="mt-4 text-gray-300">{service.description}</p>
                        <a href="#services" className="mt-4 inline-block text-green-400 hover:text-blue-500">Read More...</a>
                    </div>


                ))}
            </div>
        </div>
    </div>
)
}

export default Myservice