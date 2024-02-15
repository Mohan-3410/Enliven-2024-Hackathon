"use client";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { HopIcon } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";

interface FormState {
  nitrogen: string;
  phosphorus: string;
  potassium: string;
  temperature: string;
  humidity: string;
  pH: string;
  rainfall: string;
}

export default function Form() {
  const [formState, setFormState] = useState<FormState>({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    pH: "",
    rainfall: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div>
      <Heading
        title="Crop Recommendation System"
        description="Intelligent system providing optimal crop choices based on environmental conditions."
        icon={HopIcon}
        iconColor="text-emerald-500"
        bgColor="bg-emerald-500/10"
      />
      <div className="px-4 lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="py-2 grid grid-cols-1 lg:grid-cols-2 gap-4"
        >
          <input
            name="nitrogen"
            value={formState.nitrogen}
            onChange={handleChange}
            className="w-full py-3 px-3 border border-gray-300 rounded-md lg:col-span-1"
            placeholder="Enter Nitrogen"
          />
          <input
            name="phosphorus"
            value={formState.phosphorus}
            onChange={handleChange}
            className="w-full py-3 px-3 border border-gray-300 rounded-md lg:col-span-1 m-0"
            placeholder="Enter Phosphorus"
          />
          <input
            name="potassium"
            value={formState.potassium}
            onChange={handleChange}
            className="w-full py-3 px-3 border border-gray-300 rounded-md lg:col-span-1"
            placeholder="Enter Potassium"
          />
          <input
            name="temperature"
            value={formState.temperature}
            onChange={handleChange}
            className="w-full py-3 px-3 border border-gray-300 rounded-md lg:col-span-1"
            placeholder="Enter Temperature in °C"
          />
          <input
            name="humidity"
            value={formState.humidity}
            onChange={handleChange}
            className="w-full py-3 px-3 border border-gray-300 rounded-md lg:col-span-1"
            placeholder="Enter Humidity in %"
          />
          <input
            name="pH"
            value={formState.pH}
            onChange={handleChange}
            className="w-full py-3 px-3 border border-gray-300 rounded-md lg:col-span-1"
            placeholder="Enter pH value"
          />
          <input
            name="rainfall"
            value={formState.rainfall}
            onChange={handleChange}
            className="w-full py-3 px-3 border border-gray-300 rounded-md lg:col-span-1"
            placeholder="Enter Rainfall in mm"
          />
          <Button
            type="submit"
            size="crop"
            className="w-full py-5 lg:col-span-2 lg:w-96 mx-auto"
          >
            Get Recommendation
          </Button>
        </form>
      </div>
    </div>
  );
}
