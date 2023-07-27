import React from "react";
import Agen from "../assets/AgenSQL-Logo.png";
import Archi from "../assets/archi.png";
import Diagram from "../assets/diagram.png";
import FlipCard from "../Components/FlipCard";
import Lastassest from "../assets/last assest.png"

const Content = () => {
  const back1=()=>{
    return(
      <ul>
        <li>provides a convenient interface for backup & restore</li>
        <li>provides backup & restore features for DB and table objects</li>
      </ul>

    );
  }
  const back2=()=>{
    return(
      <ul>
        <li>monitors real-time session & transaction lock</li>
        <li>provides status for server CPU & memory</li>
      </ul>

    );
  }
  const back3=()=>{
    return(
      <ul>
        <li>provides module for script, SQL job, and scheduling management</li>
        <li>provides UX dedicated to scheduling</li>
      </ul>

    );
  }
  const back4=()=>{
    return(
      <ul>
        <li>enables auditing via user interface</li>
        <li>view audit results via user interface</li>
      </ul>

    );
  }
  const back5=()=>{
    return(
      <ul>
        <li>collects query statistics required for performance analysis</li>
        <li>extracts monitoring results in query</li>
      </ul>

    );
  }
  const back6=()=>{
    return(
      <ul>
        <li>monitors and collects operation status & statistical data</li>
        <li>provides status reports required for improving performance</li>
      </ul>

    );
  }
  
  


  return (
    <div className=" flex flex-col  mt-24  w-full text-lg  ">
      <section className=" bg-white w-full text-center pb-32">
        <img className="mr-auto ml-auto w-80" src={Agen} alt="" />
        <h2 className=" text-2xl font-extrabold mt-4">
          An integration of Bitnine’s DB technology and PG expertise
        </h2>
        <p className="text-[#6f6f6f] mt-4">
          AgensSQL is an all-new relational DBMS based on PostgreSQL, with years
          of expertise
          <br />
          and knowledge accumulated through database research and development.{" "}
          <br />
          <br />
          The enterprise package, along with AgensSQL engine, is an all-in-one
          solution that ensures
          <br />
          the efficiency and scalability of data management.
          <br />
          <br />
          Get AgensSQL now for stable operation and management services at a
          reduced
          <br />
          maintenance cost.
        </p>
        <div className=" flex  justify-center space-x-16  mt-14">
          <button className="btn w-40 bg-blue-800 rounded-lg text-white hover:text-yellow-500 hover:bg-blue-800">
            CONTACT
          </button>
          <button className="btn w-40 bg-blue-800 rounded-lg text-white hover:text-yellow-500 hover:bg-blue-800">
            BROCURE
          </button>
          <button className="btn w-40 bg-blue-800 rounded-lg text-white hover:text-yellow-500 hover:bg-blue-800">
            BLOG
          </button>
        </div>
      </section>
      <section className="w-full bg-[#f3f6fb] flex justify-center pt-32 pb-32 ">
        <img src={Archi} alt="" />
      </section>
      <section className="w-full bg-white flex flex-col items-center   pt-32 pb-32">
        <h1 className="  text-4xl font-extrabold pb-5">Key Features</h1>
        <p className="text-center pb-7 text-[#6f6f6f]">
          Manage your data with Agens Enterprise Package <br />
          Essential enterprise features such as high availability and sharding
          are provided
        </p>
        <img src={Diagram} alt="" />
      </section>
      <section className="w-full bg-[#f3f6fb] flex flex-col items-center   pt-32 pb-32">
        <h1 className="  text-4xl font-extrabold pb-5">AgensSQL DB Engine</h1>
        <h2 className="text-[#6f6f6f] underline text-2xl font-bold pb-5">
          Enhanced Data Security{" "}
        </h2>
        <p className="text-[#6f6f6f] text-center pb-11">
          AgensSQL is a PostgreSQL-based DBMS
          <br />
          that guarantees optimal security and stability.
        </p>
        <div className=" flex justify-center space-x-6">
          <div className=" text-center shadow-md hover:shadow-2xl hover:ease-in duration-300  card relative w-[300px] h-[200px]  ">
            <div className="front rounded-xl   align-text-bottom absolute w-full bg-white z-[1] h-full">
              {" "}
              PASSWORD
            </div>
            <div className="back rounded-xl p-5  absolute bg-white hover:border-[1px] hover:border-blue-600  z-[2] opacity-0 w-full h-full text-start pt-5">
              <ul className="list">
                <li>user password policy reinforces login security</li>
                <li>excessive failed login attempts lock an account</li>
                <li>define rules for password complexity</li>
              </ul>{" "}
            </div>
          </div>
          <div className=" text-center  card relative w-[300px] h-[200px]   shadow-md hover:shadow-2xl hover:ease-in duration-300  ">
            <div className="front rounded-xl  align-text-bottom absolute w-full bg-white z-[1] h-full">
              {" "}
              Data Redaction
            </div>
            <div className="back rounded-xl p-5 hover:border-[1px] hover:border-blue-600 absolute bg-white z-[2] opacity-0 w-full h-full text-start pt-5">
              <ul className="list">
                <li>enhanced data security of user personal information</li>
                <li>resolve privacy issues in preparation for security audits</li>
                <li>encryption or masking with unidentifiable special characters</li>
              </ul>{" "}
            </div>
          </div>
          <div className=" text-center  card shadow-md hover:shadow-2xl hover:ease-in duration-300 relative w-[300px] h-[200px]  ">
            <div className="front rounded-xl  align-text-bottom absolute w-full bg-white z-[1] h-full">
              {" "}
              Auditing
            </div>
            <div className="back rounded-xl p-5 hover:border-[1px] hover:border-blue-600   absolute bg-white z-[2] opacity-0 w-full h-full text-start pt-5">
              <ul className="list">
                <li>monitors database activities and collects data</li>
                <li>traces object accessed or DDL & DML statements executed by a user</li>
                <li>records all actions in logs</li>
              </ul>{" "}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-white flex justify-between  pt-32 pb-32">
      <div className="main-container w-full flex flex-col">
        <div className="top flex flex-col items-center text-center pb-16">
          <h1>Agens Enterprise Package</h1>
          <p>Agens Enterprise Package comes with a high availability management server that <br/>
supports backup and data monitoring dashboard that helps enterprise customers manage their data efficiently.</p>
        </div>
        <div className="bottom flex w-full ">
        <div className="left w-[50%] flex flex-col items-center  ">
          <h1 className="text-2xl font-extrabold mb-5 mt-0">Agens HA Manager</h1>
          <h2><span className=" text-[#0082cb] font-extrabold text-2xl">HA Clustering</span> <span className=" text-2xl"> - Failover/Failback, Load-balancing</span></h2>
        <img src={Lastassest} className=" p-[2rem] pt-6 " alt="" />
      </div>
      <div className="right w-[50%]  flex flex-col items-center ">
        <h2 className=" text-center pb-10 font-extrabold text-2xl mb-3">Agens Enterprise Manager</h2>
        <div className="flex flex-col gap-4 w-[80%]   ">
          <FlipCard frontContent={'Backup/Restore'} backContent={back1()}/>
          <FlipCard backContent={back2()} frontContent={'DB Monitroing Dashboard'}/>
          <FlipCard backContent={back3()} frontContent={'Schedule Management'}/>
          <FlipCard backContent={back4()} frontContent={'Database Aduit'}/>
          <FlipCard backContent={back5()} frontContent={'SQL Monitoring'}/>
          <FlipCard backContent={back6()} frontContent={'Perfomance Management'}/>
        </div>

      </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Content;
