"use client";
import { Heading } from "@/components/heading";
import { ClubIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  year: number;
  rainfall: number;
  pesticides: number;
  temp: number;
  area: string;
  item: string;
};

export default function Form() {
  const { register, handleSubmit } = useForm<FormData>();
  const [result, setResult] = useState<string | null>(null);

  const onSubmit = (data: FormData) => {
    // Call your prediction function/API here
    // setResult(prediction);
    console.log(data);
  };

  return (
    <div>
      <Heading
        title="Crop Yield Prediction"
        description="Predictive model for estimating crop yield based on environmental factors."
        icon={ClubIcon}
        iconColor="text-orange-700"
        bgColor="bg-orange-700/10"
      />
      <div className="flex flex-col items-start px-4 lg:px-8 w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="year"
              >
                Year
              </label>
              <input
                {...register("year")}
                className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="year"
                type="number"
                placeholder="2013"
              />
            </div>
            <div className="w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="rainfall"
              >
                Average Rainfall (mm/year)
              </label>
              <input
                {...register("rainfall")}
                className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="rainfall"
                type="number"
                placeholder="1000"
              />
            </div>
            <div className="w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="pesticides"
              >
                Pesticides (tonnes)
              </label>
              <input
                {...register("pesticides")}
                className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="pesticides"
                type="number"
                placeholder="100"
              />
            </div>
            <div className="w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="temp"
              >
                Average Temperature
              </label>
              <input
                {...register("temp")}
                className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="temp"
                type="number"
                placeholder="25"
              />
            </div>
            <div className="w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="area"
              >
                Area
              </label>
              <input
                {...register("area")}
                className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="area"
                type="text"
                placeholder="Area"
              />
            </div>
            <div className="w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="item"
              >
                Item
              </label>
              <input
                {...register("item")}
                className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="item"
                type="text"
                placeholder="Item"
              />
            </div>
            <div className="w-full">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-40"
                type="submit"
              >
                Predict
              </button>
            </div>
          </div>
        </form>
        {result && <div className="mt-6 text-xl">Prediction: {result}</div>}
      </div>
    </div>
  );
}
