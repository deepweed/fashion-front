"use client";

import Checkbox from "@/components/ui/Checkbox";
import { useState } from "react";

export default function Home() {
  const [click, setClick] = useState(false);
  return (
    <div>
      <Checkbox onClick={() => setClick(!click)} isChecked={click}>
        LOL
      </Checkbox>
    </div>
  );
}
