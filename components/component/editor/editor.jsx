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

import { useCallback } from "react";
import { Bubble, Float } from "./menus";

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
          <Bubble
            editor={editor}
            setLink={setLink}
            setUrlRef={setUrlRef}
            setColor={setColor}
            setImage={setImage}
            image={image}
            addImage={addImage}
            getLink={getLink}
            activeUrl={activeUrl}
            color={color}
          />
        </BubbleMenu>
      )}
      {editor && (
        <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <Float editor={editor} image={image} addImage={addImage} />
        </FloatingMenu>
      )}
      <EditorContent className="py-6" editor={editor} />
    </>
  );
}
