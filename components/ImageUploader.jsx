"use client";
import React from "react";
import { CldUploadWidget } from "next-cloudinary";
import { useState, useEffect } from "react";
import useStore from "@/store/store";

function ImageUploader() {
  // State to store the uploaded image URL
  const { setString } = useStore();

  const handleUpload = (result) => {
    // console.log("Uploaded image URL:", imageUrl);
    setString(result.info.secure_url);
  };

  return (
    <div>
      <CldUploadWidget uploadPreset="enmgtysa" onSuccess={handleUpload}>
        {({ open }) => {
          return <button onClick={() => open()}>Upload an Image</button>;
        }}
      </CldUploadWidget>
    </div>
  );
}

export default ImageUploader;
