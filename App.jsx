import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto p-4">
        <Card title="Hello World">
          <p>This is a simple React + Tailwind component.</p>
          <Button onClick={() => setCount(count + 1)}>Click Me ({count})</Button>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

export default App;
