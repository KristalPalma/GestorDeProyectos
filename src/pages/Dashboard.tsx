import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { RiHashtag, RiLineChartLine } from "react-icons/ri";

function Dashboard () {
    return (
<div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
        <Header />
        {/* Section 1 */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
          {/* Card 1 */}
          <div className="bg-background-third p-8 rounded-xl text-gray-300 flex flex-col gap-6">
            <RiLineChartLine className="text-5xl" />
            <h4 className="text-2xl">Ventas</h4>
            <span className="text-5xl text-white">$ 8,350</span>
            <span className="py-1 px-3 bg-primary-300/80 rounded-full">
              Aumento este mes: +10%
            </span>
          </div>
          {/* Card 2 */}
          <div className="p-4 bg-background-latte rounded-xl flex flex-col justify-between gap-4 drop-shadow-2xl">
            <div className="flex items-center gap-4 bg-primary-100/10 rounded-xl p-4">
              <span className="bg-Brown-third text-gray-300 text-2xl font-bold p-4 rounded-xl">
                60
              </span>
              <div>
                <h3 className="font-bold">Servicio #1</h3>
                <p className="text-gray-500">Soft to all</p>
              </div>
            </div>
            <div className="bg-primary-100/10 rounded-xl p-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-Brown-third text-gray-300 text-2xl font-bold p-4 rounded-xl">
                  32
                </span>
                <div>
                  <h3 className="font-bold">Servicio #2</h3>
                  <p className="text-gray-500">Dermapen</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span className="bg-primary-100/20 py-1 px-4 rounded-full">
                    Servicios más solicitados 
                </span>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
            <h1 className="text-2xl font-bold mb-8">Tus servicios</h1>
            <div className="bg-background-beige p-8 rounded-xl shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <img
                  src="src/images/soft to all.png"
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-bold">Soft to all</h3>
                  <p className="text-gray-500">$1,200</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="src/images/speed.png"
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-bold">Speed</h3>
                  <p className="text-gray-500">$1,000</p>
                </div>
              </div>
              <div className="flex justify-end">
                <a
                  href="#"
                  className="hover:text-primary-100 transition-colors hover:underline"
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Section 2 */}
        <section className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
          <div>
            <h1 className="text-2xl font-bold mb-8">Próximas citas</h1>
            <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
              {/* Card 1 */}
              <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                <div className="col-span-2 flex items-center gap-4">
                  <img
                    src="src/images/cliente.jpg"
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold">Alexa López</h3>
                    <p className="text-gray-500">Limpieza facial con Dermapen </p>
                  </div>
                </div>
                <div>
                  <span className="bg-amber-100 text-green-800 py-1 px-3 rounded-full font-medium">
                    Pagado
                  </span>
                </div>
                <div>
                  <span className="font-bold">$ 1,500.00</span>
                </div>
              </div>
              {/* Card 2 */}
              <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                <div className="col-span-2 flex items-center gap-4">
                  <img
                    src="src/images/cliente.jpg"
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold">Melanie Martinez</h3>
                    <p className="text-gray-500">Antieging y rutina de skincare</p>
                  </div>
                </div>
                <div>
                  <span className="bg-red-100 text-red-800 py-1 px-3 rounded-full font-medium">
                    Pendiente
                  </span>
                </div>
                <div>
                  <span className="font-bold">$ 2,000.00</span>
                </div>
              </div>
            </div>
            <div className="bg-primary-900 text-gray-300 p-8 rounded-xl shadow-2xl flex items-center justify-between flex-wrap xl:flex-nowrap gap-8">
              <div>
                <RiHashtag className="text-4xl -rotate-12"/>
              </div>
              <div>
                <h5 className="font-bold text-white">Engage with clients</h5>
                <h5>Join slack channel</h5>
              </div>
              <div className="w-full xl:w-auto">
                <button className="bg-primary-100 py-2 px-6 rounded-xl text-white w-full">
                  Join now
                </button>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-8">Producto top</h1>
            <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src="src/images/Producto.png"
                    className="w-14 h-14 object-cover rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">THE ORDINARY SALICYLIC ACID </h3>
                    <p className="text-gray-500">2% SOLUTION - 30 ML</p>
                  </div>
                </div>
                <div>
                  <span className="bg-primary-100 py-2 px-4 rounded-full text-white">
                    Design
                  </span>
                </div>
              </div>
              <div>
                <h5 className="text-lg font-bold">
                Acerca de este artículo
                </h5>
                <p className="text-gray-500">
                Libre de sulfatos, parabenos y Ftalatos, apto para adolescentes con piel propensa a las imperfecciones.
                </p>
              </div>
              <div className="bg-primary-100/10 flex flex-col md:flex-row items-center justify-between gap-4 py-8 px-4 rounded-lg">
                <div>
                  <sup className="text-sm text-gray-500">$</sup>{" "}
                  <span className="text-2xl font-bold mr-2">3104</span>
                  <span className="text-sm text-gray-500">/ month</span>
                </div>
                <div>
                  <span className="border border-primary-100 text-primary-100 py-2 px-4 rounded-full">
                    Más productos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;