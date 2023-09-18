"use client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from 'next/navigation';


export default function RegisterPage() {
  const router = useRouter()
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({
    phone: "",
    dob: "",
    gender: "",
    height: "",
    weight: "",
    allergies: "",
    conditions: "",
    familyHistory: "",
  });

  const handleNext = () => {
    if(step === 8)
    {
      //submit the form 
      console.log("Form Data:", formData);
      router.push('/profile');
      return;

    }

    if (step < 8) {
      setStep(step + 1);
      const newProgress = Math.floor((step + 1) * (100 / 8));
      setProgress(newProgress);
      console.log(newProgress); // This will log the updated progress
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      const newProgress = Math.floor((step - 1) * (100 / 8));
      setProgress(newProgress);
      console.log(newProgress); // This will log the updated progress
    }
  };
  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <div className="py-3">
              <Label htmlFor="email">Enter Your Phone Number</Label>
            </div>
            <div className="py-3">
              <Input type="text" placeholder="254XXXXXXXXX" name='phone' value={formData.phone}
                onChange={handleInputChange} />
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <div className="py-3">
              <Label htmlFor="number">Enter Your Date of Birth</Label>
            </div>
            <div className="py-3">
              <Input type="date" placeholder="dd/mm/yyyy" name='dob' value={formData.dob}
                onChange={handleInputChange}  />
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <div className="py-3">
              <Label htmlFor="number">Enter Your Gender</Label>
            </div>
            <div className="py-3">
              <Input type="text" placeholder="male,female,other" name='gender' value={formData.gender}
                onChange={handleInputChange}  />
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <div className="py-3">
              <Label htmlFor="number">Enter Your Height in cm</Label>
            </div>
            <div className="py-3">
              <Input type="text" placeholder="178cm" name='height' value={formData.height}
                onChange={handleInputChange}  />
            </div>
          </div>
        );
      case 5:
        return (
          <div>
            <div className="py-3">
              <Label htmlFor="number">Enter Your Weight in Kgs</Label>
            </div>
            <div className="py-3">
              <Input type="text" placeholder="80Kgs" name='weight' value={formData.weight}
                onChange={handleInputChange}  />
            </div>
          </div>
        );
      case 6:
        return (
          <div>
            <div className="py-3">
              <Label htmlFor="number">Enter Any Allergies</Label>
            </div>
            <div className="py-3">
              <Input
                type="text"
                className="h-32"
                placeholder="animals, pollen, mold..."
                name='allergies' value={formData.allergies}
                onChange={handleInputChange} 
              />
            </div>
          </div>
        );
      case 7:
        return (
          <div>
            <div className="py-3">
              <Label htmlFor="number">Enter Any Existing Conditions</Label>
            </div>
            <div className="py-3">
              <Input
                type="text"
                className="h-32"
                placeholder="cancer, rheumantic, diabetis, mental..."
                name='conditions' value={formData.conditions}
                onChange={handleInputChange} 
              />
            </div>
          </div>
        );
      case 8:
        return  (
          <div>
            <div className="py-3">
              <Label htmlFor="number">Enter Any Family History</Label>
            </div>
            <div className="py-3">
              <Input
                type="text"
                className="h-32"
                placeholder="cancer, rheumantic, diabetis, mental..."
                name='familyHistory' value={formData.familyHistory}
                onChange={handleInputChange} 
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-screen bg-white">
      <div className="flex h-full px-3 text-gray-800">
        {/* Left Side */}
        <div className=" relative overflow-auto w-full lg:w-1/2 bg-white flex justify-center px-2 pt-8 ">
          <div className="max-w-md py-4">
            {/* Logo */}
            <div className="flex flex-col items-center  ">
              <h2 className="text-2xl font-primary-black py-4">
                Lets Get You Started{" "}
              </h2>

              <Progress value={progress} />
            </div>

            <div className="w-70 lg:w-80">
              <div className="pt-16">
                <div>{renderStep()}</div>
                <div className="flex justify-between mt-4">
                  <Button onClick={handleBack} disabled={step === 1}>
                    <span className=" px-4">Back</span>
                  </Button>
                  <Button onClick={handleNext} >
                    <span className=" px-4">{step===8 ? 'submit': 'Next'}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="relative hidden lg:block lg:w-1/2 bg-cover bg-center bg-gradient-to-r from-red-800 to-red-500 "></div>
      </div>
    </div>
  );
}
