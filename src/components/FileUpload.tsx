"use client"

import { FileInput } from "lucide-react"
import { useDropzone } from "react-dropzone"

export default function FileUpload() {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles)
    },
  })
  return (
    <div className="bg-white rounded-xl p-2">
      <div
        {...getRootProps({
          className:
            "border-dashed border-2 rounded-zl cursor-pointer bg-gray-50 flex justify-center items-center py-8",
        })}
      >
        <input {...getInputProps()} />
        <FileInput className="" />
      </div>
    </div>
  )
}
