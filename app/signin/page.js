import Link from "next/link";
import React from "react";

export default function signin() {
  return (
    <section className="conta flex-center flex-col w-full">
      <h3 className="section_text2">Sign in to your PARASITOS account</h3>
      <h3 className="para_text">No account yet?</h3>
      <Link href="/" className="para_text2">Create one!</Link>
      <button type="button" class="login-with-google-btn">
        Sign in with Google
      </button>
      <div class="login-form">
        <div class="sign-in-htm">
          <div class="group">
            <label for="user" class="label">
              Email
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
            <Link href="/" className="forgot_pwd">Forgot password?</Link>
            <input type="submit" class="button" value="Sign In"></input>
          </div>
        </div>
      </div>
    </section>
  );
}
