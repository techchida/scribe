"use client";

import "./styles.scss";
import "./style.css";

import {
  BubbleMenu,
  EditorContent,
  useEditor,
  FloatingMenu,
} from "@tiptap/react";
import Underline from "@tiptap/extension-underline";
import Blockquote from "@tiptap/extension-blockquote";
import Link from "@tiptap/extension-link";
import Focus from "@tiptap/extension-focus";
import Color from "@tiptap/extension-color";
import Text from "@tiptap/extension-text";
import TextStyle from "@tiptap/extension-text-style";
import Placeholder from "@tiptap/extension-placeholder";
import StarterKit from "@tiptap/starter-kit";
import React, { useEffect, useRef, useState } from "react";
import Image from "@tiptap/extension-image";
import ImageResize from "tiptap-extension-resize-image";
import TextAlign from "@tiptap/extension-text-align";
import { Heading } from "@tiptap/extension-heading";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { HexColorPicker } from "react-colorful";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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

import { useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function EditorComponent() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Blockquote,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      Image,
      ImageResize,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        autolink: true,
        validate: (href) => /^https?:\/\//.test(href),
      }),
      Focus.configure({
        className: "has-focus",
        mode: "all",
      }),
      Color.configure({
        types: ["textStyle"],
      }),
      Text,
      TextStyle,
      Placeholder.configure({
        placeholder: `Welcome to your Scribe paper! Let's writing your first line here`,
      }),
    ],
    autofocus: true,
  });

  const [isEditable, setIsEditable] = useState(true);
  const [urlRef, setUrlRef] = useState("");
  const [activeUrl, setActiveUrl] = useState("");
  const [color, setColor] = useState("#000");
  const [image, setImage] = useState();

  const addImage = useCallback(() => {
    const url = image;

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor, image]);

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable);
    }
  }, [isEditable, editor]);

  const setLink = useCallback(() => {
    const url = urlRef;

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor, urlRef]);

  const getLink = useCallback(() => {
    setActiveUrl(editor.getAttributes("link").href);
  }, [editor, setActiveUrl]);

  if (!editor) {
    return null;
  }

  return (
    <>
      {/* <div>
        <input
          type="checkbox"
          checked={isEditable}
          onChange={() => setIsEditable(!isEditable)}
        />
        Editable
      </div> */}
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 50 }}>
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
                      className={
                        editor.isActive("paragraph") ? "is-active" : ""
                      }
                    >
                      <span class="typgraph">
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
                        editor.isActive("heading", { level: 1 })
                          ? "is-active"
                          : ""
                      }
                    >
                      <span class="typgraph">
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
                        editor.isActive("heading", { level: 2 })
                          ? "is-active"
                          : ""
                      }
                    >
                      <span class="typgraph">
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
                        editor.isActive("heading", { level: 3 })
                          ? "is-active"
                          : ""
                      }
                    >
                      <span class="typgraph">
                        <Heading03Icon /> <small>Heading 3</small>
                      </span>
                    </span>
                  </div>
                  <DropdownMenuSeparator className="my-2" />
                  <div className="cursor-pointer">
                    <span
                      onClick={() =>
                        editor.chain().focus().toggleBulletList().run()
                      }
                      className={
                        editor.isActive("bulletList") ? "is-active" : ""
                      }
                    >
                      <span class="typgraph">
                        <LeftToRightListBulletIcon /> <small>Bullet List</small>
                      </span>
                    </span>
                  </div>
                  <div className="cursor-pointer">
                    <span
                      onClick={() =>
                        editor.chain().focus().toggleOrderedList().run()
                      }
                      className={
                        editor.isActive("orderedList") ? "is-active" : ""
                      }
                    >
                      <span class="typgraph">
                        <LeftToRightListNumberIcon />{" "}
                        <small>Ordered List</small>
                      </span>
                    </span>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <div class="border-r border-gray-200 h-4 w-1"></div>
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
                      <button
                        className="text-xs p-2 bg-slate-100"
                        onClick={setLink}
                      >
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
              <PopoverContent className=" mt-4">
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
                        editor.isActive({ textAlign: "left" })
                          ? "is-active"
                          : ""
                      }
                    >
                      <span class="typgraph">
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
                        editor.isActive({ textAlign: "center" })
                          ? "is-active"
                          : ""
                      }
                    >
                      <span class="typgraph">
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
                        editor.isActive({ textAlign: "right" })
                          ? "is-active"
                          : ""
                      }
                    >
                      <span class="typgraph">
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
                      <button
                        className="text-xs p-2 bg-slate-100"
                        onClick={addImage}
                      >
                        <ImageAdd02Icon />
                      </button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </BubbleMenu>
      )}
      {editor && (
        <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
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
                      className={
                        editor.isActive("paragraph") ? "is-active" : ""
                      }
                    >
                      <span class="typgraph">
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
                        editor.isActive("heading", { level: 1 })
                          ? "is-active"
                          : ""
                      }
                    >
                      <span class="typgraph">
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
                        editor.isActive("heading", { level: 2 })
                          ? "is-active"
                          : ""
                      }
                    >
                      <span class="typgraph">
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
                        editor.isActive("heading", { level: 3 })
                          ? "is-active"
                          : ""
                      }
                    >
                      <span class="typgraph">
                        <Heading03Icon /> <small>Heading 3</small>
                      </span>
                    </span>
                  </div>
                  <DropdownMenuSeparator className="my-2" />
                  <div className="cursor-pointer">
                    <span
                      onClick={() =>
                        editor.chain().focus().toggleBulletList().run()
                      }
                      className={
                        editor.isActive("bulletList") ? "is-active" : ""
                      }
                    >
                      <span class="typgraph">
                        <LeftToRightListBulletIcon /> <small>Bullet List</small>
                      </span>
                    </span>
                  </div>
                  <div className="cursor-pointer">
                    <span
                      onClick={() =>
                        editor.chain().focus().toggleOrderedList().run()
                      }
                      className={
                        editor.isActive("orderedList") ? "is-active" : ""
                      }
                    >
                      <span class="typgraph">
                        <LeftToRightListNumberIcon />{" "}
                        <small>Ordered List</small>
                      </span>
                    </span>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <div class="border-r border-gray-200 h-4 w-1"></div>

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
                      <button
                        className="text-xs p-2 bg-slate-100"
                        onClick={addImage}
                      >
                        <ImageAdd02Icon />
                      </button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </FloatingMenu>
      )}
      <EditorContent className="py-6" editor={editor} />
    </>
  );
}
