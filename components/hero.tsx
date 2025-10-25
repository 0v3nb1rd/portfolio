'use client'
import { Button } from "@heroui/react";

export default function HeroComponent() {
  return (
    <Button
      className="bg-linear-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
      radius="full"
    >
      Hello World
    </Button>
  );
}
