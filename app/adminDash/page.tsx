"use client";

import React, { useRef, useState } from "react";
import logo from "../../components/assets/logo/logo.png";
import Image from "next/image";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Editor } from "@tinymce/tinymce-react";

interface BlogPayload {
  title: string;
  blogDescription: string;
  image: File | null;
}

const Blog: React.FC = () => {
  const editorRef = useRef<any>(null);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const blogDescription = editorRef.current?.getContent() || "";

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!title || !blogDescription || !file) {
      alert("Please fill out all fields and upload a file.");
      return;
    }

    setLoading(true);
    setResponseMessage("");

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("blogDescription", blogDescription);
      formData.append("file", file);

      const response = await fetch("/api/blog", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setResponseMessage("File uploaded successfully!");
        setTitle("");
        setFile(null);
      } else {
        setResponseMessage("Failed to upload the file.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setResponseMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-screen w-full flex montserrat">
        <div className="w-[22%] bg-[#1d1919] relative">
          <div className="p-[60px]">
            <Image src={logo} alt="elicitLogo" />
          </div>
          <div>
            <ul className="text-[#cdcbcb] p-[0px_60px_0px_60px]">
              <li className="border-b-[#343030] hover:text-[#eaa12b] border-b border-solid pb-[10px] text-[18px] mt-[20px] font-medium">
                Add Blogs
              </li>
              <li className="border-b-[#343030] hover:text-[#eaa12b] border-b border-solid pb-[10px] text-[18px] mt-[20px] font-medium">
                Change Password
              </li>
            </ul>
          </div>
          <div className="absolute bottom-0">
            <ul className="text-[#cdcbcb] p-[0px_60px_0px_60px]">
              <li className="flex items-center gap-[10px] border-b-[#343030] hover:text-[#eaa12b] border-b border-solid pb-[10px] text-[18px] mt-[20px] font-medium">
                Log Out
                <RiLogoutCircleLine />
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[78%] bg-[#fafafa] p-4">
          <input
            type="text"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="border border-gray-300 p-2 w-full mb-4"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            required
            className="border border-gray-300 p-2 w-full mb-4"
          />
          <Editor
            apiKey="5d2y3zf8wlhf87r8skypp8mpa5vhqauabzqo2nfa85qbexnv"
            onInit={(_evt, editor) => (editorRef.current = editor)}
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />

          {responseMessage && (
            <p
              style={{
                marginTop: "20px",
                color: responseMessage.includes("successfully")
                  ? "green"
                  : "red",
              }}
            >
              {responseMessage}
            </p>
          )}
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {loading ? "Uploading..." : "Submit"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Blog;
