"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-[100dvh] flex flex-col">
      <main className="flex-1">
        <section id="projects" className="py-20 md:py-32">
          <div className="flex flex-col justify-center items-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
              My Projects
            </h2>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from(new Array(14)).map((_, index) => {
                return (
                  <Card key={index}>
                    <CardContent className="flex flex-col items-center justify-center p-8">
                      <img
                        src={`/assets/projects/${index + 1}.png`}
                        alt={`Project ${index + 1}`}
                        className="rounded-lg w-24 h-48"
                      />
                      <h3 className="mt-4 text-xl font-bold">
                        Project {index + 1}
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        A web ui same as shown in the above image in Next.js
                      </p>
                      <div className="mt-4 flex gap-2">
                        <Link
                          href={`/${index + 1}`}
                          className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                          prefetch={true}
                        >
                          View Project
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
