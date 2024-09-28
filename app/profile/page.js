import Link from "next/link";
import React from "react";

export default function profile() {
  return (
    <div>
      <section className="flex w-full h-auto">
        {/* Left Side */}
        <div className="w-1/2 h-full flex flex-col items-center justify-start border-r border-gray-300 p-4  mt-12">
          <img
            className="rounded-full w-32 h-32 object-cover  border-4 border-gray-300"
            src="/assets/profile avatar.png"
            alt="profile pic"
          />
          <h3 className="text-xl mt-4">Foulen Fouleni</h3>
          <button className="primary_btn">Update</button>
        </div>

        {/* Right Side */}
        <div className="w-1/2 h-full flex items-start ml-16 mt-12">
          <div class="login-form">
            <div class="sign-in-htm">
              <div class="group">
                <label for="user" class="label">
                  User Name
                </label>
                <input id="user" type="text" class="input" />
              </div>
              <div class="group">
                <label for="user" class="label">
                  E-Mail
                </label>
                <input id="user" type="text" class="input" />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  class="input"
                  data-type="password"
                />
              </div>
              <div class="group">
                <label for="user" class="label">
                  Birthday
                </label>
                <input id="user" type="text" class="input" />
              </div>
            </div>
            <button className="primary_btn ml-80">Update</button>
          </div>
        </div>
      </section>
      <div className="flex flex-col pl-72 mt-20 mb-20 w-4/5">
        <h3 className="catch_text">Tell us more about yourself</h3>

        <textarea
          id="user"
          className="w-full h-40 mt-3 rounded-2xl bg-gray-900/10 p-4"
          rows="5"
        ></textarea>

        <button className="primary_btn self-end mt-4">Submit</button>
      </div>

      <div className="flex flex-col pl-72 mt-20 mb-20 w-4/5">
        <h3 className="catch_text">Your favorite articles</h3>

        <button className="primary_btn self-end mt-4">Submit</button>
      </div>
    </div>
  );
}
