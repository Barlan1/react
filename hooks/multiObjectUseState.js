import { useState } from "react";
import { createRoot } from "react-dom/client";
function MyCar() {
  const [car, setCar] = useState({
    brand: "Mahindra",
    color: "black",
    year: "2024",
    model: "3X0",
  });

  return (
    <h2>
      my wife bought a {car.color} {car.brand} {car.model} in {car.year}
    </h2>
  );
}
createRoot(document.getElementById("root")).render(<MyCar />);
