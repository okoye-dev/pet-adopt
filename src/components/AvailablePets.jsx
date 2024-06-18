import React, { useState } from "react";
import Button from "./ui/Button";

const AvailablePets = () => {
  const pets = ["Dogs", "Cats", "Rabbits", "Birds"];
  const [isActive, setIsActive] = useState(0);

  return (
    <div>
      Pets Available for Adoption Nearby
      <ul className="flex items-center justify-center gap-3">
        {pets.map((pet, i) => (
          <Button
            key={i}
            variant={isActive === i ? "" : "transparent"}
            onClick={() => setIsActive(i)}
          >
            {pet}
          </Button>
        ))}
      </ul>
    </div>
  );
};

export default AvailablePets;
