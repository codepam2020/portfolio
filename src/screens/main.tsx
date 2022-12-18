// import React, { useEffect, useState } from "react";
import { ContentContainer } from "../components";


export default function Main () {

  // const [careerVisible, setCareerVisible] = useState<boolean>();

  // function interSectionCareer () {
  //   const observation = IntersectionObserver;
  // }

  return (
    <div className="flex flex-col items-center justify-start w-full p-3 py-5 min-h-screen">

      <div className="flex flex-col items-center justify-start w-full my-6 xl:my-10">
        <a className="animate-cchange font-bold text-6xl text-center select-none" href="#" >
          CODEPAM Portfolio
        </a>
      </div>

      <ContentContainer title="Profile">

        <h1 >Education</h1>
        <li>2015 - 2019 &nbsp; Department of Integrative Biotechnology, University of Sungkyunkwan, Suwon, Korea</li>
        <li>2021 - 2025 &nbsp; B.S. Department of Pharmacy, University of Woosuk, Jeonju, Korea</li>
        <br />

        <h1>Qualifications</h1>
        <li>ADSP &nbsp;(데이터 처리 준전문가)</li>
        <br />

        <h1 >Contact</h1>
        <li>E-Mail : codepam2020@gmail.com</li>
        <li>
          Git Hub : <a href="https://github.com/codepam2020" target="_blank" className="text-pink-300">
            codepam2020
          </a>
        </li>
        <li>
          Blog :
          <a target="_blank" href="https://pharmcoding.tistory.com/" className="text-pink-300">
            &nbsp;Tistory Blog Link
          </a>
        </li>
      </ContentContainer>

      <ContentContainer title="Mobile App Project 1">
        <h1>Product Name</h1>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;이게뭐약 &nbsp;&nbsp; ( What is this drug )</p>
        <br />

        <h1>Period of Production</h1>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;Nov.2021 - Dec.2021</p>
        <br />

        <h1>Tech Stack</h1>
        <li >Javascript</li>
        <li >Python</li>
        <li >React Naive</li>
        <li >Expo</li>
        <li >Pands</li>
        <li >Redux</li>
        <li >Styled-Components</li>
        <li >공공데이터포털 API</li>
        <br />
        <h1>Introduction</h1>

        <br />

        <h1>Source Code</h1>

      </ContentContainer>

      <ContentContainer title="Window App Project">
        <h1>Product Name</h1>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;File Manager</p>
        <br />
        <h1>Period of Production</h1>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;Dec.2021 - Dec.2021</p>
        <br />
        <h1>Tech Stack</h1>
        <li >Python</li>
        <li >PyQt5</li>
        <br />
        <h1>Introduction</h1>
      </ContentContainer>




    </div>
  );
}