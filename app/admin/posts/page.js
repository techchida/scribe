import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PostList() {
  return (
    <main className="main lg:px-44">
      <div className="container">
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-semibold">Posts</h1>
            <p className="text-slate-500 ">
              Create, edit, and manage the posts on your site.
            </p>
          </div>
          <div></div>
        </div>

        <Tabs defaultValue="account" className="w-full">
          <TabsList className=" bg-white my-10 flex justify-center">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div className="post">
              <div className="postOne py-6 border-b ">
                <div>
                  <h3 className=" font-bold">Seeking Further asylum</h3>
                  <p className="text-xs text-gray-600 font-semibold">
                    24th oct 2024
                  </p>
                </div>
              </div>
              <div className="postOne py-6 border-b ">
                <div>
                  <h3 className=" font-bold">Seeking Further asylum</h3>
                  <p className="text-xs text-gray-500 font-semibold">
                    24th oct 2024
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
