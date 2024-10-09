'use client';
import Department from "@/components/officers/Department";
import Image from "next/image";
import departments from "@/data/officers-data";

export default function Officers() {
  return (
    <div className="relative overflow-hidden">
      <header className="text-start mb-28 m-8 lg:m-20 lg:ml-40">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-center lg:text-left">meet the team</h1>
        <p className="text-lg lg:text-xl text-gray-200 text-center lg:text-left">
          get to know the amazing people behind our work!
        </p>
      </header>

      <div className="space-y-12 ml-8 lg:ml-20">
        {departments.map((department, index) => (
          <Department
            key={index}
            name={department.name}
            logoUrl={department.logoUrl}
            people={department.people}
          />
        ))}
      </div>
      {/*Large crystal middle*/}
      <div className="absolute top-[500px] lg:top-96 right-0 lg:right-72 rotate-90 blur-sm transform -translate-y-1/2 z-[-10] animate-pulse">
        <Image
          src="/assets/objects/crystal-1.png"
          alt="Crystal Design Element"
          width={400}
          height={400}
          className="opacity-100"
        />
      </div>
      {/*small crystal left*/}
      <div className="absolute top-72 lg:top-60 right-10 lg:right-24 transform blur-sm -translate-y-1/2 z-[-10] animate-pulse">
        <Image
          src="/assets/objects/crystal-2.png"
          alt="Crystal Design Element"
          width={300}
          height={300}
          className="opacity-100"
        />
      </div>
      {/*small crystal right*/}
      <div className="absolute top-[700px] lg:top-44 -right-10 lg:right-96 rotate-90 blur-sm transform -translate-y-1/2 z-[-10] overflow-hidden animate-pulse">
        <Image
          src="/assets/objects/crystal-2.png"
          alt="Crystal Design Element"
          width={200}
          height={200}
          className="opacity-100"
        />
      </div>
      {/*Rocket Middle*/}
      <div className="absolute top-[1300px] lg:top-[1500px] -right-32 lg:right-32 rotate-90 blur-sm transform -translate-y-1/2 z-[-10]">
        <Image
          src="/assets/objects/rocket-flame.svg"
          alt="Rocket Element"
          width={600}
          height={600}
          className="opacity-100"
        />
      </div>
      {/*Large Crystal*/}
      <div className="absolute bottom-[2800px] md:bottom-[1100px] lg:bottom-[1100px] -left-44 lg:-left-44 blur-sm transform -translate-y-1/2 z-[-10]">
        <Image
          src="/assets/objects/crystal-1.png"
          alt="Crystal Design Element"
          width={400}
          height={400}
          className="opacity-100"
        />
      </div>
      {/*Small Crystal right*/}
      <div className="absolute bottom-[1850px] md:bottom-[500px] lg:bottom-[300px] left-52 lg:left-60 -rotate-180 blur-sm transform -translate-y-1/2 z-[-10]">
        <Image
          src="/assets/objects/crystal-2.png"
          alt="Crystal Design Element"
          width={500}
          height={500}
          className="opacity-100"
        />
      </div>
      {/*small Crystal Bottom last*/}
      <div className="absolute bottom-[2500px] md:bottom-[900px] lg:bottom-[950px] -right-44 lg:-right-44 blur-sm transform -translate-y-1/2 z-[-10]">
        <Image
          src="/assets/objects/crystal-2.png"
          alt="Crystal Design Element"
          width={400}
          height={400}
          className="opacity-100"
        />
      </div>
      {/*large Crystal Bottom last*/}
      <div className="absolute bottom-[600px] md:bottom-32 lg:-bottom-24 -rotate-90 -left-28 lg:-left-28 blur-sm transform -translate-y-1/2 z-[-10]">
        <Image
          src="/assets/objects/crystal-1.png"
          alt="Crystal Design Element"
          width={400}
          height={400}
          className="opacity-100"
        />
      </div>
      {/*Web Bottom*/}
      <div className="absolute blur-sm -right-20 -bottom-[550px] transform -translate-y-1/2 -rotate-12 z-[-10] max-h-screen overflow-hidden">
      <Image
        src="/assets/objects/web.png"
        alt="Web Element"
        width={600}
        height={600}
        className="opacity-100 object-contain"
      />
      </div>
    </div>
  );
}
