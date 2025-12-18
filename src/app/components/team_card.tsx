import Image from "next/image";
import Link from "next/link";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ECTeamData from "~/app/data/ECTeamData";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import CCTeamData from "~/app/data/CCTeamData";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import WebTeamData from "~/app/data/WebTeamData";
import {faLinkedin, faSquareInstagram} from "@fortawesome/free-brands-svg-icons";
import './team_card.css';

// Add a type for the team data
interface TeamMember {
  name: string;
  imageURL: string;
  position: string;
  hasLinkedIn: boolean;
  linkedInURL: string;
  hasInstagram: boolean;
  instagramURL: string;
}

export function ECTeamCard() {
  return (
    <>
      {ECTeamData.map((data: TeamMember, index: React.Key | null | undefined) => (
        <div key={index}>
          <div className="relative flex justify-center items-center mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl aspect-square">
            <div className="relative overflow-hidden transition duration-500 transform w-full h-full">
              <Image src={data.imageURL} alt={data.name} width={600} height={600} className="object-cover w-full h-full" unoptimized />
              <div
                className="absolute inset-0 flex flex-col justify-end px-4 py-2 transition-opacity duration-300 bg-[#292929] bg-opacity-40 opacity-0  hover:opacity-100">
                <div className="justify-center">
                  <ul className="flex flex-col items-start text-white text-base font-medium">
                    {data.hasLinkedIn &&
                      <li>
                        <Link href={data.linkedInURL} className="inline-flex gap-2">
                          <FontAwesomeIcon icon={faLinkedin} size="xl"/>
                          <p className="inline-flex hover:underline hover:underline-offset-2">Linkedin<span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" className="w-4 h-4"><path fillRule="evenodd"
                                                                                               d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                                               clipRule="evenodd"/></svg>
                                        </span>
                          </p>
                        </Link>
                      </li>
                    }
                    {data.hasInstagram && <li>
                      <Link href={data.instagramURL} className="inline-flex gap-2">
                        <FontAwesomeIcon icon={faSquareInstagram} size="xl"/>
                        <p className="inline-flex hover:underline hover:underline-offset-2">Instagram<span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" className="w-4 h-4"><path fillRule="evenodd"
                                                                                               d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                                               clipRule="evenodd"/></svg>
                                        </span>
                        </p>
                      </Link>
                    </li>}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4">
            <p className="text-center text-xl font-bold">{data.name}</p>
            <p className="text-center text-lg">{data.position}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export function WebTeamCard() {
  return (
    <>
      {WebTeamData.map((data: TeamMember, index: React.Key | null | undefined) => (
        <div key={index}>
          <div className="relative flex justify-center items-center mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl aspect-square">
            <div className="relative overflow-hidden transition duration-500 transform w-full h-full">
              <Image src={data.imageURL} alt={data.name} width={600} height={600} className="object-cover w-full h-full" unoptimized />
              <div
                className="absolute inset-0 flex flex-col justify-end px-4 py-2 transition-opacity duration-300 bg-[#292929] bg-opacity-40 opacity-0  hover:opacity-100">
                <div className="justify-center">
                  <ul className="flex flex-col items-start text-white text-base font-medium">
                    {data.hasLinkedIn &&
                      <li>
                        <Link href={data.linkedInURL} className="inline-flex gap-2">
                          <FontAwesomeIcon icon={faLinkedin} size="xl"/>
                          <p className="inline-flex hover:underline hover:underline-offset-2">Linkedin<span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" className="w-4 h-4"><path fillRule="evenodd"
                                                                                               d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                                               clipRule="evenodd"/></svg>
                                        </span>
                          </p>
                        </Link>
                      </li>
                    }
                    {data.hasInstagram && <li>
                      <Link href={data.instagramURL} className="inline-flex gap-2">
                        <FontAwesomeIcon icon={faSquareInstagram} size="xl"/>
                        <p className="inline-flex hover:underline hover:underline-offset-2">Instagram<span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" className="w-4 h-4"><path fillRule="evenodd"
                                                                                               d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                                               clipRule="evenodd"/></svg>
                                        </span>
                        </p>
                      </Link>
                    </li>}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4">
            <p className="text-center text-xl font-bold">{data.name}</p>
            <p className="text-center text-lg">{data.position}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export function CCTeamCard() {
  // Cast CCTeamData as TeamMember[]
  const ccTeam: TeamMember[] = CCTeamData as TeamMember[];
  return (
    <>
      {ccTeam.map((data: TeamMember, index: React.Key | null | undefined) => (
        <div key={index}>
          <div className="relative flex justify-center items-center mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl aspect-square">
            <div className="relative overflow-hidden transition duration-500 transform w-full h-full">
              <Image src={data.imageURL} alt={data.name} width={600} height={600} className="object-cover w-full h-full" unoptimized />
              <div
                className="absolute inset-0 flex flex-col justify-end p-8 text-center transition-opacity duration-300 bg-[#292929] bg-opacity-40 opacity-0 hover:opacity-100">
                <div className="justify-center">
                  <ul className="flex flex-col items-start text-white text-base font-medium">
                    {data.hasLinkedIn &&
                      <li>
                        <Link href={data.linkedInURL} className="inline-flex gap-2">
                          <FontAwesomeIcon icon={faLinkedin} size="xl"/>
                          <p className="inline-flex hover:underline hover:underline-offset-2">Linkedin<span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                 fill="currentColor" className="w-4 h-4"><path fillRule="evenodd"
                                                                               d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                 clipRule="evenodd"/></svg>
                          </span>
                          </p>
                        </Link>
                      </li>
                    }
                    {data.hasInstagram && <li>
                      <Link href={data.instagramURL} className="inline-flex gap-2">
                        <FontAwesomeIcon icon={faSquareInstagram} size="xl"/>
                        <p className="inline-flex hover:underline hover:underline-offset-2">Instagram<span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                               fill="currentColor" className="w-4 h-4"><path fillRule="evenodd"
                                                                             d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                               clipRule="evenodd"/></svg>
                        </span>
                        </p>
                      </Link>
                    </li>}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4">
            <p className="text-center text-xl font-bold">{data.name}</p>
            <p className="text-center text-lg">{data.position}</p>
          </div>
        </div>
      ))}
    </>
  )
}
