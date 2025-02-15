"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import PotraitSvg from "./components/PotraitSvg";

export default function Home() {
  const portraitRef = useRef(null);
  console.log('potrait',portraitRef);
  return (
    <main className=" ">
      <div className="flex flex-col md:flex-row w-full gap-y-6 md:gap-y-0 md:gap-x-6 gap-x-0 md:h-[35rem]">
        {/* <picture className="overflow-hidden h-96 md:h-full rounded-3xl w-full md:w-2/5">
          <source
            className="object-cover h-full w-full object-top"
            srcSet="assets/somto_image.webp 1x, assets/somto_image-2x.webp 2x"
            type="image/webp"
          />
          <img
            className="object-cover h-full w-full object-top"
            srcSet="assets/somto_image.png 1x, assets/somto_image-2x.png 2x"
            src="assets/somto_image.png"
            alt="Professional picture of Somtochukwu Anunobi"
          />
        </picture> */}
        <div className="relative overflow-hidden h-96 md:h-full rounded-3xl w-full md:w-2/5">
          <PotraitSvg/>
        </div>
        {/* <!-- bio and cta --> */}
        <div className=" rounded-3xl bg-surface flex flex-col gap-y-4 p-8 md:justify-between w-full md:w-3/5">
          <div className="flex flex-col gap-y-8 leading-8">
            <h1 className="lg:text-6xl md:text-4xl text-3xl font-extrabold break-words">
              Hi, I&#x2019;m Somtochukwu, a full stack developer
            </h1>
            <p className="md:text-2xl text-base leading-loose">
              I am passionate about crafting application to solve problems in
              the most accessible way.
            </p>
          </div>
          {/* <!-- cta buttons --> */}
          <div className="flex w-full flex-col md:flex-row md:gap-x-6 md:gap-y-0 gap-y-4">
            <Link
              href="/contact.html"
              className="button"
              aria-label="Contact me"
            >
              Contact me
            </Link>
            <div className="flex md:w-auto w-full justify-center md:justify-start gap-x-4">
              <Link
                href="https://www.linkedin.com/in/somtoanunobi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Somtochukwu Anunobi's LinkedIn profile"
                className="p-3 rounded-full bg-surface text-on-primary-container hover:bg-primary"
              >
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      id="Vector"
                      d="M5.5 7.5C6.32843 7.5 7 6.82843 7 6C7 5.17157 6.32843 4.5 5.5 4.5C4.67157 4.5 4 5.17157 4 6C4 6.82843 4.67157 7.5 5.5 7.5Z"
                      fill="currentColor"
                    />
                    <path
                      id="Vector_2"
                      d="M4 9.5C4 8.94772 4.44772 8.5 5 8.5H6C6.55228 8.5 7 8.94771 7 9.5V17.5C7 18.0523 6.55228 18.5 6 18.5H5C4.44772 18.5 4 18.0523 4 17.5V9.5Z"
                      fill="currentColor"
                    />
                    <path
                      id="Vector_3"
                      d="M10 18.5H11C11.5523 18.5 12 18.0523 12 17.5V13C12 11.5 15 10.5 15 12.5V17.5004C15 18.0527 15.4477 18.5 16 18.5H17C17.5523 18.5 18 18.0523 18 17.5V11.5C18 9.5 16.5 8.5 14.5 8.5C12.5 8.5 12 10 12 10V9.5C12 8.94771 11.5523 8.5 11 8.5H10C9.4477 8.5 9 8.94772 9 9.5V17.5C9 18.0523 9.4477 18.5 10 18.5Z"
                      fill="currentColor"
                    />
                    <path
                      id="Vector_4"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19 0.5C20.6569 0.5 22 1.84315 22 3.5V19.5C22 21.1569 20.6569 22.5 19 22.5H3C1.34315 22.5 0 21.1569 0 19.5V3.5C0 1.84315 1.34315 0.5 3 0.5H19ZM19 2.5C19.5523 2.5 20 2.94772 20 3.5V19.5C20 20.0523 19.5523 20.5 19 20.5H3C2.44772 20.5 2 20.0523 2 19.5V3.5C2 2.94772 2.44772 2.5 3 2.5H19Z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </Link>
              <Link
                href="https://twitter.com/anunobisomto"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Somtochukwu Anunobi's Twitter profile"
                className="p-3 rounded-full bg-surface text-on-primary-container  hover:bg-primary"
              >
                <svg
                  width="23"
                  height="20"
                  viewBox="0 0 23 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.6413 1.9404C19.9898 1.8578 20.2328 1.77659 20.4319 1.6913C20.7109 1.57176 20.9422 1.42856 21.3077 1.18739C21.6148 0.984704 22.0084 0.967054 22.3324 1.14143C22.6564 1.31581 22.8585 1.65405 22.8585 2.02201C22.8585 3.10294 22.7238 3.98888 22.412 4.76855C22.1496 5.42436 21.781 5.95702 21.3401 6.44183C21.1539 9.80495 20.1804 12.4461 18.6921 14.447C17.1495 16.5209 15.0971 17.849 12.9336 18.5928C10.7764 19.3343 8.4971 19.5 6.45517 19.2489C4.42664 18.9995 2.55151 18.3279 1.24452 17.3114C0.886605 17.033 0.760788 16.5486 0.937985 16.1312C1.11518 15.7138 1.55103 15.4679 1.99991 15.5321C3.28588 15.7158 4.52377 15.4234 5.54167 15.0054C5.34129 14.8964 5.15236 14.7784 4.97675 14.6568C4.04922 14.0147 3.30087 13.143 2.96405 12.4693C2.82466 12.1906 2.82322 11.8627 2.96016 11.5828C3.0308 11.4383 3.13409 11.3152 3.25952 11.2213C1.90525 10.1036 1.35846 8.55765 1.35846 7.52201C1.35846 7.21407 1.50034 6.9233 1.74306 6.7338C1.84512 6.65412 1.96022 6.59607 2.08155 6.56111C1.98021 6.26437 1.90157 5.96456 1.84163 5.67431C1.57586 4.38745 1.59945 2.93499 1.88832 1.77948C1.98717 1.38406 2.31611 1.08821 2.71976 1.03167C3.1234 0.975144 3.52097 1.16924 3.72465 1.52229C4.80217 3.38997 6.78963 4.53158 8.63933 5.20783C9.50898 5.52577 10.3144 5.72837 10.9181 5.85293C11.0484 4.63234 11.3892 3.62575 11.9123 2.82626C12.6024 1.77147 13.5649 1.1474 14.5985 0.869134C16.3812 0.389234 18.3593 0.935974 19.6413 1.9404ZM10.6069 7.8306C9.92177 7.69302 8.98018 7.46191 7.95259 7.08623C6.59537 6.59004 5.01935 5.81633 3.69919 4.61786C3.72282 4.8384 3.75636 5.05707 3.8003 5.26981C4.02155 6.34114 4.43267 6.94114 4.80568 7.12764C5.26189 7.35575 5.47331 7.89065 5.29634 8.36905C5.05674 9.01675 4.42657 9.06985 3.85399 8.92675C4.31451 9.61715 5.14224 10.3056 6.52286 10.5357C6.99904 10.6151 7.35055 11.0233 7.35833 11.506C7.36612 11.9887 7.02796 12.408 6.55458 12.5027L5.68412 12.6768C5.81729 12.7925 5.96147 12.906 6.11517 13.0124C6.81209 13.4949 7.51183 13.703 8.11593 13.552C8.56838 13.4389 9.03895 13.6535 9.2501 14.0694C9.46126 14.4852 9.35693 14.9918 8.99865 15.2903C8.35473 15.8263 7.60273 16.2564 6.84904 16.6133C6.49522 16.7809 6.09981 16.9463 5.67037 17.0919C6.00065 17.1624 6.34433 17.2202 6.69925 17.2639C8.46983 17.4816 10.4406 17.3348 12.2834 16.7014C14.1199 16.0701 15.8174 14.9607 17.0874 13.2534C18.3555 11.5484 19.2405 9.18885 19.3592 5.98506C19.3685 5.73282 19.4729 5.49344 19.6514 5.31496C20.101 4.86531 20.4726 4.34992 20.6554 3.73645C20.3355 3.83618 19.9753 3.9225 19.5463 4.00452C19.2208 4.06674 18.8857 3.96371 18.6514 3.72942C17.8869 2.96489 16.3749 2.46213 15.1184 2.80037C14.5271 2.95956 13.9896 3.30418 13.5859 3.92121C13.1738 4.55119 12.8585 5.5326 12.8585 7.02205C12.8585 7.30503 12.7386 7.57475 12.5286 7.76436C12.0306 8.21385 11.1925 7.94818 10.6069 7.8306Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
              <Link
                href="https://www.github.com/somtosoft"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Somtochukwu Anunobi's GitHub profile"
                className="p-3 rounded-full bg-surface text-on-primary-container  hover:bg-primary"
              >
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.43305 2.04482C3.49128 1.01473 3.73734 0.566795 4.44297 0.207085C5.20222 -0.180076 6.3997 9.70364e-05 7.80878 0.713635C8.4157 1.02112 8.4775 1.02737 9.54114 0.891005C10.9549 0.709675 12.775 0.710315 14.0799 0.892665C15.0667 1.03057 15.1315 1.02367 15.7399 0.715555C17.74 -0.297296 19.3191 -0.231025 19.8909 0.889725C20.1763 1.44915 20.2293 2.90073 20.008 4.09797C19.8853 4.76171 19.8983 4.84458 20.1939 5.28014C22.2736 8.34487 20.7751 13.3126 17.2114 15.1665C16.9387 15.3084 16.7089 15.3962 16.5216 15.4677C15.9465 15.6873 15.7719 15.754 15.9833 16.7648C16.0851 17.251 16.2077 18.4598 16.2559 19.4512C16.343 21.2432 16.3417 21.2557 16.0274 21.6213C15.5996 22.1186 14.983 22.127 14.5652 21.6412C14.2927 21.3244 14.2661 21.1748 14.2661 19.9525C14.2661 18.1462 14.0681 16.9456 13.6003 15.9168C13.044 14.6925 13.4564 14.236 14.7286 13.9624C16.4969 13.582 17.878 12.4907 18.6478 10.8656C19.3797 9.32083 19.49 7.18603 18.1668 5.8877C17.7905 5.44053 17.7643 5.03549 18.033 3.81412C18.1334 3.35763 18.2176 2.7687 18.2201 2.50528C18.2239 2.08926 18.186 2.02643 17.9305 2.02643C17.7688 2.02643 17.151 2.26164 16.5578 2.54907L15.611 3.00797C15.5249 3.04968 15.4286 3.06572 15.3336 3.05482C12.9261 2.77848 10.6385 2.77421 8.21926 3.0559C8.1239 3.067 8.02718 3.05096 7.9408 3.00904L6.99449 2.54984C6.40123 2.26189 5.78346 2.02643 5.62181 2.02643C5.24805 2.02643 5.24244 2.30237 5.58312 3.9418C5.79123 4.94306 5.93127 5.16615 5.32966 5.96674C4.4279 7.16678 4.20265 8.65695 4.68622 10.2226C5.29569 12.1956 6.78815 13.5285 8.88637 13.9732C10.1512 14.2413 10.4818 14.5911 9.99884 16.0415C9.61864 17.1829 9.37824 17.4771 8.82571 17.4771C8.08229 17.4771 7.61661 16.8331 7.87289 16.1592C7.98577 15.8622 7.95219 15.8305 7.25575 15.5765C5.12981 14.8014 3.50379 13.0641 2.76037 10.7733C2.18576 9.00286 2.43859 6.69841 3.3604 5.30555C3.67426 4.83131 3.67911 4.79108 3.53264 3.88319C3.44977 3.36925 3.40496 2.54205 3.43305 2.04482Z"
                    fill="currentColor"
                  />
                  <path
                    d="M2.69055 14.9964C2.3842 14.5369 1.76333 14.4127 1.3038 14.7191C0.844281 15.0254 0.720101 15.6463 1.02645 16.1058C1.25262 16.4451 1.52319 16.7238 1.75296 16.9535C1.79532 16.9959 1.83648 17.0368 1.87667 17.0767C2.06914 17.2679 2.23908 17.4367 2.40976 17.6371C2.78727 18.0802 3.16388 18.677 3.37792 19.7472C3.47326 20.2239 3.81591 20.4807 4.00577 20.5929C4.21167 20.7145 4.43664 20.7862 4.62177 20.8329C5.00048 20.9284 5.46021 20.978 5.89651 21.0069C6.37547 21.0387 6.89444 21.049 7.35851 21.0518C7.35885 21.6037 7.80643 22.0511 8.3585 22.0511C8.91079 22.0511 9.3585 21.6034 9.3585 21.0511V20.0511C9.3585 19.4988 8.91079 19.0511 8.3585 19.0511C8.26423 19.0511 8.16224 19.0514 8.05421 19.0518C7.46735 19.0536 6.7024 19.0559 6.0287 19.0113C5.70383 18.9898 5.43677 18.9593 5.24093 18.922C4.93935 17.7381 4.45214 16.9504 3.93225 16.3401C3.70243 16.0704 3.46445 15.8344 3.27088 15.6424C3.23464 15.6065 3.19996 15.5721 3.16717 15.5393C2.94382 15.316 2.79772 15.1572 2.69055 14.9964Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
