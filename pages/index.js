import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { ChevronRightIcon, StarIcon } from '@heroicons/react/solid';

const logos = [
  {
    name: 'Frontier',
  },
  {
    name: 'XinFin',
  },
  {
    name: '1Cap',
  },
  {
    name: 'Covalent',
  },
  {
    name: 'Alpha Sigma Capital',
  },
];
const footerNavigation = {
  main: [],
  social: [
    {
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
};

const add = (a, b) => {
  return parseInt(a) + parseInt(b);
};

export default function index({ cases }) {
  const [stats, setStats] = useState([
    { label: 'Active', value: '' },
    { label: 'Recovered', value: '' },

    { label: 'Confirmed', value: '' },
    { label: 'Deceased', value: '' },
  ]);

  if (cases) {
    const casesData = cases.statewise;

    const activeArr = [],
      recoveredArr = [],
      deceasedArr = [],
      confirmedArr = [];

    casesData.forEach((item) => {
      activeArr.push(item.active);
      recoveredArr.push(item.recovered);
      deceasedArr.push(item.deaths);
      confirmedArr.push(item.confirmed);
    });

    console.log({ activeArr });

    const active = activeArr.reduce(add, 0);
    const recovered = recoveredArr.reduce(add, 0);
    const deceased = deceasedArr.reduce(add, 0);
    const confirmed = confirmedArr.reduce(add, 0);

    console.log({
      active,
      recovered,
      deceased,
      confirmed,
    });
    useEffect(() => {
      setStats([
        { label: 'Active', value: active / 2 },
        { label: 'Recovered', value: recovered / 2 },

        { label: 'Confirmed', value: confirmed / 2 },
        { label: 'Deceased', value: deceased / 2 },
      ]);
    }, []);
  }

  const copyAddress = (input) => {
    var copyText = document.querySelector('#' + input);
    copyText.select();
    document.execCommand('copy');
  };

  return (
    <>
      <Head>
        <title>Crypto For Good</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-white">
        <main>
          {/* Hero section */}
          <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-44">
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
              <div>
                <div className="flex justify-left items-center">
                  <svg className="h-24 w-auto" viewBox="0 0 86 86" fill="none">
                    <path
                      d="M27 15.1c-.1.1-.1.2-.1.3 0 .1-.1.1-.1.2-2.3 1.3-4.5 3-6.4 4.9-1.9 1.9-3.6 4.1-4.9 6.4-.1 0-.2.1-.3.1-.1 0-.2.1-.3.1-2.8 1.1-5.3 1.1-6.7-.3-2.5-2.6-.5-8.7 4.6-13.9 4.2-4.2 9.1-6.3 12.1-5.6h.1c.2.1.4.1.6.2.4.2.8.4 1.1.7 1.4 1.6 1.4 4.1.3 6.9z"
                      fill="#E11D48"
                    />
                    <path
                      d="M32.4 20.9c-.3.1-.6.3-.9.4-.1 0-.2.1-.3.1h-.1l-.6.3c-.3.1-.5.3-.8.5l-.9.6c-.6.4-1.1.8-1.7 1.3-.6.4-1.1.9-1.6 1.5l-.9.9c-.3.3-.6.6-.8.9-.8 1-1.5 2-2 2.9-.1.1-.2.3-.3.4-.3.6-.6 1.1-.8 1.7.1-.1.1-.3.1-.4.4-1.4 0-3-1.1-4.1-1.1-1.1-2.8-1.5-4.2-1.1 1.4-2.3 3-4.5 4.9-6.4 1.9-1.9 4.1-3.6 6.4-4.9-.4 1.4-.1 3.1 1.1 4.2.4.4.9.8 1.4 1 .1 0 .1 0 .2.1.1 0 .2.1.4.1.1 0 .2 0 .3.1h1.5c.2 0 .3-.1.5-.1h.2z"
                      fill="#E11D4C"
                      fillOpacity={0.08}
                    />
                    <path
                      d="M12.1 35.2c-.7 2.6-1 5.3-1 8s.3 5.4 1 8c-.1.1-.1.2-.1.2 0 .1-.1.2-.1.3-1.2 2.8-3 4.6-4.9 4.6-3.6 0-6.5-5.9-6.5-13.1C.5 36 3.4 30.1 7 30.1c2 0 3.7 1.8 4.9 4.6 0 .1.1.2.1.3 0 0 .1.1.1.2z"
                      fill="#DE355A"
                    />
                    <path
                      d="M19.1 49.7l.6 1.8c0-.1-.1-.2-.2-.3a4.21 4.21 0 00-7.4 0c-.7-2.6-1-5.3-1-8s.3-5.4 1-8a4.21 4.21 0 007.4 0c.1-.1.1-.2.2-.3l-.6 1.8c-.1.2-.1.4-.2.7-.1.4-.2.7-.3 1.1-.1.2-.1.5-.1.7 0 .2-.1.4-.1.6-.1.4-.1.7-.1 1.1-.1.8-.1 1.5-.1 2.3 0 .8 0 1.6.1 2.3 0 .6.1 1.1.2 1.6 0 .3.1.5.1.8l.3 1.2.2.6z"
                      fill="#E3A4B2"
                    />
                    <path
                      d="M77.6 26.9c-1.4 1.4-3.9 1.4-6.7.3-.1-.1-.2-.1-.3-.1-.1 0-.2-.1-.3-.1-1.3-2.3-3-4.4-4.9-6.4-2-1.9-4.1-3.6-6.4-4.9 0-.1 0-.1-.1-.2 0-.1-.1-.2-.1-.3-1.1-2.8-1.1-5.3.3-6.7.3-.3.7-.6 1.1-.7.2-.1.4-.1.6-.2h.1c3-.7 7.9 1.4 12.1 5.6 5.1 5 7.2 11.2 4.6 13.7z"
                      fill="#E11D48"
                    />
                    <path
                      d="M70.4 27c-1.4-.4-3.1-.1-4.2 1.1-1.1 1.1-1.5 2.7-1.1 4.1 0 .1.1.3.1.4-.2-.6-.5-1.1-.8-1.7-.1-.2-.2-.3-.3-.4-.6-1-1.3-2-2-2.9-.3-.3-.5-.6-.8-.9l-.9-.9c-.5-.5-1.1-1-1.6-1.5-.6-.5-1.1-.9-1.7-1.3l-.9-.6c-.3-.2-.5-.3-.8-.5l-.6-.3h-.1c-.1-.1-.2-.1-.3-.1-.3-.2-.6-.3-.9-.4h.1c.1 0 .1.1.2.1.2.1.3.1.5.1h1.5c.1 0 .2 0 .3-.1.1 0 .2-.1.4-.1.1 0 .1 0 .2-.1.5-.2 1-.5 1.4-1 1.2-1.1 1.5-2.8 1.1-4.2 2.3 1.3 4.4 3 6.4 4.9 1.8 1.8 3.4 4 4.8 6.3zM85.4 43.1c0 7.2-2.9 13.1-6.5 13.1-2 0-3.7-1.8-4.9-4.6 0-.1-.1-.2-.1-.3 0-.1-.1-.1-.1-.2.7-2.6 1-5.2 1-8 0-2.7-.3-5.4-1-8 .1-.1.1-.1.1-.2s.1-.2.1-.3c1.2-2.8 3-4.6 4.9-4.6 3.6 0 6.5 5.9 6.5 13.1z"
                      fill="#DE355A"
                    />
                    <path
                      d="M74.8 43.1c0 2.7-.3 5.4-1 8a4.21 4.21 0 00-7.4 0c-.1.1-.1.2-.2.3.2-.5.4-1.1.6-1.8l.2-.7.3-1.2c.1-.3.1-.5.1-.8.1-.5.2-1.1.2-1.6.1-.7.1-1.5.1-2.3 0-.8 0-1.6-.1-2.3 0-.4-.1-.7-.1-1.1 0-.2-.1-.4-.1-.6 0-.3-.1-.5-.1-.7-.1-.4-.2-.8-.3-1.1-.1-.2-.1-.5-.2-.7-.2-.6-.4-1.3-.6-1.8 0 .1.1.2.2.3a4.21 4.21 0 007.4 0c.6 2.7 1 5.4 1 8.1z"
                      fill="#E3A4B2"
                    />
                    <path
                      d="M73 73.2c-3.8 3.8-8.3 6-11.3 5.7-1-.1-1.9-.4-2.5-1.1-1.4-1.4-1.4-3.9-.3-6.7.1-.1.1-.2.1-.3 0-.1.1-.2.1-.2 2.3-1.3 4.5-3 6.4-5 1.9-1.9 3.6-4.1 4.9-6.4.1 0 .2-.1.3-.1.1 0 .2-.1.3-.1 2.8-1.1 5.3-1.1 6.7.3 2.5 2.6.4 8.8-4.7 13.9z"
                      fill="#E11D48"
                    />
                    <path
                      d="M70.4 59.3c-1.3 2.3-3 4.4-4.9 6.4-1.9 1.9-4.1 3.6-6.4 5 .4-1.5.1-3.1-1.1-4.2-.7-.7-1.6-1.1-2.5-1.2-.6-.1-1.2 0-1.8.2-.1 0-.2.1-.3.1h.1l1.2-.6s.1 0 .1-.1l.6-.3c.3-.2.7-.4 1-.6.3-.2.7-.4 1-.7.3-.2.5-.4.8-.6.1-.1.2-.2.4-.3.2-.2.4-.4.6-.5l.3-.3c.3-.3.6-.5.8-.8 1.3-1.3 2.3-2.6 3.2-3.9.2-.3.4-.6.5-.8.1-.2.3-.5.4-.7.3-.5.5-1 .7-1.5-.1.1-.1.3-.1.4-.4 1.4 0 3 1.1 4.1 1.2.9 2.9 1.3 4.3.9z"
                      fill="#E11D4C"
                      fillOpacity={0.08}
                    />
                    <path
                      d="M56 79.1c0 3.6-5.9 6.5-13.1 6.5-7.2 0-13.1-2.9-13.1-6.5 0-2 1.8-3.7 4.6-4.9.1 0 .2-.1.3-.1.1 0 .1-.1.2-.1 2.6.7 5.3 1 8 1s5.4-.3 8-1c.1.1.1.1.2.1.1.1.2.1.3.1 2.9 1.2 4.6 3 4.6 4.9z"
                      fill="#DE355A"
                    />
                    <path
                      d="M48.7 70.2c0 1.6.9 3 2.2 3.7-2.6.7-5.3 1-8 1s-5.4-.3-8-1c1.3-.7 2.2-2.1 2.2-3.7s-.9-3-2.3-3.7c-.1-.1-.2-.1-.3-.2h0c.5.2 1.1.4 1.7.6.1 0 .2.1.3.1.3.1.6.1.9.2.2 0 .4.1.5.1.4.1.7.1 1.1.2.1 0 .2 0 .3.1.4.1.8.1 1.2.1.4 0 .7.1 1.1.1h2.6c.4 0 .7 0 1.1-.1.4 0 .8-.1 1.2-.1.1 0 .2 0 .3-.1.4-.1.7-.1 1.1-.2.2 0 .4-.1.5-.1.3-.1.6-.1.9-.2.1 0 .2-.1.3-.1.6-.2 1.1-.4 1.7-.6h-.1.1c-.1.1-.2.1-.3.2-1.4.7-2.3 2.1-2.3 3.7zM26.7 77.8c-.6.6-1.5 1-2.5 1.1-3 .3-7.5-1.9-11.3-5.7-5.1-5.1-7.2-11.3-4.7-13.9 1.4-1.4 3.9-1.4 6.7-.3.1 0 .2.1.3.1.1 0 .2.1.3.1 1.4 2.3 3 4.5 4.9 6.4 1.9 1.9 4.1 3.6 6.4 4.9 0 .1 0 .2.1.2 0 .1.1.2.1.3 1.1 2.9 1.1 5.4-.3 6.8z"
                      fill="#E11D48"
                    />
                    <path
                      d="M32.4 65.4c-.1 0-.2-.1-.3-.1-.6-.2-1.2-.2-1.8-.2-.9.1-1.8.5-2.5 1.2-1.1 1.1-1.5 2.8-1.1 4.2-2.3-1.3-4.5-3-6.4-4.9-1.9-1.9-3.6-4-4.9-6.4 1.4.4 3 .1 4.2-1.1 1.1-1.1 1.5-2.7 1.1-4.1 0-.1-.1-.3-.1-.4.2.5.5 1 .7 1.5.1.2.2.4.4.7.2.3.3.6.5.8.8 1.3 1.9 2.6 3.2 3.9.3.3.6.5.8.8l.3.3c.2.2.4.4.6.5.1.1.2.2.4.3.3.2.5.4.8.6.4.3.7.5 1 .7.3.2.7.4 1 .6l.6.3s.1 0 .1.1c.5.3.9.5 1.4.7 0 0-.1 0 0 0zM56 7.1c0 2-1.8 3.7-4.6 4.9-.1 0-.2.1-.3.1-.1 0-.1.1-.2.1-2.6-.7-5.3-1-8-1s-5.4.3-8 1c-.1-.1-.1-.1-.2-.1-.1-.1-.2-.1-.3-.1-2.8-1.2-4.6-3-4.6-4.9 0-3.6 5.9-6.5 13.1-6.5C50.2.6 56 3.5 56 7.1z"
                      fill="#DE355A"
                    />
                    <path
                      d="M51.1 19.9c.1 0 .1 0 0 0-.2-.1-.5-.2-.8-.3-.1 0-.1 0-.2-.1-2.1-.7-4.5-1.1-7.2-1.1-2.6 0-5.1.4-7.2 1.1-.1 0-.2.1-.2.1l-.9.3s.1 0 .1-.1c0 0-.1 0-.1.1.1 0 .1-.1.2-.1 1.4-.7 2.3-2.1 2.3-3.8 0-1.6-.9-3-2.2-3.7 2.6-.7 5.3-1 8-1s5.4.3 8 1c-1.3.7-2.2 2.1-2.2 3.7 0 1.7 1 3.1 2.4 3.9 0 0 .1 0 .1.1 0-.1 0-.1-.1-.1z"
                      fill="#E11D48"
                    />
                    <path
                      d="M69.5 43.1c0 2.3-.3 4.5-.8 6.7-.6 2.4-1.6 4.7-2.8 6.8-1.1 1.9-2.5 3.7-4.1 5.3-1.6 1.6-3.4 3-5.3 4.1-2.1 1.3-4.4 2.2-6.8 2.8-2.2.6-4.4.8-6.7.8s-4.5-.3-6.7-.8c-2.4-.6-4.7-1.6-6.8-2.8-1.9-1.1-3.7-2.5-5.3-4.1-1.6-1.6-3-3.4-4.1-5.3-1-1.7-1.8-3.5-2.4-5.4-.2-.5-.3-.9-.4-1.4-.6-2.2-.8-4.4-.8-6.7s.3-4.5.8-6.7c.1-.4.2-.8.4-1.2.6-1.9 1.4-3.8 2.5-5.6 1.1-1.9 2.5-3.7 4.1-5.3 1.6-1.6 3.4-3 5.3-4.1 2.1-1.3 4.4-2.2 6.8-2.8 2.2-.6 4.4-.8 6.7-.8s4.5.3 6.7.8c2.4.6 4.7 1.6 6.8 2.8 1.9 1.1 3.7 2.5 5.3 4.1 1.6 1.6 3 3.4 4.1 5.3 1.3 2.1 2.2 4.4 2.8 6.8.4 2.2.7 4.4.7 6.7z"
                      fill="#35343D"
                    />
                    <path
                      d="M49.1 49.3l3.7 3.7c.5.5.4 1.3-.1 1.8-2.6 2.2-6 3.5-9.7 3.5-4.2 0-8-1.7-10.7-4.4-2.7-2.7-4.4-6.5-4.4-10.7 0-4.2 1.7-8 4.4-10.7C35 29.7 38.8 28 43 28c3.7 0 7.1 1.3 9.7 3.5.5.5.6 1.3.1 1.8L49.1 37c-.4.4-1.1.5-1.5.1-1.3-1-2.9-1.6-4.6-1.6-2.1 0-4 .8-5.4 2.2-1.4 1.4-2.2 3.3-2.2 5.4 0 2.1.8 4 2.2 5.4 1.4 1.4 3.3 2.2 5.4 2.2 1.7 0 3.3-.6 4.6-1.6.4-.3 1.1-.2 1.5.2z"
                      fill="#fff"
                    />
                  </svg>
                  <h1 className="font-bold text-4xl uppercase ml-4 text-gray-800">
                    Crypto for good
                  </h1>
                </div>
                <div className="mt-16">
                  <div className="mt-6 sm:max-w-xl">
                    <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight sm:text-5xl">
                      Bringing all the crypto communities together for India
                    </h1>
                    <p className="mt-6 text-xl text-gray-500">
                      CryptoForGood is an initiative to create awareness and
                      raise capital from the global crypto community towards the
                      much needed Covid relief efforts in India.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
              <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div className="hidden sm:block">
                  <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
                  <svg
                    className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                    width={404}
                    height={392}
                    fill="none"
                    viewBox="0 0 404 392"
                  >
                    <defs>
                      <pattern
                        id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={392}
                      fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                    />
                  </svg>
                </div>
                <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
                  <Image
                    className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="helping hand"
                    width={5184}
                    height={3456}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial/stats section */}
          <div className="relative mt-10">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
              <div className="relative sm:py-16 lg:py-0">
                <div
                  aria-hidden="true"
                  className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
                >
                  <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
                  <svg
                    className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                    width={404}
                    height={392}
                    fill="none"
                    viewBox="0 0 404 392"
                  >
                    <defs>
                      <pattern
                        id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={392}
                      fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                    />
                  </svg>
                </div>
                <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                  {/* Testimonial card*/}
                  <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                    <img
                      className="absolute inset-0 h-full w-full object-cover"
                      src="https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                      alt=""
                    />
                    <div
                      className="absolute inset-0 bg-rose-500"
                      style={{ mixBlendMode: 'multiply' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-600 via-rose-600 opacity-90" />
                    <div className="relative px-8">
                      <blockquote className="mt-8">
                        <div className="relative text-lg font-medium text-white md:flex-grow">
                          <svg
                            className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-rose-400"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                          >
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                          </svg>
                          <p className="relative">
                            Never underestimate the difference you can make in
                            the lives of others. Step forward, reach out and
                            help. This week reach to someone that might need a
                            lift.
                          </p>
                        </div>

                        <footer className="mt-4">
                          <p className="text-base font-semibold text-rose-200">
                            Pablo
                          </p>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                {/* Content area */}
                <div className="pt-12 sm:pt-16 lg:pt-20">
                  <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                    On a mission to help
                  </h2>
                  <div className="mt-6 text-gray-500 space-y-6">
                    <p className="text-lg">
                      The number of Covid cases in India have been rapidly
                      increasing. The daily new cases count is at its peak.
                      India’s Covid-19 patient numbers are spiking and
                      healthcare providers are in dire need of Personal
                      Protective Equipment (PPE), medical grade oxygen and food
                      for India's high risk transient population.
                    </p>
                    <p className="text-lg">
                      CryptoForGood is an initiative to create awareness and
                      raise capital from the global crypto community towards the
                      much needed Covid relief efforts in India. CryptoForGood
                      will channelise funds towards{' '}
                      <strong>PM Cares Fund</strong>
                    </p>
                  </div>
                </div>

                {/* Stats section */}
                <div className="mt-10">
                  <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="border-t-2 border-gray-100 pt-6"
                      >
                        <dt className="text-base font-medium text-gray-500">
                          {stat.label}
                        </dt>
                        <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-10">
                    <a
                      href="https://www.covid19india.org/"
                      className="text-base font-medium text-rose-500"
                    >
                      Data from covid19india.org &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="relative mt-24 sm:mt-32 sm:py-16">
            <div aria-hidden="true" className="hidden sm:block">
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
              <svg
                className="absolute top-8 left-1/2 -ml-3"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
                />
              </svg>
            </div>
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="relative rounded-2xl px-6 py-10 bg-rose-500 overflow-hidden shadow-xl sm:px-12 sm:py-20">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
                >
                  <svg
                    className="absolute inset-0 h-full w-full"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 1463 360"
                  >
                    <path
                      className="text-rose-400 text-opacity-40"
                      fill="currentColor"
                      d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                    />
                    <path
                      className="text-rose-600 text-opacity-40"
                      fill="currentColor"
                      d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                    />
                  </svg>
                </div>
                <div className="relative">
                  <div className="sm:text-center">
                    <h2 className="text-3xl font-bold text-white tracking-tight sm:text-4xl">
                      Contribute for the cause
                    </h2>
                    <p className="mt-6 mx-auto max-w-2xl text-lg text-rose-100">
                      Send in your donations here. Multiseg has been setup for
                      this wallet.
                    </p>
                  </div>
                  <div className="mt-12 sm:mx-auto sm:max-w-3xl sm:flex sm:items-end">
                    <div className="min-w-0 flex-1">
                      <label
                        htmlFor="cta_eth"
                        className="block text-lg font-lg text-white"
                      >
                        ETH Address
                      </label>
                      <input
                        value="0x68A99f89E475a078645f4BAC491360aFe255Dff1"
                        id="cta_eth"
                        type="text"
                        readOnly
                        className="block w-full border border-transparent rounded-md px-5 py-2 text-xl font-lg  text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                      />
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-3">
                      <button
                        onClick={() => {
                          copyAddress('cta_eth');
                        }}
                        className="block w-full rounded-md border border-transparent px-5 py-3 bg-gray-900 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud section */}
          <div className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
              <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
                Supported by
              </p>
              <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
                {logos.map((logo) => (
                  <div
                    key={logo.name}
                    className="col-span-1 flex justify-center py-8 px-8 bg-gray-50"
                  >
                    <p className="text-2xl font-bold text-gray-500">
                      {logo.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Footer section */}
        <footer className="mt-24 bg-gray-900 sm:mt-12">
          <div className="mx-auto max-w-md py-12 px-4 overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <nav
              className="-mx-5 -my-2 flex flex-wrap justify-center"
              aria-label="Footer"
            >
              {footerNavigation.main.map((item) => (
                <div key={item.name} className="px-5 py-2">
                  <a
                    href={item.href}
                    className="text-base text-gray-400 hover:text-gray-300"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </nav>
            <div className="mt-8 flex justify-center space-x-6">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-center text-base text-gray-400">
              &copy; 2021 Crypto for good.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  try {
    const res = await fetch('https://api.covid19india.org/data.json');
    const cases = await res.json();

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        cases,
      },
    };
  } catch (error) {
    return {
      props: {
        cases: false,
      },
    };
  }
}
