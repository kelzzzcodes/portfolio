import React from 'react'
import Typed from 'react-typed'
import { Link } from 'react-router-dom'

const About = ({ articledata }) => {
  return (
    <section
      className="w-full mt-0 pt-0 text-black bg-white  m-0"
      id="about-section"
    >
      <div className="grid gap-20 grid-cols-1   lg:grid-cols-2 p-8 md:p-32 ">
        <div className=" flex flex-col gap-8">
          <div>
            <Typed
              strings={["Hi there I'm Kelechi,"]}
              typeSpeed={30}
              backSpeed={100}
              className="font-extrabold text-2xl md:text-4xl "
              loop
            ></Typed>
          </div>

          <div className="flex flex-col">
            <p className="text-xl">
              As a Software Engineer I love to create beautiful and efficient{' '}
              <strong>websites</strong> and <strong>applications</strong> for my
              customers. I love going through the entire process with the
              customer from concept, to design and then development and launch
            </p>
            <p className="text-xl">
              Also as a <strong>technical writer</strong>, I possess a unique
              talent for translating complex technical concepts into clear and
              concise language that can be easily understood by a wide range of
              audiences. With a keen eye for detail and a deep understanding of
              the subject matter, I effortlessly bridge the gap between
              technical experts and end-users.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 ">
          <h3 className="text-2xl font-extrabold text-blue-600">My Articles</h3>

          <div className="flex flex-col gap-8">
            <div>
              {articledata.map((items) => (
                <div
                  key={items.id}
                  className="flex flex-col p-2 gap-4 border-b-2 border-gray-500 "
                >
                  <Link
                    to={items.link}
                    className="text-lg  md:text-xl text-black   font-black  capitalize hover:text-gray-500 "
                    target="_blank"
                  >
                    {items.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
