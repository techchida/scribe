import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { EB_Garamond } from "next/font/google";
import EditorComponent from "@/components/component/editor/editor";
import Logo from "@/components/component/logo";
import { ArrowLeft01Icon, MoreVerticalCircle01Icon } from "hugeicons-react";
import Uploadr from "@/components/component/uploadr/uploadr";
import { Textarea } from "@/components/ui/textarea";
import Tags from "@/components/component/tags/tags";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";
const EB = EB_Garamond({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="editorNav py-8">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <div>
                <ArrowLeft01Icon />
              </div>
              <Logo className="h-4" />
            </div>

            <div>
              <Button className="border-none h-8" variant="outline">
                <MoreVerticalCircle01Icon />
              </Button>
              <Drawer>
                <DrawerTrigger>
                  <Button className="h-8 ">Publish</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="container lg:w-2/3">
                    <ScrollArea >
                    <div className="lg:grid  grid-cols-2 justify-center gap-10 py-28">
                      <div className="col-span-1 mb-10">
                        <div>
                          <h3 className="font-semibold mb-1">Preview</h3>
                          <p className="text-xs text-slate-500 mb-6">
                          Add or change tags (up to 5) so readers know what your story is about
                          </p>
                          <Uploadr />
                        </div>

                        <div className="col-span-1">
                          <Textarea
                            className="pt-6 border-0 border-b resize-none rounded-none  focus-visible:ring-white "
                            placeholder="write a preview subtitle . . . "
                          />
                          <small className="text-xs text-slate-500">
                            A summary helps your reader get a summary of what
                            you are trying to convey.
                          </small>
                        </div>
                      </div>

                      <div>
                        <div className="mb-6">
                          <h3 className="font-semibold mb-1">Tags</h3>
                          <p className="text-xs text-slate-500 mb-6">
                          Add or change tags (up to 5) so readers know what your story is about
                          </p>
                          <Tags count={5} />
                        </div>

                        <div>
                          <div className="flex items-center space-x-2">
                            <Switch id="airplane-mode" />
                            <Label htmlFor="airplane-mode">
                              Enable Comments
                            </Label>
                          </div>
                        </div>

                        <div className="flex gap-6 mt-10">
                          <Button >Publish now</Button>
                          <Button variant={'link'} >Schedule for later</Button>
                          </div>
                      </div>
                    </div>
                    </ScrollArea>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
      <main className="pt-8">
        <div className="container">
          <div className="editor">
            <div className="flex justify-center">
              <div className="lg:w-[700px] mx-auto w-full">
                <input
                  placeholder="Add a post title"
                  className={`w-[100%] border-none text-3xl font-bold ${EB.className} outline-none`}
                />

                <div className={`${EB.className}`}>
                  <EditorComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
