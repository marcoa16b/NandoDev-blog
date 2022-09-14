import React, { ReactNode } from 'react';

import Link from 'next/link';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

// import { Navbar } from '../navigation/Navbar';
import Navbar from '../components/Navbar';
import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const MainTemp = (props: IMainProps) => {
  return (
    <div className="antialiased w-full text-gray-700">
      <header className="bg-white shadow">
        <Navbar />
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl text-center md:text-left font-bold text-gray-900">
            Fernando Barboza
          </h1>
          <p className="text-xl text-center md:text-left">
            Ingeniero en informática en formación - Frontend Developer -
            #React.js #Node.js - Costa Rica
          </p>
          <div className="flex text-4xl w-full justify-center md:justify-start">
            <Link href="https://twitter.com/mars_elit">
              <a className=" text-indigo-800 m-2" target="_blank">
                <FaTwitterSquare />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/marcoa16b/">
              <a className=" text-indigo-800 m-2" target="_blank">
                <FaLinkedin />
              </a>
            </Link>
            <Link href="https://github.com/marcoa16b">
              <a className=" text-indigo-800 m-2" target="_blank">
                <FaGithubSquare />
              </a>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-8 lg:px-8">
          {/* <!-- Replace with your content --> */}
          <div className="px-4 py-6 sm:px-0">
            {/* <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div> */}
            <div className="text-xl py-5">{props.children}</div>
          </div>
          {/* <!-- /End replace --> */}
        </div>
      </main>

      {/* <div className="border-t border-gray-300 text-center py-8 px-4 text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
        <span role="img" aria-label="Love">
          ♥
        </span>{' '}
        by <a href="https://marselit-portfolio.vercel.app/">{AppConfig.author}</a>
      </div> */}

      <div className="border-t text-gray-800 border-gray-300 text-center py-8 px-4 text-lg">
        <a
          href="https://marselit-portfolio.vercel.app/"
          className="text-gray-800"
        >
          {AppConfig.author}
        </a>{' '}
        <a href="https://twitter.com/mars_elit" className="text-gray-800">
          @marselit_16
        </a>{' '}
        • Todos los derechos reservados © {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default MainTemp;
