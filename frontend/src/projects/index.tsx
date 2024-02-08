import logo from "./digiana-clock/logo.jpg";
import { ProjectsMeta, ProjectMeta } from "./meta.ts";

export default function Projects() {
  return (
    <div>
      <h1 className="text-xl text-red-500 underline text-bold">Projects</h1>
      <div className="mt-2 w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-2 gap-y-4 p-2">
        {ProjectsMeta.map((meta) => {
          return <Project meta={meta} key={meta.name} />;
        })}
      </div>
    </div>
  );
}

const Project = ({ meta }: { meta: ProjectMeta }) => {
  return (
    <section className="shadow">
      <div className="border border-primary rounded overflow-hidden bg-secondary text-white ">
        <div className="overflow-hidden bg-white flex items-center justify-center">
          <img
            src={logo}
            alt=""
            className="border-b p-2 w-1/2 sm:w-2/3 hover:scale-[1.2] transform transition duration-700"
          />
        </div>

        <div className="p-2">
          <p className="text-xl">{meta.name}</p>
          <span className="text-sm text-gray-100">{meta.description}</span>
        </div>
      </div>
    </section>
  );
};
