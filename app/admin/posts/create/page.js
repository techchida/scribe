import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";

import EditorComponent from "@/components/component/editor/editor";

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <div className="editor">
          <div className="flex justify-center">
            <div className="lg:w-[700px] mx-auto w-full">
              <input
                placeholder="Add a post title"
                className={`w-[100%] border-none text-lg font-bold  outline-none`}
              />

              <div className="">
                <EditorComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
