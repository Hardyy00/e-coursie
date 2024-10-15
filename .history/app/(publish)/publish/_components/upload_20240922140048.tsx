"use client";

import { Button } from "@/components/ui/button";
import { ChangeEvent, useRef, useState } from "react";

export default function Uploader() {
  const [file, setFile] = useState<File | null>(null);

  const submitHandler = () => {
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", "demo");

    formData.append("description","a demo vid");

    const upload= 
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setFile(e?.target?.files?.[0] || null)
        }
      />

      <Button onClick={submitHandler}>Submit</Button>
    </div>
  );
}
