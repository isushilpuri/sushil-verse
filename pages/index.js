import styles from "../styles/Home.module.css";
import sanityClient from "@sanity/client";

import Script from "next/script";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import Image from "next/image";
import NavBar from "../components/NavBar";
import React from "react";

export default function Home({ blogs, profile, skills, workexp }) {
  const client = sanityClient({
    projectId: "81wzhs3x",
    dataset: "production",
    apiVersion: "2021-08-31",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);

  return (
    <>
      <>
        <Script src="/assets/js/main.js"></Script>
        <script
          defer
          src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
        ></script>

        <script
          defer
          src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
        ></script>

        <NavBar profile={profile} />
      </>
      <>
        <div>
          <div
            className="relative bg-cover bg-center bg-no-repeat py-8"
            style={{ backgroundImage: "url(/assets/img/bg-hero.jpg)" }}
          >
            <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>

            <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
              <div className="flex flex-col items-center justify-center lg:flex-row">
                <div className="rounded-full border-8 border-primary shadow-xl">
                  <Image
                    src={builder.image(profile.image).url()}
                    className="h-48 rounded-full sm:h-56"
                    alt="author"
                    width="200"
                    height="200"
                  />
                </div>
                <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                  <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                    Hello I`m {profile.name}!
                  </h1>
                  <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                    <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                      <p className="font-body text-lg uppercase text-white">
                        Let`s connect
                      </p>
                      <div className="hidden sm:block">
                        <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                      </div>
                    </div>
                    <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                      <Link href={profile.twitterLink} className="pl-4">
                        <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
                      </Link>
                      <Link href={profile.linkedInLink} className="pl-4">
                        <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                      </Link>
                      <Link href={profile.instagramLink} className="pl-4">
                        <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
                      </Link>
                    </div>
                  </div>
                  <Link href={"/blogs"}>
                    <div className="buttons text-center md:text-left">
                      <button className="bg-purple-600 text-white border-2 px-4 py-1 my-4 rounded-2xl">
                        All Blogs
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-grey-50" id="about">
            <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
              <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
                <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                  Who am I?
                </h2>
                <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                  {profile.intro}
                </h4>
                <p className="pt-6 font-body leading-relaxed text-grey-20">
                  {profile.about}
                </p>
                <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
                  <div className="flex items-center justify-center sm:justify-start">
                    <p className="font-body text-lg font-semibold uppercase text-grey-20">
                      Connect with me
                    </p>
                    <div className="hidden sm:block">
                      <i className="bx bx-chevron-right text-2xl text-primary"></i>
                    </div>
                  </div>
                  <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                    <Link href={profile.twitterLink} className="pl-4">
                      <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
                    </Link>
                    <Link href={profile.linkedInLink} className="pl-4">
                      <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                    </Link>
                    <Link href={profile.instagramLink} className="pl-4">
                      <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
                {skills.map((skill) => {
                  return (
                    <React.Fragment key={skill.skillset.skillName}>
                      <div className="pt-6">
                        <div className="flex items-end justify-between">
                          <h4 className="font-body font-semibold uppercase text-black">
                            {skill.skillset.skillName}
                          </h4>
                          <h3 className="font-body text-3xl font-bold text-primary">
                            {skill.skillset.skillProficiency}
                          </h3>
                        </div>
                        <div className="mt-2 h-3 w-full rounded-full bg-lila">
                          <div
                            className="h-3 rounded-full bg-primary"
                            style={{
                              width: `${skill.skillset.skillProficiency}`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="container py-16 md:py-20" id="services">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              Here`s what I`m good at
            </h2>
            <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              These are the services I offer
            </h3>

            <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
              <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                  <div className="hidden group-hover:block">
                    <Image
                      src="/assets/img/lex.png"
                      alt="development icon"
                      width="800"
                      height="800"
                    />
                  </div>
                  <div className="block group-hover:hidden">
                    <Image
                      src="/assets/img/lex.png"
                      alt="lex icon"
                      width="800"
                      height="800"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                    Amazon Lex
                  </h3>
                  <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                    {profile.lex}
                  </p>
                </div>
              </div>
              <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                  <div className="hidden group-hover:block">
                    <Image
                      src="/assets/img/connect.png"
                      alt="connect icon"
                      width="800"
                      height="800"
                    />
                  </div>
                  <div className="block group-hover:hidden">
                    <Image
                      src="/assets/img/connect.png"
                      alt="Connect icon"
                      width="800"
                      height="800"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                    Amazon Connect
                  </h3>
                  <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                    {profile.connect}
                  </p>
                </div>
              </div>
              <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                  <div className="hidden group-hover:block">
                    <Image
                      src="/assets/img/icon-development-white.svg"
                      alt="Web development icon"
                      width="800"
                      height="800"
                    />
                  </div>
                  <div className="block group-hover:hidden">
                    <Image
                      src="/assets/img/icon-development-black.svg"
                      alt="Web development icon"
                      width="800"
                      height="800"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                    Web Development
                  </h3>
                  <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                    {profile.webdev}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container py-16 md:py-20" id="work">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              My work experience
            </h2>
            <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              Here`s what I`ve been doing recently
            </h3>

            <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
              <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

              {workexp.map((exp) => {
                return (
                  <React.Fragment key={exp.role}>
                    <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                      <div className="md:w-2/5">
                        <div className="flex justify-center md:justify-start">
                          <span className="shrink-0">
                            <Image
                              src={builder.image(exp.companyImage).url()}
                              className="h-auto w-32"
                              alt="company logo"
                              width="200"
                              height="200"
                            />
                          </span>
                          <div className="relative ml-3 hidden w-full md:block">
                            <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-3/5">
                        <div className="relative flex md:pl-18">
                          <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                          <div className="mt-1 flex">
                            <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                            <div className="md:-mt-1 md:pl-8">
                              <span className="block font-body font-bold text-grey-40">
                                {exp.duration}
                              </span>
                              <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                                {exp.role}
                              </span>
                              <div className="pt-2">
                                <span className="block font-body text-black">
                                  {exp.description}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          <div className="bg-grey-50" id="blog">
            <div className="container py-16 md:py-20">
              <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                I also like to write
              </h2>
              <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                Check out my latest posts!
              </h4>
              <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
                {blogs.map((item) => {
                  return (
                    <React.Fragment key={item.slug.current}>
                      <Link
                        key={item.slug.current}
                        href={"/blog/" + item.slug.current}
                        className="shadow"
                      >
                        <div>
                          <div
                            style={{
                              backgroundImage: `url(${
                                builder
                                  .image(item.blogimage)
                                  .width(200)
                                  .url() || "/assets/img/post-01.png"
                              })`,
                            }}
                            className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                          >
                            <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                            <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base cursor-pointer">
                              Read More
                            </span>
                          </div>
                          <div className="bg-white py-6 px-5 xl:py-8">
                            <span className="block font-body text-lg font-semibold text-black">
                              {" "}
                              {item.title}
                            </span>
                            <span className="block pt-2 font-body text-grey-20">
                              {item.metadesc}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="container py-16 md:py-20" id="contact">
            {/* <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              Here's a contact form
            </h2>
            <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              Have Any Questions?
            </h4>
            <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
              <p className="font-body text-grey-10">
                Interested in my work as much as I am? Let's talk about it over
                a coffee.
              </p>
            </div>
            <form className="mx-auto w-full pt-10 sm:w-3/4">
              <div className="flex flex-col md:flex-row">
                <input
                  className="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
                <input
                  className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
                  placeholder="Email"
                  type="text"
                  id="email"
                />
              </div>
              <textarea
                className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
                placeholder="Message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
              <button
                href="mailto:isushilpuri@gmail.com"
                className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
              >
                Send
                <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
              </button>
            </form> */}
            <div className="flex flex-col pt-16 lg:flex-row">
              <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
                <div className="flex items-center">
                  <i className="bx bx-phone text-2xl text-grey-40"></i>
                  <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                    My Phone
                  </p>
                </div>
                <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                  {profile.phone}
                </p>
              </div>
              <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
                <div className="flex items-center">
                  <i className="bx bx-envelope text-2xl text-grey-40"></i>
                  <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                    My Email
                  </p>
                </div>
                <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                  {profile.email}
                </p>
              </div>
              <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
                <div className="flex items-center">
                  <i className="bx bx-map text-2xl text-grey-40"></i>
                  <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                    My Address
                  </p>
                </div>
                <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                  {profile.address}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary">
          <div className="container flex flex-col justify-between py-6 sm:flex-row">
            <p className="text-center font-body text-white md:text-left">
              © Copyright 2022. All right reserved, @sushilkumar.
            </p>
          </div>
        </div>
      </>
    </>
  );
}

export async function getServerSideProps(context) {
  const client = sanityClient({
    projectId: "81wzhs3x",
    dataset: "production",
    apiVersion: "2021-08-31",
    useCdn: false,
  });
  const query = `*[_type == "blog"][0...3]`;
  const blogs = await client.fetch(query);

  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);

  const skillsQuery = `*[_type == "skill"]`;
  const skills = await client.fetch(skillsQuery);

  const experienceQuery = `*[_type == "experience"]`;
  const workexp = await client.fetch(experienceQuery);

  return {
    props: {
      blogs,
      profile,
      skills,
      workexp,
    },
  };
}
