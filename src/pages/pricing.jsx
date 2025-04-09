import React from "react";

function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$0",
      description: "Best for Small Teams or Individuals.",
      deals: "Feature details here",
    },
    {
      name: "Professional",
      price: "$19",
      description: "Ideal for Growing Companies.",
      deals: "Feature details here",
    },
    {
      name: "Enterprise",
      price: "$49",
      description: "Ultimate for Enterprise Solutions.",
      deals: "Feature details here",
    },
  ];

  return (
    <div id="pricing" className="m-16">
      <div className="flex flex-col justify-center pt-16 items-center text-blue-600 font-semibold text-s text-center">
        <p>Pricing</p>
        <span className="text-center">___</span>
      </div>
      <h1 className="text-3xl font-bold text-center mt-10">
        Plans tarifaires abordables
      </h1>
      <p className="text-center mt-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />{" "}
        Reiciendis, non reprehenderit adipisci repellat corrupti
      </p>

      <div className="mt-20 flex justify-center gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`${
              plan.name === "Enterprise"
                ? "bg-blue-700 text-white p-8 w-[350px] shadow-lg rounded-xl"
                : "border border-stone-300 rounded-xl p-6 shadow-md hover:shadow-lg w-[300px]"
            }`}
          >
            <h3
              className={`text-xl ${
                plan.name === "Enterprise"
                  ? "font-bold text-5xl"
                  : "font-light text-xl"
              }`}
            >
              {plan.name}
            </h3>

            <div className="flex items-center mt-4 mb-4">
              <p className="text-4xl font-bold">{plan.price}</p>
              <span className="text-s ml-2 ">/month</span>
            </div>

            <p className=" text-xs text-gray-">{plan.description}</p>

            <div className="mt-4 flex flex-col gap-3">
              {[...Array(3)].map((_, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <input type="checkbox" name="features" />
                  <p className="mt-2 text-sm">{plan.deals}</p>
                </div>
              ))}
            </div>

            <button
              className={`mt-4 py-2 px-6 rounded-full ${
                plan.name === "Enterprise"
                  ? "bg-white text-blue-600"
                  : "bg-blue-600 text-white"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
