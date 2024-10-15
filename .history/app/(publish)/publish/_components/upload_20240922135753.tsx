"use client";

import { Button } from "@/components/ui/button";
import { ChangeEvent, useRef, useState } from "react";

export default function Uploader() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div>
      <input
        type="file"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setFile(e?.target?.files?.[0] || null)
        }
      />

      <Button>Submit</Button>
    </div>
  );
}
