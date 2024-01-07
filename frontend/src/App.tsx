import useUser from "@hooks/useUser";

function App() {
  const x = useUser();
  return <p className="text-red-500">Hello world</p>;
}

export default App;
