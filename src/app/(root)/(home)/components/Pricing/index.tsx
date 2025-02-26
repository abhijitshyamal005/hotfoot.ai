
'use client'
import { useState } from "react";
import Trasted from '../trusted'

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    { title: "Basic", price: 10, description: "A basic plan for startups and individual users", features: ["AI-powered analytics", "Basic support", "5 projects limit", "Access to basic AI tools"] },
    { title: "Premium", price: 20, description: "A premium plan for growing businesses", features: ["Advanced AI insights", "Priority support", "Unlimited projects", "Access to all AI tools", "Custom integrations"], highlighted: true },
    { title: "Enterprise", price: 50, description: "An enterprise plan with advanced features", features: ["Custom AI solutions", "24/7 dedicated support", "Unlimited projects", "Access to all AI tools", "Custom integrations", "Data security and compliance"] },
    { title: "Ultimate", price: 80, description: "The ultimate plan with all features for industry leaders", features: ["Bespoke AI development", "White-glove support", "Unlimited projects", "Priority access to new AI tools", "Custom integrations", "Highest data security and compliance"] }
  ];

  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="relative">
        <Trasted />
      </div>
      <div className="relative w-full h-48 bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a110b] to-black"></div>

    
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-black rounded-t-[100%] scale-x-150"></div>
      </div>
      <div className="Relative">
        <div className="text-center">
          <p className="text-xl font-bold">Pricing</p>
          <h2 className="text-6xl font-bold">Simple pricing for everyone.</h2>
          <p className="text-white text-2xl max-w-5xl mx-auto mt-7">
            Choose an <span className="font-semibold">affordable plan</span> that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
          </p>

          {/* Toggle Button */}
          <div className="mt-9 flex justify-center items-center">
            <label className="flex items-center cursor-pointer">
              <div
                className={`relative w-10 h-6 rounded-full transition-colors duration-300 ${isAnnual ? "bg-white" : "bg-[#262626]"
                  }`}
                onClick={() => setIsAnnual(!isAnnual)}
              >
                <div
                  className={`absolute left-1 top-1 w-4 h-4 bg-black rounded-full transition-transform duration-300 ${isAnnual ? "translate-x-6" : ""
                    }`}
                />
              </div>
            </label>
            <span className="ml-3 text-white">{isAnnual ? "Annual" : "Monthly"}</span>
            <button className="mx-2 bg-white text-[#262626] rounded-full px-3 py-1.5 text-xs font-semibold">
              2 MONTHS FREE ✨
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border-[1.5px] ${plan.highlighted ? "border-yellow-400" : "border-gray-700"
                } bg-black`}
            >
              <h3 className="text-xl font-semibold">{plan.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{plan.description}</p>
              <div className="text-3xl font-bold mt-6">
                ${isAnnual ? (plan.price * 12 * 0.83).toFixed(0) : plan.price}
                <span className="text-lg"> / {isAnnual ? "year" : "month"}</span>
              </div>
              <button className="mt-4 w-full bg-white text-black py-1 rounded-lg font-semibold">
                Subscribe
              </button>
              <hr className="mt-10 border-gray-800 ml-7 mr-8 " />
              <ul className="mt-4 space-y-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center ">
                    <span className="text-white bg-green-500 mr-2 px-1  rounded-full">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
