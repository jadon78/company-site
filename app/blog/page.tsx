"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
 
const Blog = () => {
  const [blogs, setBlogs] = useState<any[]>([]); // Blog data state
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blog");
        const data = await response.json();

        if (data.success) {
          setBlogs(data.blogs); // Set the blog data in the state
        } else {
          setError(data.message); // Set error message if no blogs found
        }
      } catch (err) {
        setError("An error occurred while fetching blogs.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div>Loading...</div>; // Show a loading message

  return (
    <div>
      <Head>
        <title>
          Latest blog on web, mobile app development, and UI/UX design
        </title>
        <meta
          name="title"
          content="Latest blog on web, mobile app development, and UI/UX design"
        />
        <meta
          name="keywords"
          content="web,mobile app development, UI/UX design, web, mobile app development"
        />
        <meta
          name="description"
          content="Explore insightful blogs on the web, mobile app development, and trends at Elicit Digital's. Stay updated with us and move forward in your industry."
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="Geography" content="India" />
        <meta name="author" content="Elicit Digital" />
        <meta name="copyright" content="Elicit Digital" />
        <meta name="distribution" content="Global" />
        <meta name="publisher" content="www.elicit.digital" />
        <meta name="Search Engine" content="https://www.google.com/" />
        <meta
          property="og:title"
          content="Latest blog on web, mobile app development, and UI/UX design"
        />
        <meta
          property="og:site_name"
          content=" Elicit Digital-Web Development Company"
        />
        <meta property="og:url" content="www.elicit.digital" />
        <meta
          property="og:description"
          content="Explore insightful blogs on the web, mobile app development, and trends at Elicit Digital's. Stay updated with us and move forward in your industry."
        />
        <meta
          property="og:image"
          itemProp="image"
          content="%PUBLIC_URL%/elicitlogo.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Elicit_Digital" />
        <meta
          name="twitter:title"
          content="Latest blog on web, mobile app development, and UI/UX design"
        />
        <meta
          name="twitter:description"
          content="Explore insightful blogs on the web, mobile app development, and trends at Elicit Digital's. Stay updated with us and move forward in your industry."
        />
      </Head>
      <section className="service-header-carrier">
        <div>
          <div className="carrier_section">
            <h1 className="career_head ">
              {" "}
              Get the latest from infomation tech{" "}
            </h1>
            <p className="career_para">
              Start getting Up and coming programming languages and technology
            </p>
          </div>
          <div className="blog_section ">
            <div className="container">
              <div className="row montserrat">
                {error && <p style={{ color: "red" }}>{error}</p>}
                {blogs.length === 0 ? (
                  <p>No blogs available.</p>
                ) : (
                  <>
                    {blogs?.map((blog) => (
                      <div className="col-lg-4 col-md-6" key={blog._id}>
                        <div className="box-blog">
                          <div className="blog-img">
                            <Link href="/how-to-integrate-chat-gpt">
                              <img src={blog.file} alt={blog.file} />
                            </Link>
                          </div>
                          <div className="blog-by">
                            By <a href="https://elicit.digital/">Elicit</a>
                          </div>
                          <h3>
                            <Link href="/how-to-integrate-chat-gpt">
                              {/* How to integrate<br></br>chat GPT */}
                              {blog.title}
                            </Link>
                          </h3>
                          <p className="blog-description">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: blog.blogDescription,
                              }}
                            />
                          </p>
                          <div className="blog-date">
                            <span className="date">15 Jan 2022</span>
                            <span>10 min read</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
