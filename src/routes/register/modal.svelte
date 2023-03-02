<body>
  <form method="POST" action="/register">
    <!-- Headings for the form -->
    <div class="headingsContainer">
      <h3>Sign up</h3>
      <p>Sign up with your username and password</p>
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

      <!-- Email -->
      <label for="username">Your email</label>
      <input type="text" placeholder="Enter email" name="email" required />

      <br /><br />

      <!-- Password -->
      <label for="pswrd">Your password</label>
      <input
        type="password"
        placeholder="Enter Password"
        name="pswrd"
        required
      />

      <br /><br />

      <label for="pswrd">Your password again</label>
      <input
        type="password"
        placeholder="Enter Password again"
        name="pswrdAgain"
        required
      />

      <br /><br />

      <!-- sub container for the checkbox and forgot password link -->
      <div class="subcontainer">
        <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember me
        </label>
      </div>

      <!-- Submit button -->
      <button type="submit">Sign up</button>

      <!-- Sign up link -->
      <p class="register">
        Have you an account? <a href="/">Login here!</a>
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
    width: 35rem;
    margin: auto;
    color: whitesmoke;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(11, 15, 13, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    padding: 20px 25px;
    margin-top: 25px;
  }

  input[type="text"],
  input[type="password"] {
    width: 100%;
    margin: 10px 0;
    border-radius: 5px;
    padding: 15px 18px;
    box-sizing: border-box;
  }

  button {
    background-color:  rgb(14, 88, 39);
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
    color: #FCF1E1;
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

  /* Media queries for the responsiveness of the page */
  @media screen and (max-width: 600px) {
    form {
      width: 25rem;
    }
  }

  @media screen and (max-width: 400px) {
    form {
      width: 20rem;
    }
  }
</style>
