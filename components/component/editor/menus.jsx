import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

import { HexColorPicker } from "react-colorful";

import Uploadr from "@/components/component/uploadr/uploadr";

import {
  Heading01Icon,
  Heading02Icon,
  Heading03Icon,
  ParagraphIcon,
  QuoteDownIcon,
  TextBoldIcon,
  TextItalicIcon,
  TextStrikethroughIcon,
  LeftToRightListBulletIcon,
  LeftToRightListNumberIcon,
  ImageAdd02Icon,
  AlignBoxMiddleCenterIcon,
  AlignBoxMiddleLeftIcon,
  AlignBoxMiddleRightIcon,
  TextUnderlineIcon,
  Link05Icon,
  Unlink05Icon,
  ColorsIcon,
  MoreVerticalIcon,
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
} from "hugeicons-react";

export const Bubble = ({
  editor,
  setLink,
  setUrlRef,
  setColor,
  setImage,
  getLink,
  image,
  addImage,
  activeUrl,
  color,
}) => {
  return (
    <div className="border menu flex items-center border-slate-300 bg-white p-1 rounded-md toolbar w-[auto]">
      <Popover>
        <PopoverTrigger asChild>
          <button variant="outline">
            <ParagraphIcon />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-36 mt-4">
          <div className="">
            <div className="cursor-pointer">
              <span
                onClick={() =>
                  editor.chain().focus().setParagraph({ level: 1 }).run()
                }
                className={editor.isActive("paragraph") ? "is-active" : ""}
              >
                <span className="typgraph">
                  <ParagraphIcon /> <small>Paragraph</small>
                </span>
              </span>
            </div>
            <div className="cursor-pointer">
              <span
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                className={
                  editor.isActive("heading", { level: 1 }) ? "is-active" : ""
                }
              >
                <span className="typgraph">
                  <Heading01Icon /> <small>Heading 1</small>
                </span>
              </span>
            </div>
            <div className="cursor-pointer">
              <span
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
                className={
                  editor.isActive("heading", { level: 2 }) ? "is-active" : ""
                }
              >
                <span className="typgraph">
                  <Heading02Icon /> <small>Heading 2</small>
                </span>
              </span>
            </div>
            <div className="cursor-pointer">
              <span
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 3 }).run()
                }
                className={
                  editor.isActive("heading", { level: 3 }) ? "is-active" : ""
                }
              >
                <span className="typgraph">
                  <Heading03Icon /> <small>Heading 3</small>
                </span>
              </span>
            </div>
            <DropdownMenuSeparator className="my-2" />
            <div className="cursor-pointer">
              <span
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive("bulletList") ? "is-active" : ""}
              >
                <span className="typgraph">
                  <LeftToRightListBulletIcon /> <small>Bullet List</small>
                </span>
              </span>
            </div>
            <div className="cursor-pointer">
              <span
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive("orderedList") ? "is-active" : ""}
              >
                <span className="typgraph">
                  <LeftToRightListNumberIcon /> <small>Ordered List</small>
                </span>
              </span>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <div className="border-r border-gray-200 h-4 w-1"></div>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        <TextBoldIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <TextItalicIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? "is-active" : ""}
      >
        <TextUnderlineIcon />
      </button>

      <Popover>
        <PopoverTrigger>
          <button
            onClick={getLink}
            className={editor.isActive("link") ? "is-active" : ""}
          >
            <Link05Icon />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-[280px] mt-2">
          <div>
            <div className="flex items-center gap-1 p-1 border border-slate-200 rounded-md">
              <input
                value={activeUrl}
                placeholder="https://www.example.com"
                onChange={(e) => {
                  setUrlRef(e.target.value);
                }}
                className="w-full text-xs outline-0"
              />
              <div className="flex justify-center">
                <button className="text-xs p-2 bg-slate-100" onClick={setLink}>
                  <Link05Icon />
                </button>
                <button
                  className="text-xs p-2 bg-slate-100"
                  onClick={() => editor.chain().focus().unsetLink().run()}
                >
                  <Unlink05Icon />
                </button>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger>
          <button
            // onClick={() =>
            //   setColor(editor.getAttributes("textStyle").color)
            // }
            className={editor.isActive("link") ? "is-active" : ""}
          >
            <ColorsIcon />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-[280px] mt-2">
          <div>
            <HexColorPicker
              color={color}
              onChange={(e) => {
                setColor(e);
                editor.chain().focus().setColor(e);
                console.log(e);
              }}
            />
          </div>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <button variant="outline">
            <MoreVerticalIcon />
          </button>
        </PopoverTrigger>
        <PopoverContent className=" mt-4 w-[unset]">
          <div className="flex items-center gap-2">
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={editor.isActive("strike") ? "is-active" : ""}
            >
              <TextStrikethroughIcon />
            </button>
            <div className="h-4 border border-r-gray-300 "></div>
            <div className="cursor-pointer">
              <span
                onClick={() =>
                  editor.chain().focus().setTextAlign("left").run()
                }
                className={
                  editor.isActive({ textAlign: "left" }) ? "is-active" : ""
                }
              >
                <span className="typgraph">
                  <TextAlignLeftIcon />
                </span>
              </span>
            </div>
            <div className="cursor-pointer">
              <span
                onClick={() =>
                  editor.chain().focus().setTextAlign("center").run()
                }
                className={
                  editor.isActive({ textAlign: "center" }) ? "is-active" : ""
                }
              >
                <span className="typgraph">
                  <TextAlignCenterIcon />
                </span>
              </span>
            </div>
            <div className="cursor-pointer">
              <span
                onClick={() =>
                  editor.chain().focus().setTextAlign("right").run()
                }
                className={
                  editor.isActive({ textAlign: "right" }) ? "is-active" : ""
                }
              >
                <span className="typgraph">
                  <TextAlignRightIcon />
                </span>
              </span>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        <QuoteDownIcon />
      </button>

      <Popover>
        <PopoverTrigger>
          {" "}
          <ImageAdd02Icon />
        </PopoverTrigger>
        <PopoverContent className="mt-4">
          <div>
            <div className="mb-6">
              <Uploadr />
            </div>
            <div className="flex items-center gap-1 p-1 border border-slate-200 rounded-md">
              <input
                value={image}
                placeholder="Enter image url"
                onChange={(e) => {
                  setImage(e.target.value);
                }}
                className="w-full text-xs outline-0"
              />
              <div className="flex justify-center">
                <button className="text-xs p-2 bg-slate-100" onClick={addImage}>
                  <ImageAdd02Icon />
                </button>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export const Float = ({ editor, setImage, image, addImage }) => {
  return (
    <div
      id="menu"
      className="border menu flex items-center border-slate-300 bg-white p-1 rounded-md toolbar w-[auto]"
    >
      <Popover>
        <PopoverTrigger asChild>
          <button variant="outline">
            <ParagraphIcon />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-36">
          <div className="">
            <div className="cursor-pointer">
              <span
                onClick={() =>
                  editor.chain().focus().setParagraph({ level: 1 }).run()
                }
                className={editor.isActive("paragraph") ? "is-active" : ""}
              >
                <span className="typgraph">
                  <ParagraphIcon /> <small>Paragraph</small>
                </span>
              </span>
            </div>
            <div className="cursor-pointer">
              <span
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                className={
                  editor.isActive("heading", { level: 1 }) ? "is-active" : ""
                }
              >
                <span className="typgraph">
                  <Heading01Icon /> <small>Heading 1</small>
                </span>
              </span>
            </div>
            <div className="cursor-pointer">
              <span
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
                className={
                  editor.isActive("heading", { level: 2 }) ? "is-active" : ""
                }
              >
                <span className="typgraph">
                  <Heading02Icon /> <small>Heading 2</small>
                </span>
              </span>
            </div>
            <div className="cursor-pointer">
              <span
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 3 }).run()
                }
                className={
                  editor.isActive("heading", { level: 3 }) ? "is-active" : ""
                }
              >
                <span className="typgraph">
                  <Heading03Icon /> <small>Heading 3</small>
                </span>
              </span>
            </div>
            <DropdownMenuSeparator className="my-2" />
            <div className="cursor-pointer">
              <span
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive("bulletList") ? "is-active" : ""}
              >
                <span className="typgraph">
                  <LeftToRightListBulletIcon /> <small>Bullet List</small>
                </span>
              </span>
            </div>
            <div className="cursor-pointer">
              <span
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive("orderedList") ? "is-active" : ""}
              >
                <span className="typgraph">
                  <LeftToRightListNumberIcon /> <small>Ordered List</small>
                </span>
              </span>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <div className="border-r border-gray-200 h-4 w-1"></div>

      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        <QuoteDownIcon />
      </button>

      <Popover>
        <PopoverTrigger>
          {" "}
          <ImageAdd02Icon />
        </PopoverTrigger>
        <PopoverContent>
          <div>
            <div className="flex items-center gap-1 p-1 border border-slate-200 rounded-md">
              <input
                value={image}
                placeholder="Enter image url"
                onChange={(e) => {
                  setImage(e.target.value);
                }}
                className="w-full text-xs outline-0"
              />
              <div className="flex justify-center">
                <button className="text-xs p-2 bg-slate-100" onClick={addImage}>
                  <ImageAdd02Icon />
                </button>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
