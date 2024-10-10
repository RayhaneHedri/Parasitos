import Card from "@app/components/Card";
import Link from "next/link";
import React from "react";

export default function subscription() {
  return (
    <div>
      <section className="conta flex-center flex-col w-full">
        <h3 className="section_text2">Choose Your Subscription</h3>
        <div className="flex flex-row gap-x-8 mt-10">
          <Card image="/assets/ICON-RED.png">
            <div className="flex flex-col justify-center items-center h-full">
              <button className="blue_btn">Select</button>
              <button className="blue_btn2">Learn More</button>
            </div>
          </Card>
          <Card image="/assets/ICON-RED.png">
            <div className="flex flex-col justify-center items-center h-full">
              <button className="blue_btn">Select</button>
              <button className="blue_btn2">Learn More</button>
            </div>
          </Card>
          <Card image="/assets/ICON-RED.png">
            <div className="flex flex-col justify-center items-center h-full">
              <button className="blue_btn">Select</button>
              <button className="blue_btn2">Learn More</button>
            </div>
          </Card>
        </div>
        <button className="blue_btn mt-10">Contact Us</button>
      </section>
      <section className="conta flex-center flex-col w-full bg-gray-900/10 mt-10">
        <h3 className="red_text2">Send us a Gift</h3>
        <div className="flex w-full h-auto">
          <div className="w-2/3 h-full flex flex-col items-center justify-start border-r border-gray-300 p-4 mt-5 ml-64 ">
            <h3 className="paragraph_text2">
              Your generosity fuels our mission to spread wisdom and silence the
              noise! Thank you for considering supporting our magazine.
            </h3>
          </div>
          <div className="w-1/3 h-full flex items-start mr-40">
            <img className="h-56 object-cover w-56 border-gray-300" src="/assets/box_mockup.png"></img>
          </div>
        </div>

        <button className="primary_btn">SEND US A GIFT</button>
      </section>

      <section className="conta flex-center flex-col w-full mt-10">
      <h3 className="paragraph_text">
      Parasitos is published twice a month (except for June & August) by Parasitos Magazine UK Ltd. Your first issue mails within 4-6 weeks. Parasitos will be delivered in the form of double issues, which count as two. Frequency is subject to change without notice.
            </h3>
      </section>
    </div>
  );
}
