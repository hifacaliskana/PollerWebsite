<body>
  <form method="POST" action="./">
    <!-- Headings for the form -->
    <div class="headingsContainer">
      <h3>Sign in</h3>
      <p>Sign in with your username and password</p>
    </div>

    <!-- Main container for all inputs -->
    <div class="mainContainer">
      <!-- Username -->
      <label for="username">Your username</label>
      <input
        type="text"
        placeholder="Enter Username"
        name="username"
        required
      />

      <br /><br />

      <!-- Password -->
      <label for="pswrd">Your password</label>
      <input type="text" placeholder="Enter Password" name="pswrd" required />

      <!-- sub container for the checkbox and forgot password link -->
      <div class="subcontainer">
        <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember me
        </label>
        <p class="forgotpsd"><a href="/">Forgot Password?</a></p>
      </div>

      <!-- Submit button -->
      <button type="submit">Login</button>

      <!-- Sign up link -->
      <p class="register">
        Not a member? <a href="/register">Register here!</a>
      </p>
    </div>
  </form>
</body>

<style>
  body {
    font-family: sans-serif;
    color: whitesmoke;
  }

  form {
    width: 50rem;
    margin: auto;
    color: whitesmoke;
    background-color: rgba(11, 15, 13, 0.75);
    border-radius: 12px;
    padding: 20px 25px;
    margin-top: 100px;
  }

  input[type="text"],
  input[type="text"] {
    width: 100%;
    margin: 10px 0;
    border-radius: 5px;
    padding: 15px 18px;
    box-sizing: border-box;
    font-size: 16px;
  }

  button {
    background-color: rgb(14, 88, 39);
    color: white;
    padding: 14px 20px;
    border-radius: 5px;
    margin: 7px 0;
    width: 100%;
    font-size: 18px;
  }

  button:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  .headingsContainer {
    text-align: center;
  }

  .headingsContainer p {
    color: #fcf1e1;
  }
  .mainContainer {
    padding: 16px;
  }

  .subcontainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .subcontainer a {
    margin-bottom: 12px;
  }

  .forgotpsd a {
    color: rgb(94, 9, 141);
  }

  .forgotpsd a:link {
    text-decoration: none;
  }

  .register {
    color: white;
    text-align: center;
  }

  .register a {
    color: rgb(74, 146, 235);
  }

  .register a:link {
    text-decoration: none;
  }

  label {
    font: 16px/1.5 Arial, sans-serif;
  }

  p,
  h3 {
    font: 16px/1.5 Arial, sans-serif;
  }
</style>
