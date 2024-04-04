'use client'
import './tags.css';
import { useEffect, useState } from "react";
import { TagsInput } from "react-tag-input-component";

export default function Tags({fn, count}){
  const [selected, setSelected] = useState(["papaya"]);
  const [tagState, setTagState] = useState(true)
  useEffect(()=>{
    if(selected.length >= count ) {
        setTagState(false); 
        let tags = selected
        tags.pop()
        setSelected(tags)
    }
    setTagState(true); 
  },[selected])


  return (
    <div>
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <TagsInput
        value={selected}
        onChange={setSelected}
        onRemoved={(tag)=>console.log('sdhjasdad',tag)}
        name="tags"
        placeHolder="enter tags"
        classNames={`flex min-h-[80px]  text-xs w-full rounded-md border-none  bg-background  text-sm ring-offset-background placeholder:text-muted-foreground outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
      />
    </div>
  );
};
