"use client"

import Image from "next/image"
import { getWidgetServerComponent } from "./server-action";
import { useState } from "react";

function DeployButton() {
    const [content, setCotent] = useState<any>(null);

    const handleClick = async () => {
        const result = await getWidgetServerComponent();
        console.log("🚀 ~ handleClick ~ result:", result)
        setCotent(result);
    }

    return (
        <a
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        <Image
          className="dark:invert"
          src="/vercel.svg"
          alt="Vercel logomark"
          width={16}
          height={16}
        />
        {content}
      </a>
    )
}

export default DeployButton;
