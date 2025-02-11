"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { MoonIcon, SunIcon } from "lucide-react";

export default function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) {
        return null
    }

    return(
        <Button
        size='sm'
        variant="ghost"
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
            {resolvedTheme === 'dark' ? (
                <MoonIcon className="size-4 text-slate-300"/>
            ) : (
                <SunIcon className="size-4 text-sky-950"/>
            )}
        </Button>
    )
}