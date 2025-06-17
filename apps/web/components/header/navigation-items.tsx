"use client";

import { Button } from "@workspace/ui/components/button";
import { Calendar } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NavigationItems() {
  return (
    <>
      <Button variant="ghost" asChild>
        <Link href="/about-us">About Us</Link>
      </Button>
      <Button variant="ghost" asChild>
        <Link href="/faqs">FAQs</Link>
      </Button>
      <Button asChild>
        <Link href="https://lu.ma/hexagoncreative.club" target="_blank">
          <Calendar />
          Upcoming Events
        </Link>
      </Button>
    </>
  );
}
